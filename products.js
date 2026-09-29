/* =========================================================
   PRODUCT CATALOG
   =========================================================
   HOW TO ADD A PRODUCT: copy a whole { ... } block into
   PRODUCTS and fill it in. HOW TO REMOVE: delete the block.

   Each product can list up to three stores — daraz, amazon,
   aliexpress. Set a store's "available" to false if you don't
   have a real link for it yet; the fallback chain in app.js
   handles the rest honestly. Set "verified" to false (or omit
   "price") if you have a link but haven't confirmed the price —
   the site will say "check current price" instead of guessing.

   *** REAL, LIVE AFFILIATE LINKS RIGHT NOW ***
   - RAYMYLO Insulated Water Bottle -> real tracked Amazon
     Associates link (Store ID: clicknquick)
   - Owala FreeSip 24oz -> real tracked Amazon Associates link
   - Wireless Earbuds -> real tracked Daraz (DCMnetwork) link
   Everything else is placeholder — swap "url" for your own
   tracked links as you get them approved.
========================================================= */
const DARAZ_TRACKING_LINK = "https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222";

const PRODUCTS = [
  { id:"owala-freesip-24", addedOrder:10, category:"home-kitchen", name:"Owala FreeSip Stainless Steel Water Bottle 24oz",
    desc:"135,000+ ratings, Amazon's Choice, 40K+ bought in the past month. FreeSip spout — sip through the straw or swig from the wide mouth.", icon:"🍶", badge:"Amazon's Choice", rating:4.6,
    why:"Amazon's Choice with 135,000+ ratings and 40K+ bought last month — a genuinely proven pick, not a guess.",
    image:"https://m.media-amazon.com/images/I/51tRFkvZT8L._AC_SL1080_.jpg",
    stores:{ amazon:{ available:true, verified:true, url:"https://amzn.to/3UbNBhd", price:"$29.97" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"insulated-bottle", addedOrder:1, category:"home-kitchen", name:"RAYMYLO Insulated Water Bottle 40oz",
    desc:"Triple-wall vacuum insulated stainless steel bottle — keeps drinks cold for 36 hours or hot for 18 hours, with a paracord carry handle.", icon:"🍶", badge:"Amazon's Choice", rating:4.6,
    why:"Amazon's Choice with 18,209 ratings and 3K+ bought in the past month — a genuinely well-evidenced insulated bottle, not just a niche pick.",
    image:"https://m.media-amazon.com/images/I/71LfdDBFZNL._AC_SL1500_.jpg",
    gallery:["https://m.media-amazon.com/images/I/71LfdDBFZNL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71muZeDkqLL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/711fa+NM3AL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71OhTQciJEL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71LMAwDLUHL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71SxG8n+ppL._AC_SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://amzn.to/4hDhBwb", price:"$31.99" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"earbuds-pro", addedOrder:2, category:"electronics", name:"Wireless Earbuds", pinned:true, featured:true,
    desc:"122,000+ ratings. Great sound quality and comfort — battery life is decent but drains faster than premium earbuds.", icon:"🎧", badge:"Trending", rating:4.55,
    why:"122,000+ real ratings on Daraz — strong sound and comfort, honestly, battery isn't its strongest point.",
    image:"https://img.drz.lazcdn.com/static/pk/p/5f769f4b0a300b584fd1dade2d5b8a2b.jpg_2200x2200q80.jpg_.webp",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F31-i427914413-s14013698201.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 599" },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"smart-watch-x", addedOrder:3, category:"electronics", name:"Smart Watch Series X",
    desc:"Heart rate, sleep tracking, calls on wrist", icon:"⌚", badge:"New", rating:4.3,
    why:"A budget-friendly way to try everyday health tracking without committing to a premium smartwatch.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"air-fryer-4l", addedOrder:4, category:"appliances", name:"Compact Air Fryer 4L",
    desc:"Oil-free frying, one-touch digital panel", icon:"🍳", badge:"Editor's Pick", rating:4.6,
    why:"A simple way to cut oil from everyday cooking without extra countertop clutter.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"blender-bottle", addedOrder:5, category:"appliances", name:"Portable Blender Bottle",
    desc:"USB rechargeable, smoothies on the go", icon:"🥤", badge:"", rating:4.1,
    why:"Handy for a quick smoothie on the go without needing a power outlet nearby.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"jogger-pant", addedOrder:6, category:"fashion", name:"Women's Ultra-Soft Jogger Pant",
    desc:"Bamboo viscose, cozy fit, all-day comfort", icon:"👖", badge:"Hot Deal", rating:4.4,
    why:"A comfortable, breathable everyday option for lounging or errands.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"classic-shirt", addedOrder:7, category:"fashion", name:"Men's Classic Fit Shirt",
    desc:"Breathable cotton blend, wrinkle resistant", icon:"👔", badge:"", rating:4.2,
    why:"A wrinkle-resistant basic that's easy to dress up or down.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"fairy-lights", addedOrder:8, category:"home-kitchen", name:"LED Fairy String Lights",
    desc:"Warm glow, 10m, remote controlled", icon:"✨", badge:"New", rating:4.5,
    why:"An easy, low-cost way to add warm ambient lighting to any room.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"wall-clock", addedOrder:9, category:"home-kitchen", name:"Minimalist Wall Clock",
    desc:"Silent movement, modern wooden frame", icon:"🕐", badge:"", rating:4.3,
    why:"A quiet, minimal clock that fits most home décor styles.",
    stores:{ daraz:{ available:true, verified:false, url:DARAZ_TRACKING_LINK },
             amazon:{ available:false },
             aliexpress:{ available:true, verified:false, url:"https://www.aliexpress.com/" } } },
  { id:"nestout-solar-panel", addedOrder:11, category:"sports-outdoors", name:"NESTOUT Portable Solar Panel 28W (4-Panel)",
    desc:"Foldable 28W solar charger with USB-C and USB-A ports, built for camping and off-grid charging.", icon:"☀️", badge:"", rating:3.4,
    why:"An iF Design Gold Award winner with genuinely modern specs (USB-C+A, digital ammeter) — still early in reviews (5 so far), so we're calling it an emerging pick rather than a proven bestseller.",
    image:"https://m.media-amazon.com/images/I/81TSYmlUmdL._AC_SL1500_.jpg",
    stores:{ amazon:{ available:true, verified:true, url:"https://amzn.to/4chHNJh", price:"$121.49" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"logitech-m185-mouse", addedOrder:12, category:"computers-accessories", name:"Logitech M185 Wireless Mouse",
    desc:"Compact, ambidextrous 2.4GHz wireless mouse with a nano USB receiver and up to 12 months of battery life.", icon:"🖱️", badge:"Amazon's Choice", rating:4.5,
    why:"Amazon's Choice with 44,775 ratings and 10K+ bought in the past month — a genuinely proven, no-surprises everyday mouse.",
    image:"https://m.media-amazon.com/images/I/51A+Kv1F7mS._AC_SL1000_.jpg",
    gallery:["https://m.media-amazon.com/images/I/51A+Kv1F7mS._AC_SL1000_.jpg","https://m.media-amazon.com/images/I/61OA44nmg3L._AC_SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B004YAVF8I?tag=clicknquick-20", price:"$14.90", oldPrice:"$17.99" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"hkc-usbc-hub-7in1", addedOrder:13, category:"computers-accessories", name:"HKCMEMORY USB-C Hub 7-in-1",
    desc:"7-in-1 USB-C hub with 4K@30Hz HDMI, 100W PD charging, three USB-A ports (one 5Gbps), and SD/TF card slots.", icon:"🔌", badge:"Amazon's Choice", rating:4.3,
    why:"Amazon's Choice at a genuinely low price point — a solid budget option if you want one hub covering HDMI, charging, data, and card reading.",
    image:"https://m.media-amazon.com/images/I/71HjEbMPxhL._AC_SX679_.jpg",
    gallery:["https://m.media-amazon.com/images/I/71HjEbMPxhL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/712j1gO+CSL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71y6uRoGyBL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71FHFCeKcML._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/716tWhcSq5L._AC_SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B0FNJZ15VJ?tag=clicknquick-20", price:"$9.99" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"petlibro-wet-food-feeder", addedOrder:14, category:"pet-supplies", name:"PETLIBRO Automatic Wet Food Cat Feeder",
    desc:"App-controlled wet food dispenser with semiconductor cooling, holding 3 fresh chilled meals for up to 3 days in a stainless steel bowl.", icon:"🐾", badge:"", rating:3.3,
    why:"A genuinely well-featured design (app control, anti-pinch sensors, semiconductor cooling) — but with only 9 reviews so far, treat this as an early-stage pick rather than a proven bestseller at this price.",
    image:"https://m.media-amazon.com/images/I/81yXYax-rEL._AC_SL1500_.jpg",
    gallery:["https://m.media-amazon.com/images/I/81yXYax-rEL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71Hyn-KFryL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71BljLEle1L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81MIFkuaHRL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81L3SnWBdwL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/710fqqgk1wL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81QlaxEFe9L._AC_SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B0FRRLF89M?tag=clicknquick-20", price:"$169.99" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"medicube-zero-pore-pad", addedOrder:15, category:"beauty-personal-care", name:"medicube Toner Pads Zero Pore Pad 2.0",
    desc:"Dual-textured exfoliating toner pads with 4.5% AHA lactic acid and 0.45% BHA salicylic acid, 70 pads per pack.", icon:"🧴", badge:"Amazon's Choice", rating:4.6,
    why:"Amazon's Choice with 30,998 ratings and 100K+ bought in the past month — genuinely one of the most-bought skincare items on Amazon right now.",
    image:"https://m.media-amazon.com/images/I/71Mcspt-6AL._SL1500_.jpg",
    gallery:["https://m.media-amazon.com/images/I/71Mcspt-6AL._SL1500_.jpg","https://m.media-amazon.com/images/I/71FQw3xtADL._SL1500_.jpg","https://m.media-amazon.com/images/I/71DVik65DTL._SL1500_.jpg","https://m.media-amazon.com/images/I/717cIqziH6L._SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B09V7Z4TJG?tag=clicknquick-20", price:"$20.89" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"desitin-max-strength-paste", addedOrder:16, category:"baby-kids", name:"Desitin Maximum Strength Diaper Rash Paste",
    desc:"40% zinc oxide diaper rash paste, dermatologist and pediatrician tested, protects for up to 12 hours, 4.8oz tube.", icon:"👶", badge:"Amazon's Choice", rating:4.8,
    why:"Amazon's Choice with 51,359 ratings — the #1 pediatrician-recommended diaper rash brand by reputation, not just a marketing claim.",
    image:"https://m.media-amazon.com/images/I/71NRCxbQRvL._SL1500_.jpg",
    gallery:["https://m.media-amazon.com/images/I/71NRCxbQRvL._SL1500_.jpg","https://m.media-amazon.com/images/I/81aYVvZS9EL._SL1500_.jpg","https://m.media-amazon.com/images/I/81Y1Xp8Z+bL._SL1500_.jpg","https://m.media-amazon.com/images/I/8162bVXBWmL._SL1500_.jpg","https://m.media-amazon.com/images/I/91xYSmVEJEL._SL1500_.jpg","https://m.media-amazon.com/images/I/81uVUosLBRL._SL1500_.jpg","https://m.media-amazon.com/images/I/71Gz-MEUJBL._SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B00ZQXT4EY?tag=clicknquick-20", price:"$7.97" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"fit-simplify-resistance-bands", addedOrder:17, category:"health-fitness", name:"Fit Simplify Resistance Loop Exercise Bands (Set of 5)",
    desc:"5 color-coded resistance loop bands (extra light to extra heavy) with carry bag and instruction guide.", icon:"🏋️", badge:"Amazon's Choice", rating:4.5,
    why:"Amazon's Choice with 136,743 ratings and 20K+ bought in the past month — one of the most-proven resistance band sets on Amazon.",
    image:"https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SL1500_.jpg",
    gallery:["https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81jLThtEYKL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81tRY6b2N3L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71RzBH6TLNL._AC_SL1500_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B09MJKJYLQ?tag=clicknquick-20", price:"$9.98" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"anrabess-ribbed-top", addedOrder:18, category:"fashion", name:"ANRABESS Women's Long Sleeve Ribbed Fitted Top",
    desc:"Slim-fit ribbed knit long-sleeve top, lightweight, for casual or work wear.", icon:"👚", badge:"#1 Best Seller", rating:4.6,
    why:"#1 Best Seller in Women's T-Shirts with 11,527 ratings — a genuinely high-volume seller, not just a trend claim.",
    image:"https://m.media-amazon.com/images/I/818aNxkbPqL._AC_SY741_.jpg",
    gallery:["https://m.media-amazon.com/images/I/818aNxkbPqL._AC_SY741_.jpg","https://m.media-amazon.com/images/I/81gFHKYQx0L._AC_SY741_.jpg","https://m.media-amazon.com/images/I/81BsDM3GUJL._AC_SY741_.jpg","https://m.media-amazon.com/images/I/81jWPtOTOiL._AC_SY741_.jpg"],
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B0DDGXNQTY?tag=clicknquick-20", price:"$7.98" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"skechers-arch-fit-arcade", addedOrder:19, category:"shoes", name:"Skechers Women's Arch Fit Arcade-Arcata Sneaker",
    desc:"Canvas slip-on sneaker with podiatrist-certified Arch Fit insole and cushioned midsole.", icon:"👟", badge:"", rating:null,
    why:"Skechers Arch Fit line carries the American Podiatric Medical Association (APMA) Seal of Acceptance — a real third-party endorsement, not just marketing copy.",
    image:"https://m.media-amazon.com/images/I/512wsqmQTPL._AC_SY695_.jpg",
    gallery:["https://m.media-amazon.com/images/I/512wsqmQTPL._AC_SY695_.jpg","https://m.media-amazon.com/images/I/51EC+HlngJL._AC_SY695_.jpg","https://m.media-amazon.com/images/I/51K0TqewwoL._AC_SY695_.jpg"],
    stores:{ amazon:{ available:false, url:"https://www.amazon.com/dp/B0CGT2X852?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"iottie-easy-one-touch", addedOrder:20, category:"automotive", name:"iOttie Easy One Touch Signature Dashboard & Windshield Mount",
    desc:"Suction-cup dashboard/windshield phone mount with a telescopic arm and one-handed lock-and-release mechanism.", icon:"📱", badge:"", rating:4.4,
    why:"48,946 ratings at 4.4★ on a product line that's been on the market since 2012 — one of the most established, proven car mounts on Amazon.",
    image:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/71JFXKNuUmL._AC_SL1500_.jpg",
    stores:{ amazon:{ available:true, verified:true, url:"https://www.amazon.com/dp/B0875RKTQF?tag=clicknquick-20", price:"$17.86" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"skechers-go-walk-joy", addedOrder:21, category:"shoes", name:"Skechers Women's Go Walk Joy Walking Shoe",
    desc:"Lightweight slip-on walking sneaker with 5Gen cushioned midsole and Goga Max insole.", icon:"👟", badge:"Amazon's Choice", rating:null,
    why:"Amazon's Choice, with the Skechers brand reporting 100K+ orders in the past 3 months — a genuinely high-demand everyday walking shoe.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B078WHHZ53?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"apple-airtag-2nd-gen", addedOrder:22, category:"mobile-accessories", name:"Apple AirTag (2nd Generation)",
    desc:"Bluetooth item tracker for keys, wallets, luggage and more, with Apple's Find My network and Precision Finding.", icon:"🏷️", badge:"", rating:null,
    why:"Made by Apple itself, works with the massive Find My network of iPhones worldwide — one of the most reliable trackers on the market.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B0GJTFXNRX?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"amazonbasics-tool-kit", addedOrder:23, category:"tools-home-improvement", name:"Amazon Basics 142-Piece Household Tool Kit",
    desc:"General-purpose household tool set with storage case — hammer, tape measure, pliers, screwdrivers, hex keys and hardware kit.", icon:"🧰", badge:"", rating:null,
    why:"Amazon's own house brand, consistently appearing in Amazon's own Best Sellers: Tool Sets list — a safe, general-purpose starter kit.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B08KTV3VB8?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"logitech-b175-mouse", addedOrder:24, category:"computers-accessories", name:"Logitech B175 Plug and Play Wireless Mouse",
    desc:"Wireless plug-and-play mouse with comfort design, available locally on Daraz.", icon:"🖱️", badge:"", rating:4.75,
    why:"388 sold with a 4.75★ rating on Daraz — a genuine local Logitech option for Pakistani buyers instead of an international order.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Flogitech-b175-plug-and-play-wireless-plus-comfort-mouse-black-i356754201-s1795197865.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 2,899" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"bagsmart-toiletry-bag", addedOrder:25, category:"travel-accessories", name:"BAGSMART Toiletry Bag with Hanging Hook",
    desc:"Water-resistant hanging toiletry organizer with transparent compartments for shampoo, cosmetics and full-size containers.", icon:"🧳", badge:"", rating:null,
    why:"Top-ranked in Amazon's own Best Sellers: Travel Accessories page — a genuinely popular pick for organized packing.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B0FDN6XYX7?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"sharpie-s-gel-pens", addedOrder:26, category:"office-stationery", name:"Sharpie S-Gel Gel Pens (12-Count)",
    desc:"Medium point (0.7mm) black gel pens with no-smear, no-bleed technology and a contoured rubber grip.", icon:"🖊️", badge:"", rating:null,
    why:"#1 on Amazon's own Best Sellers: Office Products page — a trusted, well-known brand for everyday writing.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B082PN4X5J?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"premier-protein-shake", addedOrder:27, category:"grocery-daily-essentials", name:"Premier Protein 30g High Protein Shake, Chocolate (12-Pack)",
    desc:"Ready-to-drink protein shake, 160 calories, 24 vitamins & minerals, no added sugar, gluten-free.", icon:"🥤", badge:"", rating:null,
    why:"A consistent top seller on Amazon's Grocery & Gourmet Food bestsellers list — a genuinely popular everyday protein option.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B07MJL8NXR?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } }
];

/* =========================================================
   PRODUCT DETAIL CONTENT — original, honest, hand-written
========================================================= */
const PRODUCT_DETAILS = {
  "owala-freesip-24": {
    availability:"Ships from Amazon",
    features:[
      "FreeSip spout flips between a push-button straw and a wider chug-and-ice opening",
      "Double-wall stainless steel body for insulation",
      "Leak-resistant lock built into the lid",
      "Backed by Amazon's Choice and 135,000+ customer ratings"
    ],
    specs:{ "Capacity":"24 oz / 710 ml", "Material":"Stainless steel, double-wall insulated", "Brand":"Owala" },
    pros:[
      "An unusually large, real review base (135K+) for this level of scrutiny",
      "Two drinking styles in one bottle instead of buying two products",
      "Amazon's Choice badge on the exact listing we link to"
    ],
    cons:[
      "Stainless steel adds weight compared to a plastic bottle",
      "The straw mechanism has small parts that need occasional cleaning"
    ],
    whoFor:"Someone who wants one bottle that works for sipping through the workday and chugging at the gym, without switching bottles.",
    whoAvoid:"Anyone prioritizing the absolute lightest bottle for hiking or travel — a simpler, lighter design may suit that better.",
    verdict:"Given the review volume and Amazon's Choice status, this is one of the safer, better-evidenced picks on the site right now."
  },
  "insulated-bottle": {
    availability:"Ships from Amazon",
    features:[
      "Triple-wall, copper-plated vacuum insulation — rated to keep drinks cold for 36 hours or hot for 18 hours",
      "Two included lids: a straw lid for quick sipping and a spout lid for regular drinking, both with rubber seals to resist leaks",
      "Comes with a hand-knit paracord handle that includes a small compass and carabiner clip",
      "18/8 food-grade stainless steel, BPA-free, with a wide mouth opening for easy ice-filling and cleaning",
      "40oz capacity"
    ],
    specs:{ "Capacity":"40 oz / 1183 ml", "Insulation":"Triple-wall vacuum, copper-plated", "Material":"18/8 food-grade stainless steel", "Brand":"RAYMYLO" },
    pros:[
      "Amazon's Choice with 18,209 ratings and 3K+ bought in the past month — a genuinely well-evidenced pick",
      "Two lid styles included instead of just one",
      "Paracord handle is a nice practical touch for hiking or camping use"
    ],
    cons:[
      "At 40oz it's noticeably larger/heavier than a standard 24oz bottle if you want something more compact",
      "Comes in many color/pattern variants at different prices — double-check you're ordering the exact one you want"
    ],
    whoFor:"Someone who wants a large-capacity insulated bottle with real hot/cold performance for hiking, gym, or daily carry.",
    whoAvoid:"Anyone who wants a smaller, lighter everyday bottle rather than a 40oz capacity.",
    verdict:"A genuinely well-evidenced, Amazon's Choice insulated bottle — the review volume alone makes it one of the safer picks in this category."
  },
  "earbuds-pro": {
    availability:"Ships from Daraz Pakistan",
    features:[
      "In-ear wireless design",
      "122,000+ real customer ratings on the listing, 4.55★ average",
      "5,600+ recorded sales on the listing at the time of writing"
    ],
    specs:{},
    pros:[
      "Very large, real review base relative to the price point",
      "Extremely low price (Rs 599) for the review volume it has"
    ],
    cons:[
      "Based on real buyer feedback, battery life drains faster than premium earbuds — this isn't a long-battery-life pick",
      "Daraz's listing doesn't publish detailed technical specs (exact Bluetooth version, rated battery hours) — we're not guessing at numbers the seller hasn't confirmed"
    ],
    whoFor:"Budget shoppers who want a cheap, well-reviewed pair for casual daily use — commuting, calls, background audio.",
    whoAvoid:"Anyone who needs long all-day battery life or premium noise isolation — worth paying more for a higher tier elsewhere.",
    verdict:"One of the best-evidenced value picks on the site, with an honest tradeoff on battery life instead of a hidden one."
  },
  "hkc-usbc-hub-7in1": {
    availability:"Ships from Amazon",
    features:[
      "Turns one USB-C port into seven: HDMI, a 100W PD charging port, two USB-A 2.0 ports, one faster USB-A 3.0 (5Gbps) port, and SD/TF card slots",
      "HDMI output up to 4K at 30Hz for mirroring or extending a screen",
      "100W PD pass-through for charging a laptop or tablet (charging only through that port — no data/video on it)",
      "Plug-and-play with no drivers needed",
      "Lightweight aluminum-alloy shell for portability and heat dissipation"
    ],
    specs:{ "Ports":"HDMI, 100W PD, 2× USB-A 2.0, 1× USB-A 3.0 (5Gbps), SD/TF", "Display output":"4K @ 30Hz", "Brand":"HKCMEMORY" },
    pros:[
      "Amazon's Choice at a genuinely low price (under $10)",
      "Covers the basics — video, charging, data, and card reading — in one small adapter"
    ],
    cons:[
      "HDMI is capped at 30Hz rather than 60Hz, so fast motion (gaming, video editing preview) won't look as smooth as pricier hubs",
      "Only 53 ratings at the time we checked — a smaller review base than our top picks, though the rating (4.3★) is solid so far"
    ],
    whoFor:"Anyone who wants an affordable, all-in-one USB-C hub for everyday laptop use — presentations, file transfers, and charging.",
    whoAvoid:"Video editors or gamers who need a smooth 60Hz external display — look at a pricier hub with 4K@60Hz instead.",
    verdict:"A genuinely solid budget pick for everyday use, with the fair tradeoff of a 30Hz (not 60Hz) HDMI output at this price."
  },
  "logitech-m185-mouse": {
    availability:"Ships from Amazon",
    features:[
      "Ambidextrous, contoured shape designed to feel comfortable in either hand",
      "Nano USB receiver stores in the mouse itself and connects up to about 10m/33ft away",
      "Rated for roughly a year of battery life thanks to a sleep mode that kicks in when idle",
      "Works out of the box with Windows, Mac, and most laptops — no extra software needed",
      "Uses some certified recycled plastic in its construction (Logitech states 77% for the black version, 49% for grey/blue/red variants)"
    ],
    specs:{ "Connectivity":"2.4GHz wireless (USB nano receiver)", "Battery life":"Up to ~12 months (per Logitech)", "Tracking":"Optical, ambidextrous shape", "Brand":"Logitech" },
    pros:[
      "Amazon's Choice with 44,775+ ratings at 4.5★ — a genuinely large, proven track record",
      "10,000+ bought in the past month at the time we checked",
      "Simple plug-and-play setup with no software required"
    ],
    cons:[
      "Basic feature set — no extra programmable buttons or high-DPI gaming tracking",
      "Optical tracking (not laser), which is fine for everyday use but not built for competitive gaming"
    ],
    whoFor:"Anyone who wants a reliable, no-fuss wireless mouse for everyday computer use, without paying for gaming features they won't use.",
    whoAvoid:"Gamers or power users who want programmable buttons, adjustable DPI, or a rechargeable battery.",
    verdict:"A genuinely well-evidenced, no-surprises basic mouse — the review volume alone makes it a safe pick for everyday use."
  },
  "medicube-zero-pore-pad": {
    availability:"Ships from Amazon",
    features:[
      "Dual-textured design — one embossed side for exfoliation, one smooth side for calming/hydrating",
      "Contains 4.5% AHA (lactic acid) and 0.45% BHA (salicylic acid) for pore and texture care",
      "70 pads per pack, meant for daily AM/PM use",
      "Manufacturer states clinical testing showed a 47.1% reduction in sebum/oil and an 87.3% decrease in \"pore waste\" — these are the brand's own reported figures, not independently verified by us"
    ],
    specs:{ "Pad count":"70 pads per pack", "Key actives":"4.5% AHA (lactic acid), 0.45% BHA (salicylic acid)", "Brand":"medicube (Korean skincare)" },
    pros:[
      "Amazon's Choice with 30,998 ratings at 4.6★ and 100K+ bought in the past month — genuinely one of Amazon's best-evidenced skincare picks",
      "Simple two-step use (exfoliate, then calm) that fits into an existing routine easily",
      "Large pad count (70) relative to price point"
    ],
    cons:[
      "AHA/BHA exfoliants can irritate sensitive skin — patch-test before regular use",
      "The specific efficacy percentages (sebum reduction, pore improvement) come from the brand's own testing, not an independent lab we've verified"
    ],
    whoFor:"Someone wanting an easy, routine-friendly exfoliating toner pad for enlarged pores or oily/textured skin.",
    whoAvoid:"Anyone with very sensitive or reactive skin who hasn't used AHA/BHA products before — start slow.",
    verdict:"Backed by a genuinely huge, real review base rather than just marketing buzz — a reasonable pick for pore/texture care, with the usual caution that acid exfoliants need a patch test first."
  },
  "fit-simplify-resistance-bands": {
    availability:"Ships from Amazon",
    features:[
      "5 loop bands across 5 resistance levels — extra light, light, medium, heavy, extra heavy",
      "Latex construction, 12\" x 2\" band size",
      "Comes with a carry bag and an illustrated instruction booklet covering exercises for legs, arms, back, shoulders, ankles, hips, and core",
      "Also commonly used by physical therapists for rehab work, not just general fitness"
    ],
    specs:{ "Material":"Latex", "Set size":"5 bands (5 resistance levels)", "Weight":"3.5 oz", "Brand":"Fit Simplify" },
    pros:[
      "Amazon's Choice with 136,743 ratings and 20K+ bought in the past month — an exceptionally large, proven review base",
      "Covers a full range of resistance levels in one set, useful for beginners through advanced use",
      "Compact and portable with the included carry bag"
    ],
    cons:[
      "Latex bands can degrade over time with heavy use or sun exposure — check for tears before each use",
      "Not suitable for anyone with a latex allergy"
    ],
    whoFor:"Anyone wanting an affordable, portable resistance band set for home workouts, stretching, or physical therapy exercises.",
    whoAvoid:"Anyone with a latex allergy — a fabric or non-latex band set would be safer.",
    verdict:"One of the most well-evidenced fitness accessories on the site — the sheer review volume makes it a very safe pick at this price."
  },
  "desitin-max-strength-paste": {
    availability:"Ships from Amazon (note: not shippable to every country — check your delivery address on the product page)",
    features:[
      "40% zinc oxide — the maximum level used in over-the-counter diaper rash treatments",
      "Paraben-free, hypoallergenic formula",
      "Marketed as the #1 pediatrician-recommended brand for diaper rash care",
      "Thick paste texture designed to form a protective barrier against moisture",
      "4.8oz tube size"
    ],
    specs:{ "Active ingredient":"Zinc oxide 40%", "Size":"4.8 oz", "Brand":"Desitin" },
    pros:[
      "Amazon's Choice with 51,359 ratings — a genuinely huge, long-standing review base",
      "Long-established brand with decades of use, not a new/unproven product"
    ],
    cons:[
      "Not shippable to every country — confirm delivery availability to your address before ordering",
      "Thick paste formula can be harder to wash off than lighter creams"
    ],
    whoFor:"Parents wanting a maximum-strength, well-trusted treatment for diaper rash.",
    whoAvoid:"Anyone wanting a lighter, everyday preventive cream rather than a maximum-strength treatment — Desitin also makes a \"Daily Defense\" version for that.",
    verdict:"A long-established, extremely well-reviewed pick — one of the safer bets in this category given the review volume."
  },
  "petlibro-wet-food-feeder": {
    availability:"Ships from Amazon",
    features:[
      "Semiconductor cooling designed to keep wet food fresh for up to 3 days, rather than relying on ice packs",
      "3-compartment food-grade stainless steel bowl, with meals warming slightly before serving time for taste and digestion",
      "App control over 2.4GHz Wi-Fi — schedule meals, check feeding history, or trigger an instant \"Feed Now\"",
      "Infrared sensors on the lid pause the closing motion if they detect your cat is still near, as an anti-pinch safety measure",
      "Removable, dishwasher-safe stainless tray designed to avoid the hard-to-reach corners that trap residue"
    ],
    specs:{ "Material":"Stainless steel", "Meals held":"3 compartments, chilled up to 3 days", "Connectivity":"2.4GHz Wi-Fi app control", "Brand":"PETLIBRO" },
    pros:[
      "Genuinely thoughtful feature set — cooling, anti-pinch sensors, and app scheduling all in one unit",
      "Stainless steel bowl is easier to keep hygienic than plastic compartments"
    ],
    cons:[
      "Only 9 reviews at the time we checked (3.3★ average) — that's thin evidence for a $169.99 purchase, so we can't yet vouch for long-term reliability the way we can for our better-reviewed picks",
      "Requires 2.4GHz Wi-Fi and the PETLIBRO app to use scheduling features"
    ],
    whoFor:"Cat owners who travel or work long hours and want wet food to stay fresh and be dispensed on a schedule, with remote control from an app.",
    whoAvoid:"Anyone wanting a cheaper, simpler dry-food-only feeder, or buyers who want a large review history before spending this much.",
    verdict:"Feature-rich and well thought out on paper, but the review count is too small right now for us to call it a safe bet at this price — worth watching as more reviews come in."
  },
  "nestout-solar-panel": {
    availability:"Ships from Amazon (note: import/shipping charges may apply outside the US)",
    features:[
      "One USB-C port and one USB-A port so it works with both newer and older devices, up to 5V/5.6A combined output",
      "Rated at 28W peak output using higher-efficiency solar cells (manufacturer states up to 24% conversion efficiency)",
      "Built-in digital ammeter so you can see charging output in real time and reposition the panel for better sun exposure",
      "Adjustable stand for angling toward the sun, plus a storage pocket and hanging loops for attaching to a bag or tent",
      "Folds down to a compact size and is made from water-repellent ripstop nylon",
      "Won an iF Design Gold Award for its design"
    ],
    specs:{ "Brand":"ELECOM (NESTOUT)", "Material":"Ripstop nylon", "Folded size":"11\" x 2.4\" x 6.1\"", "Weight":"2 lb (about 910g)", "Output":"28W max, 5V/5.6A combined" },
    pros:[
      "Genuinely modern port setup (USB-C + USB-A) instead of an outdated USB-A-only design",
      "Real-time ammeter is a practical touch most budget solar chargers skip",
      "Design-award-winning build quality, not just a marketing claim — verified via the iF Design Gold Award"
    ],
    cons:[
      "Only 5 customer reviews at the time we checked, with a 3.4-star average — that's thin evidence compared to the other products on this site, so treat this as an early-stage pick, not a proven bestseller",
      "At $121.49 plus potential import/shipping charges outside the US, it's a real investment for occasional camping use"
    ],
    whoFor:"Campers, hikers, or anyone who wants to charge phones/power banks off-grid and values the extra USB-C port and real-time output display.",
    whoAvoid:"Casual users who only need backup power a few times a year — a simple power bank is cheaper and doesn't depend on sunlight.",
    verdict:"Solid, modern hardware with an actual design award behind it — but the review count is small, so we're recommending it on its specs and award rather than a large track record of buyer feedback."
  }
};

/* =========================================================
   CATEGORY TAXONOMY
========================================================= */
const CATEGORIES = [
  { slug:"electronics", name:"Electronics", icon:"📱", desc:"Phones, gadgets & tech essentials" },
  { slug:"mobile-accessories", name:"Mobile Accessories", icon:"🔌", desc:"Chargers, cables & phone gear" },
  { slug:"computers-accessories", name:"Computers & Accessories", icon:"💻", desc:"Laptops, peripherals & add-ons" },
  { slug:"fashion", name:"Fashion", icon:"👗", desc:"Everyday clothing for men & women" },
  { slug:"shoes", name:"Shoes", icon:"👟", desc:"Sneakers, sandals & everyday footwear" },
  { slug:"beauty-personal-care", name:"Beauty & Personal Care", icon:"💄", desc:"Skincare, grooming & self-care" },
  { slug:"home-kitchen", name:"Home & Kitchen", icon:"🍶", desc:"Everyday essentials for the home" },
  { slug:"appliances", name:"Appliances", icon:"🍳", desc:"Small appliances that save you time" },
  { slug:"baby-kids", name:"Baby & Kids", icon:"🧸", desc:"Everyday needs for little ones" },
  { slug:"health-fitness", name:"Health & Fitness", icon:"🏋️", desc:"Gear to support a healthier routine" },
  { slug:"sports-outdoors", name:"Sports & Outdoors", icon:"⚽", desc:"Equipment for sport & outdoor life" },
  { slug:"automotive", name:"Automotive", icon:"🚗", desc:"Car care & driving accessories" },
  { slug:"tools-home-improvement", name:"Tools & Home Improvement", icon:"🛠️", desc:"Tools & fix-it essentials" },
  { slug:"pet-supplies", name:"Pet Supplies", icon:"🐾", desc:"Everyday needs for your pets" },
  { slug:"travel-accessories", name:"Travel Accessories", icon:"🧳", desc:"Pack smarter for your next trip" },
  { slug:"office-stationery", name:"Office & Stationery", icon:"🖊️", desc:"Everyday work & study supplies" },
  { slug:"grocery-daily-essentials", name:"Grocery & Daily Essentials", icon:"🛒", desc:"Everyday household staples" },
  { slug:"best-deals", name:"Best Deals", icon:"🔥", desc:"Today's biggest discounts" }
];

const CATEGORY_INTRO = {
  "electronics": "Browse our picks in Electronics — audio, wearables and everyday tech, matched to the right store for where you're shopping from.",
  "mobile-accessories": "Everyday phone gear — chargers, cables and accessories to keep your devices running.",
  "computers-accessories": "Laptops, peripherals and add-ons for getting work (and everything else) done.",
  "fashion": "Everyday clothing essentials for men and women, picked for comfort and value.",
  "shoes": "Sneakers, sandals and everyday footwear picks.",
  "beauty-personal-care": "Skincare, grooming and self-care essentials for your everyday routine.",
  "home-kitchen": "Everyday essentials for the home — from hydration to lighting to décor.",
  "appliances": "Small appliances that save you real time in the kitchen and around the house.",
  "baby-kids": "Everyday needs for little ones, picked with care.",
  "health-fitness": "Gear to support a healthier daily routine.",
  "sports-outdoors": "Equipment for sport, fitness and outdoor life.",
  "automotive": "Car care and driving accessories for everyday use.",
  "tools-home-improvement": "Tools and fix-it essentials for jobs around the house.",
  "pet-supplies": "Everyday needs for your pets.",
  "travel-accessories": "Pack smarter for your next trip.",
  "office-stationery": "Everyday work and study supplies.",
  "grocery-daily-essentials": "Everyday household staples.",
  "best-deals": "The biggest discounts across every category on Click & Quick right now — picked out for you automatically wherever a real markdown exists."
};

/* =========================================================
   GEO -> STORE RESOLUTION
========================================================= */
const AMAZON_MARKETS = {
  US:{ label:"United States", store:"Amazon.com" }, CA:{ label:"Canada", store:"Amazon.ca" },
  GB:{ label:"United Kingdom", store:"Amazon.co.uk" }, AE:{ label:"UAE", store:"Amazon.ae" },
  SA:{ label:"Saudi Arabia", store:"Amazon.sa" }, AU:{ label:"Australia", store:"Amazon.com.au" }
};

function resolveStoreType(countryCode){
  if (countryCode === "PK") return "daraz";
  if (AMAZON_MARKETS[countryCode]) return "amazon";
  return "aliexpress"; // everywhere else, incl. markets like Afghanistan
}

/**
 * Fallback chain per product:
 * 1. exact product, local store  2. similar product, same store
 * 3. exact product on AliExpress  4. honest "unavailable"
 */
function resolveOffer(product, storeType){
  const direct = product.stores[storeType];
  if (direct && direct.available) return { product, store:direct, storeType, kind:"exact" };

  const altSameStore = PRODUCTS.find(p => p.id !== product.id && p.category === product.category && p.stores[storeType]?.available);
  if (altSameStore) return { product:altSameStore, store:altSameStore.stores[storeType], storeType, kind:"alternate" };

  if (storeType !== "aliexpress" && product.stores.aliexpress?.available)
    return { product, store:product.stores.aliexpress, storeType:"aliexpress", kind:"alternate-store" };

  // Last resort: the exact product IS sold somewhere, just not through this visitor's usual
  // store. Show it honestly labeled as international, rather than a dead "unavailable" end.
  const anyStoreEntry = Object.entries(product.stores).find(([, s]) => s && s.available);
  if (anyStoreEntry) return { product, store:anyStoreEntry[1], storeType:anyStoreEntry[0], kind:"international" };

  return null;
}
