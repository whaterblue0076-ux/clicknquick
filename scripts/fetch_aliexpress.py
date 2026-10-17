#!/usr/bin/env python3
"""
ClicknQuick - AliExpress auto-add script.

Finds popular AliExpress products through the official Affiliate API (hot-product query),
creates the affiliate tracking links, and adds up to MAX_NEW new products per run to
products.js (+ product page + sitemap entry).

Secrets are read from environment variables ALI_APP_KEY and ALI_APP_SECRET
(GitHub -> Settings -> Secrets). They are never written to any file.

Usage:   python scripts/fetch_aliexpress.py            (adds products)
         python scripts/fetch_aliexpress.py --dry-run  (only prints what it would add)
"""
import os, sys, re, json, time, hmac, hashlib, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API_URL = "https://api-sg.aliexpress.com/sync"
MAX_NEW = 10            # products added per run
PER_SEARCH = 2          # max new products taken from each search
MIN_SOLD = 1000         # honesty filter: only products with real sales
MIN_POSITIVE = 90.0     # honesty filter: % positive feedback
MIN_PRICE_PKR = 150     # skip junk/accessory listings

# (search keywords, our category slug). Edit freely.
SEARCHES = [
    ("portable neck fan", "appliances"),
    ("wireless earbuds bluetooth", "electronics"),
    ("car phone holder", "automotive"),
    ("kitchen gadget organizer", "home-kitchen"),
    ("led strip lights", "home-kitchen"),
    ("usb c cable fast charging", "mobile-accessories"),
    ("resistance bands set", "health-fitness"),
    ("travel packing cubes", "travel-accessories"),
    ("gel pens set stationery", "office-stationery"),
    ("pet grooming brush", "pet-supplies"),
    ("hair clips accessories", "beauty-personal-care"),
    ("storage box organizer", "home-kitchen"),
]

# Listings that use famous brand names are usually imitations -> skipped (our honesty rule).
BRAND_BLOCKLIST = ["apple", "airpods", "iphone", "samsung", "nike", "adidas", "philips", "sony", "jbl",
                   "xiaomi", "huawei", "dyson", "bose", "lego", "gucci", "louis vuitton", "rolex", "puma"]

def sign(params, secret):
    base = "".join(k + str(params[k]) for k in sorted(params))
    return hmac.new(secret.encode(), base.encode(), hashlib.sha256).hexdigest().upper()

def call_api(method, biz, key, secret):
    params = {"app_key": key, "timestamp": str(int(time.time() * 1000)), "sign_method": "sha256", "method": method}
    params.update({k: str(v) for k, v in biz.items()})
    params["sign"] = sign(params, secret)
    data = urllib.parse.urlencode(params).encode()
    req = urllib.request.Request(API_URL, data=data, headers={"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read().decode("utf-8"))

def extract_products(resp):
    """Returns the product list from a hotproduct.query response (or raises with the API error text)."""
    if "error_response" in resp:
        raise RuntimeError("API error: " + json.dumps(resp["error_response"])[:400])
    body = resp.get("aliexpress_affiliate_hotproduct_query_response")
    if not body:
        raise RuntimeError("Unexpected response: " + json.dumps(resp)[:400])
    result = body.get("resp_result", {})
    if str(result.get("resp_code")) != "200":
        raise RuntimeError("API said: " + json.dumps(result)[:400])
    prods = result.get("result", {}).get("products", {}).get("product", [])
    return prods if isinstance(prods, list) else [prods]

def fmt_price(v):
    try:
        return "Rs {:,.0f}".format(float(v))
    except Exception:
        return None

def pct(v):
    try:
        return float(str(v).replace("%", ""))
    except Exception:
        return 0.0

def clean_title(t):
    t = re.sub(r"\s+", " ", t or "").strip()
    return (t[:95].rsplit(" ", 1)[0] + "…") if len(t) > 100 else t

def good(p):
    title = (p.get("product_title") or "").lower()
    if any(re.search(r"\b" + re.escape(b) + r"\b", title) for b in BRAND_BLOCKLIST):
        return False
    try:
        price = float(p.get("target_sale_price"))
    except Exception:
        return False
    return (int(p.get("lastest_volume") or 0) >= MIN_SOLD and pct(p.get("evaluate_rate")) >= MIN_POSITIVE
            and price >= MIN_PRICE_PKR and p.get("promotion_link") and p.get("product_main_image_url"))

def to_record(p, category, order):
    pid = "ali-" + str(p["product_id"])
    gallery = [p["product_main_image_url"]]
    smalls = (p.get("product_small_image_urls") or {}).get("string", [])
    gallery += [u for u in smalls if u != p["product_main_image_url"]][:3]
    sold = int(p.get("lastest_volume") or 0)
    sold_txt = "{:,}+".format((sold // 100) * 100 if sold >= 1000 else sold)
    title = clean_title(p["product_title"])
    return {
        "id": pid, "addedOrder": order, "category": category, "name": title,
        "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.",
        "icon": "🛍️", "badge": "", "rating": None,
        "image": p["product_main_image_url"], "gallery": gallery,
        "why": "{} sold on AliExpress with {:.0f}% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.".format(sold_txt, pct(p.get("evaluate_rate"))),
        "stores": {"daraz": {"available": False}, "amazon": {"available": False},
                   "aliexpress": {"available": True, "verified": True, "url": p["promotion_link"], "price": fmt_price(p["target_sale_price"])}},
    }, title

def js_record(rec):
    return "  " + json.dumps(rec, ensure_ascii=False) + ",\n"

def add_products(new_items, root=ROOT, dry=False):
    """new_items: list of (record, title). Writes products.js, product pages and sitemap."""
    if not new_items:
        return 0
    pjs = os.path.join(root, "products.js")
    src = open(pjs, encoding="utf-8").read()
    marker = "  /* AUTO-ADD-END"
    if marker not in src:
        raise RuntimeError("Marker line missing in products.js")
    block = "".join(js_record(r) for r, _ in new_items)
    if dry:
        return len(new_items)
    src = src.replace(marker, block + marker, 1)
    open(pjs, "w", encoding="utf-8").write(src)
    tpl = open(os.path.join(root, "product-ali-led-motion-sensor-light.html"), encoding="utf-8").read()
    old_name = "Wireless Motion Sensor LED Night Light (USB-C Rechargeable)"
    sm_path = os.path.join(root, "sitemap.xml")
    sm = open(sm_path, encoding="utf-8").read()
    for rec, title in new_items:
        safe = title.replace("&", "&amp;").replace("<", "").replace(">", "").replace('"', "'")
        page = tpl.replace("ali-led-motion-sensor-light", rec["id"]).replace(old_name, safe)
        open(os.path.join(root, "product-%s.html" % rec["id"]), "w", encoding="utf-8").write(page)
        sm = sm.replace("</urlset>", "  <url><loc>https://clicknquick.netlify.app/product-%s.html</loc></url>\n</urlset>" % rec["id"])
    open(sm_path, "w", encoding="utf-8").write(sm)
    return len(new_items)

def existing_ids(root=ROOT):
    return set(re.findall(r'"?id"?\s*:\s*"([^"]+)"', open(os.path.join(root, "products.js"), encoding="utf-8").read()))

def main():
    dry = "--dry-run" in sys.argv
    key, secret = (os.environ.get("ALI_APP_KEY") or "").strip(), (os.environ.get("ALI_APP_SECRET") or "").strip()
    print("Key length: %d, secret length: %d" % (len(key), len(secret)))
    if not key or not secret:
        sys.exit("Missing ALI_APP_KEY / ALI_APP_SECRET environment variables.")
    have = existing_ids()
    order = len(have) + 100
    picked, seen = [], set()
    for kw, cat in SEARCHES:
        if len(picked) >= MAX_NEW:
            break
        try:
            resp = call_api("aliexpress.affiliate.hotproduct.query", {
                "keywords": kw, "page_no": 1, "page_size": 40, "sort": "LAST_VOLUME_DESC",
                "target_currency": "PKR", "target_language": "EN", "ship_to_country": "PK",
                "tracking_id": "default", "platform_product_type": "ALL"}, key, secret)
            prods = extract_products(resp)
        except Exception as e:
            print("Search '%s' failed: %s" % (kw, e))
            if "Signature" in str(e):
                break
            continue
        taken = 0
        for p in prods:
            pid = "ali-" + str(p.get("product_id"))
            if pid in have or pid in seen or not good(p):
                continue
            order += 1
            picked.append(to_record(p, cat, order)); seen.add(pid); taken += 1
            if taken >= PER_SEARCH or len(picked) >= MAX_NEW:
                break
        print("'%s': %d new" % (kw, taken))
    n = add_products(picked, dry=dry)
    print(("[dry-run] would add " if dry else "Added ") + str(n) + " products.")

if __name__ == "__main__":
    main()
