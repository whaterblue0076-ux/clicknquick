#!/usr/bin/env python3
"""ClicknQuick video maker (English + Urdu versions).

Reads products.js, and for each chosen product makes TWO vertical 1080x1920 mp4 videos:
  <id>-english.mp4  (English voice + English captions)
  <id>-urdu.mp4     (Urdu voice + Urdu captions, for Pakistan)
Real product photos + captions + free voiceover (edge-tts). The store named in the
video is the store the product is really sold on (Amazon / Daraz / AliExpress).

It only READS products.js and writes into the output folder. It never edits the website.

Usage:
  python tools/make_video.py --ids owala-freesip-24,daraz-neck-portable-fan
  python tools/make_video.py --latest 3 --langs en,ur
  python tools/make_video.py --latest 1 --test      (offline test: placeholder image, silent audio)
"""
import argparse, asyncio, glob, json, re, subprocess, sys, tempfile
from pathlib import Path

W, H = 1080, 1920
STORE_NAMES = {"amazon": "Amazon", "daraz": "Daraz", "aliexpress": "AliExpress"}
STORE_UR = {"amazon": "ایمیزون", "daraz": "دراز", "aliexpress": "علی ایکسپریس"}
FONT_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_R = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
VOICES = {"en": "en-US-AndrewNeural", "ur": "ur-PK-AsadNeural"}


def urdu_font():
    for pat in ("NotoNaskhArabic*Bold*", "NotoSansArabic*Bold*", "NotoNaskhArabic*", "NotoSansArabic*"):
        hits = glob.glob(f"/usr/share/fonts/**/{pat}.ttf", recursive=True)
        if hits:
            return sorted(hits)[0]
    return FONT_B


def check_urdu_font():
    """Fail loudly instead of shipping boxes: the font must have Urdu letters and joined forms."""
    from fontTools.ttLib import TTFont
    import arabic_reshaper
    path = urdu_font()
    cmap = TTFont(path, fontNumber=0).getBestCmap()
    need = set("سےکٹڈڑںھہیۓآپ") | set(arabic_reshaper.reshape("سے کے بڑے ایمیزون دراز"))
    missing = [c for c in need if c.strip() and ord(c) not in cmap]
    if missing:
        raise SystemExit(f"Urdu font {path} is missing letters: {''.join(missing)}. "
                         "Install fonts-noto-core / fonts-hosny-amiri and run again.")
    return path


def load_products(path):
    node = "const vm=require('vm');const fs=require('fs');" \
           "const c=fs.readFileSync(process.argv[1],'utf8');" \
           "process.stdout.write(JSON.stringify(vm.runInNewContext(c+'\\n;PRODUCTS',{})))"
    out = subprocess.run(["node", "-e", node, str(path)], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def pick_store(p):
    stores = p.get("stores", {})
    for key in ("daraz", "amazon", "aliexpress"):
        s = stores.get(key)
        if s and s.get("available"):
            return key, s
    return None, None


def short_name(name):
    name = re.sub(r"…$", "", re.sub(r"\s+", " ", name)).strip()
    first = re.split(r"[,|–(]| - ", name)[0].strip()
    return " ".join(first.split(" ")[:6])


def first_sentence(text):
    text = re.sub(r"\s+", " ", text or "").strip()
    parts = re.split(r"(?<=[.!?])\s", text)
    return parts[0] if parts and parts[0] else ""


def clean_for_voice(s):
    s = s.replace("★", " stars").replace("—", ",").replace("–", ",")
    return re.sub(r"\s+", " ", s).strip()


def price_parts(price):
    """-> (number_text, currency) or (None, None)."""
    m = re.search(r"([\d][\d,\.]*)", price or "")
    if not m:
        return None, None
    cur = "usd" if "$" in price else "pkr"
    return m.group(1).rstrip(".,"), cur


def build_lines_en(p, key, store):
    platform = STORE_NAMES[key]
    short = short_name(p.get("name", "this product"))
    lines = [(f"{short}, from {platform}!", f"{short}, from {platform}!")]
    price = (store.get("price") or "").strip()
    # Amazon prices change and Amazon's rules restrict quoting them, so we never state them for Amazon.
    if price and key != "amazon":
        lines.append((f"It is {price} right now.", f"{price} right now"))
    why = clean_for_voice(first_sentence(p.get("why", ""))) or clean_for_voice(first_sentence(p.get("desc", "")))
    if why:
        lines.append((why, why))
    lines.append(("Skip the searching. Get it in one click on Click and Quick.",
                  "Skip the searching.\nGet it in ONE click on ClicknQuick"))
    lines.append(("The world's biggest stores, in your hand. Daraz, Amazon, AliExpress, one click on Click and Quick. Link in bio!",
                  "The world's biggest stores,\nin your hand: ClicknQuick"))
    return platform, short, lines


def build_lines_ur(p, key, store):
    """Urdu version. Only facts that are really in products.js are used (no invented claims)."""
    platform = STORE_NAMES[key]
    pu = STORE_UR[key]
    short = short_name(p.get("name", "this product"))
    lines = [(f"یہ دیکھیں، {pu} سے ایک زبردست پروڈکٹ!", f"{short}\n{pu} سے")]
    num, cur = price_parts((store.get("price") or "").strip())
    if num and key != "amazon":
        unit = "ڈالر" if cur == "usd" else "روپے"
        lines.append((f"اس وقت قیمت {num} {unit} ہے۔", f"قیمت: {num} {unit}"))
    why = p.get("why", "") or ""
    facts = []
    m = re.search(r"([\d,]+)(\+?)\s*sold", why)
    if m:
        n = m.group(1)
        facts.append(f"{n} سے زیادہ لوگ خرید چکے ہیں" if m.group(2) else f"{n} لوگ خرید چکے ہیں")
    m = re.search(r"(\d\.\d+)\s*★", why)
    if m:
        facts.append(f"ریٹنگ {m.group(1)} سٹار ہے")
    if "Amazon's Choice" in why:
        facts.append("ایمیزون چوائس کا نشان ملا ہوا ہے")
    if facts:
        t = "، اور ".join(facts) + "۔"
        lines.append((t, t))
    lines.append(("وقت ضائع نہ کریں، بس ایک کلک پر کلک این کوئیک سے لیں۔", "ایک کلک پر\nClicknQuick"))
    lines.append(("دنیا کے بڑے سٹورز، آپ کی مٹھی میں۔ دراز، ایمیزون، علی ایکسپریس، ایک کلک پر، کلک این کوئیک۔ لنک بائیو میں ہے!",
                  "دنیا کے بڑے سٹورز،\nآپ کی مٹھی میں\nClicknQuick"))
    return platform, short, lines


def get_images(p, repo_root, workdir, test=False):
    import requests
    cands = []
    if p.get("image"):
        cands.append(p["image"])
    for g in p.get("gallery", []) or []:
        if g not in cands:
            cands.append(g)
    paths = []
    for i, c in enumerate(cands[:6]):
        try:
            if c.startswith("http"):
                r = requests.get(c, timeout=25, headers={"User-Agent": "Mozilla/5.0"})
                r.raise_for_status()
                dst = Path(workdir) / f"img{i}.bin"
                dst.write_bytes(r.content)
                paths.append(dst)
            else:
                lp = Path(repo_root) / c
                if lp.exists():
                    paths.append(lp)
        except Exception as e:
            print(f"  skip image {c[:60]}: {e}")
    if not paths and test:
        from PIL import Image
        dst = Path(workdir) / "placeholder.png"
        Image.new("RGB", (800, 800), (220, 220, 230)).save(dst)
        paths.append(dst)
    return paths


def shape(text, lang):
    if lang != "ur":
        return text
    import arabic_reshaper
    from bidi.algorithm import get_display
    return get_display(arabic_reshaper.reshape(text))


ARABIC_RE = re.compile("[\u0600-\u06FF]")
DIGITS = str.maketrans("0123456789", "۰۱۲۳۴۵۶۷۸۹")


def ur_clean(t):
    """The Urdu font only has Arabic-script glyphs, so use Urdu digits/punctuation on Urdu lines."""
    t = re.sub(r"(?<=\d)\.(?=\d)", "٫", t).replace(",", "،").replace("!", "").replace(":", "")
    return t.translate(DIGITS).strip()


def wrap(draw, text, font, max_w, lang):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(shape(t, lang), font=font) <= max_w:
            cur = t
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make_frame(img_path, caption, platform_label, lang, out_png):
    from PIL import Image, ImageDraw, ImageFont, ImageOps
    basic = ImageFont.Layout.BASIC  # we shape Urdu ourselves, so PIL must not re-shape it
    bg = Image.new("RGB", (W, H), (18, 22, 34))
    try:
        im = ImageOps.exif_transpose(Image.open(img_path)).convert("RGB")
    except Exception:
        im = Image.new("RGB", (800, 800), (220, 220, 230))
    im = ImageOps.contain(im, (W - 80, 1100))
    bg.paste(im, ((W - im.width) // 2, 330 + (1100 - im.height) // 2))
    d = ImageDraw.Draw(bg)
    cap_font_path = urdu_font() if lang == "ur" else FONT_B
    fb = ImageFont.truetype(FONT_B, 54, layout_engine=basic)
    fr = ImageFont.truetype(FONT_R, 34, layout_engine=basic)
    fc = ImageFont.truetype(cap_font_path, 58 if lang == "ur" else 54, layout_engine=basic)
    fu = ImageFont.truetype(urdu_font(), 36, layout_engine=basic)
    badge = "Online Store" if lang == "en" else shape("آن لائن سٹور", "ur")
    bfont = fr if lang == "en" else fu
    bw = int(d.textlength(badge, font=bfont)) + 60
    d.rounded_rectangle([(W - bw) // 2, 150, (W + bw) // 2, 220], radius=35, fill=(255, 90, 31))
    d.text((W // 2, 185), badge, font=bfont, fill="white", anchor="mm")
    y = 1480
    rows = []  # (text_to_draw, font)
    for part in caption.split("\n"):
        if ARABIC_RE.search(part):
            part = ur_clean(part)
            rows += [(shape(ln, "ur"), fc) for ln in wrap(d, part, fc, W - 120, "ur")]
        else:  # Latin line (product name, brand): Latin font
            rows += [(ln, fb) for ln in wrap(d, part, fb, W - 120, "en")]
    for txt, fnt in rows[:6]:
        d.text((W // 2, y), txt, font=fnt, fill="white", anchor="mm", stroke_width=3, stroke_fill=(0, 0, 0))
        y += 80 if fnt is fc and lang == "ur" else 72
    d.text((W // 2, 1790), "clicknquick.netlify.app", font=fb, fill=(255, 140, 80), anchor="mm")
    d.text((W // 2, 1855), "Affiliate link - I may earn a commission", font=fr, fill=(180, 186, 200), anchor="mm")
    d.text((W // 2, 90), "ClicknQuick", font=ImageFont.truetype(FONT_B, 72, layout_engine=basic), fill="white", anchor="mm")
    bg.save(out_png)


async def tts(text, voice, out_mp3):
    import edge_tts
    await edge_tts.Communicate(text, voice).save(str(out_mp3))


def duration(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
                       capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def make_one(p, lang, outdir, repo_root, test):
    key, store = pick_store(p)
    if not key:
        print(f"- {p['id']}: no available store, skipped")
        return False
    platform, short, lines = (build_lines_en if lang == "en" else build_lines_ur)(p, key, store)
    name = "english" if lang == "en" else "urdu"
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        imgs = get_images(p, repo_root, td, test)
        if not imgs:
            print(f"- {p['id']}: no usable images, skipped")
            return False
        audio = td / "voice.mp3"
        full = " ".join(v for v, _ in lines)
        if test:
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
                            "-t", str(max(8, len(full) / 14)), str(audio)], check=True)
        else:
            asyncio.run(tts(full, VOICES[lang], audio))
        total = duration(audio)
        weights = [max(len(v), 20) for v, _ in lines]
        tw = sum(weights)
        segs = []
        for i, ((voice, caption), w) in enumerate(zip(lines, weights)):
            png = td / f"f{i}.png"
            make_frame(imgs[i % len(imgs)], caption, platform, lang, png)
            segs.append((png, total * w / tw))
        listfile = td / "list.txt"
        with open(listfile, "w") as f:
            for png, dur in segs:
                f.write(f"file '{png}'\nduration {dur:.3f}\n")
            f.write(f"file '{segs[-1][0]}'\n")
        out = Path(outdir) / f"{p['id']}-{name}.mp4"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(listfile),
                        "-i", str(audio), "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-c:a", "aac",
                        "-shortest", "-movflags", "+faststart", str(out)], check=True)
        tag = re.sub("[^a-z0-9]", "", p.get("category", "deals").lower())
        if lang == "en":
            cap = (f"{short} - from {platform}. Skip the searching: get it in one click on ClicknQuick (link in bio).\n\n"
                   f"Affiliate link: I may earn a commission.\n"
                   f"#clicknquick #onlineshopping #dealoftheday #{tag}\n")
        else:
            cap = (f"{short} - {STORE_UR[key]} سے۔ وقت ضائع نہ کریں، ایک کلک پر ClicknQuick سے لیں (لنک بائیو میں)۔\n\n"
                   f"Affiliate link: مجھے کمیشن مل سکتا ہے۔\n"
                   f"#clicknquick #pakistan #onlineshopping #{tag}\n")
        (Path(outdir) / f"{p['id']}-{name}-caption.txt").write_text(cap, encoding="utf-8")
        print(f"+ {p['id']} -> {out.name} ({platform}, {total:.0f}s)")
        return True


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--products", default="products.js")
    ap.add_argument("--ids", default="")
    ap.add_argument("--latest", type=int, default=0)
    ap.add_argument("--langs", default="en,ur")
    ap.add_argument("--out", default="video-output")
    ap.add_argument("--test", action="store_true")
    a = ap.parse_args()
    prods = load_products(a.products)
    if a.ids:
        want = [x.strip() for x in a.ids.split(",") if x.strip()]
        chosen = [p for p in prods if p["id"] in want]
        missing = set(want) - {p["id"] for p in chosen}
        if missing:
            print("ids not found:", ", ".join(sorted(missing)))
    else:
        chosen = sorted(prods, key=lambda p: p.get("addedOrder", 0), reverse=True)[:(a.latest or 3)]
    Path(a.out).mkdir(parents=True, exist_ok=True)
    root = Path(a.products).resolve().parent
    langs = [x.strip() for x in a.langs.split(",") if x.strip() in ("en", "ur")]
    if "ur" in langs:
        print("Urdu font:", check_urdu_font())
    ok = sum(make_one(p, lg, a.out, root, a.test) for p in chosen for lg in langs)
    print(f"done: {ok}/{len(chosen) * len(langs)} videos in {a.out}/")
    if ok == 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
