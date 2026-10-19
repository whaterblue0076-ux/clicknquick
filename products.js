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
  { id:"apple-airtag-2nd-gen", addedOrder:22, category:"mobile-accessories", name:"Apple AirTag (2nd Generation)",
    desc:"Bluetooth item tracker for keys, wallets, luggage and more, with Apple's Find My network and Precision Finding.", icon:"🏷️", badge:"", rating:null,
    image:"images/amazon-airtag.jpg",
    why:"Made by Apple itself, works with the massive Find My network of iPhones worldwide — one of the most reliable trackers on the market.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B0GJTFXNRX?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"amazonbasics-tool-kit", addedOrder:23, category:"tools-home-improvement", name:"Amazon Basics 142-Piece Household Tool Kit",
    desc:"General-purpose household tool set with storage case — hammer, tape measure, pliers, screwdrivers, hex keys and hardware kit.", icon:"🧰", badge:"", rating:null,
    image:"images/amazon-tool-kit.jpg",
    why:"Amazon's own house brand, consistently appearing in Amazon's own Best Sellers: Tool Sets list — a safe, general-purpose starter kit.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B08KTV3VB8?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"logitech-b175-mouse", addedOrder:24, category:"computers-accessories", name:"Logitech B175 Plug and Play Wireless Mouse",
    desc:"Wireless plug-and-play mouse with comfort design, available locally on Daraz.", icon:"🖱️", badge:"", rating:4.75,
    image:"images/daraz-logitech-b175.jpg",
    why:"388 sold with a 4.75★ rating on Daraz — a genuine local Logitech option for Pakistani buyers instead of an international order.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Flogitech-b175-plug-and-play-wireless-plus-comfort-mouse-black-i356754201-s1795197865.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 2,899" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"bagsmart-toiletry-bag", addedOrder:25, category:"travel-accessories", name:"BAGSMART Toiletry Bag with Hanging Hook",
    desc:"Water-resistant hanging toiletry organizer with transparent compartments for shampoo, cosmetics and full-size containers.", icon:"🧳", badge:"", rating:null,
    image:"images/amazon-bagsmart-bag.jpg",
    why:"Top-ranked in Amazon's own Best Sellers: Travel Accessories page — a genuinely popular pick for organized packing.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B07SL2X217?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"sharpie-s-gel-pens", addedOrder:26, category:"office-stationery", name:"Sharpie S-Gel Gel Pens (12-Count)",
    desc:"Medium point (0.7mm) black gel pens with no-smear, no-bleed technology and a contoured rubber grip.", icon:"🖊️", badge:"", rating:null,
    image:"images/amazon-sharpie-pens.jpg",
    why:"#1 on Amazon's own Best Sellers: Office Products page — a trusted, well-known brand for everyday writing.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B082PN4X5J?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"premier-protein-shake", addedOrder:27, category:"grocery-daily-essentials", name:"Premier Protein 30g High Protein Shake, Chocolate (12-Pack)",
    desc:"Ready-to-drink protein shake, 160 calories, 24 vitamins & minerals, no added sugar, gluten-free.", icon:"🥤", badge:"", rating:null,
    image:"images/amazon-premier-protein.jpg",
    why:"A consistent top seller on Amazon's Grocery & Gourmet Food bestsellers list — a genuinely popular everyday protein option.",
    stores:{ amazon:{ available:true, verified:false, url:"https://www.amazon.com/dp/B07MJL8NXR?tag=clicknquick-20" },
             daraz:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-neck-portable-fan", addedOrder:28, category:"appliances", name:"Portable Foldable Neck Fan 3000mAh (5 Speeds, Phone Stand, Display)",
    desc:"Rechargeable 3000mAh handheld, neck-hanging and desk fan with 5 speed levels, a built-in phone stand and a display screen.", icon:"🌬️", badge:"", rating:4.59,
    image:"images/daraz-neck-fan.jpg",
    why:"1,940 sold with a 4.59★ rating from 250 reviews on Daraz — a popular, affordable local pick for hot days and load-shedding.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F3000mah-5-usb-i881600047-s3903459941.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 897" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-power-bank-10000", addedOrder:29, category:"mobile-accessories", name:"10000mAh Portable Power Bank with Built-in Cable & Micro USB Input",
    desc:"Compact 10000mAh power bank with a built-in cable and Micro USB input, sold as an unbranded product on Daraz.", icon:"🔋", badge:"", rating:4.38,
    image:"images/daraz-power-bank-10000.jpg",
    why:"1,308 sold with a 4.38★ rating from 276 reviews on Daraz — a budget local power bank. Sold under 'No Brand'; check the seller's details before buying.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Fmi-power-bank-10000mah-portable-charger-with-built-in-cable-and-micro-usb-input-i494193064-s2356748104.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 1,400" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-electric-kettle-1500w", addedOrder:30, category:"appliances", name:"Electric Kettle 1500W – Fast Boiling with Overheat Protection (2L)",
    desc:"Stainless steel 2-litre electric kettle with 1500W fast boiling, overheat protection and an indicator light.", icon:"☕", badge:"", rating:4.84,
    image:"images/daraz-electric-kettle-1500w.jpg",
    why:"434 sold with a 4.84★ rating from 72 reviews on Daraz — a popular, affordable kettle for everyday tea. Sold under 'No Brand'; check the seller's details before buying.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F1500w-i1951640706-s14014062134.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 1,151" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-digital-air-fryer-7l", addedOrder:31, category:"appliances", name:"Digital Air Fryer 10L with Digital Panel (Imported)",
    desc:"Imported 10-litre air fryer with a full digital touch panel, sold with a 1-year seller warranty. Several sizes are listed on the page.", icon:"🍟", badge:"", rating:4.89,
    image:"images/daraz-air-fryer-10l.jpg",
    why:"2,670 sold with a 4.89★ rating from 505 reviews on Daraz — a very popular air fryer listing. Sold under 'No Brand'; the price shown is for the 10L model, so check the size you pick.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F55l-16l-1-i518354034-s14064828087.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 17,999" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-car-roof-star-light", addedOrder:32, category:"automotive", name:"USB Car Roof Star Night Light (Galaxy Projector Lamp)",
    desc:"Mini USB-powered LED star projector for car interiors — projects a starry-sky effect on the roof. Plug in and use; red light variation.", icon:"✨", badge:"", rating:4.75,
    image:"images/daraz-car-roof-star-light.jpg",
    why:"3,421 sold with a 4.75★ rating from 497 reviews on Daraz — a cheap, popular car interior accessory. Sold under 'No Brand'.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2Fled-led-usb-usb-i449452766-s2140309582.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 449" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-facial-hair-remover", addedOrder:33, category:"beauty-personal-care", name:"2-in-1 Rechargeable Facial Hair Remover & Eyebrow Trimmer with LED",
    desc:"USB-rechargeable 2-in-1 precision trimmer for women's face, lip, chin and eyebrows, with a built-in LED light.", icon:"✨", badge:"", rating:4.94,
    image:"images/daraz-facial-hair-remover.jpg",
    why:"1,435 sold with a 4.94★ rating from 247 reviews on Daraz — a very popular, affordable grooming tool. Sold under 'No Brand'.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F2-1-i1957337152-s14051680476.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 617" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-3in1-grooming-kit", addedOrder:34, category:"beauty-personal-care", name:"3-in-1 Rechargeable Grooming Kit for Men (Trimmer, Shaver, Nose Trimmer)",
    desc:"Type-C rechargeable men's grooming kit with a hair trimmer, body shaver and nose trimmer, plus guide combs and a cleaning brush.", icon:"💈", badge:"", rating:4.93,
    image:"images/daraz-3in1-grooming-kit.jpg",
    why:"262 sold with a 4.93★ rating from 43 reviews on Daraz — a well-rated all-in-one grooming kit, though with fewer reviews than our other picks. Sold under 'No Brand'.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F1-3-1-3-c-i548163750-s2554061414.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 2,399" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-hair-dryer-brush-3in1", addedOrder:35, category:"beauty-personal-care", name:"3-in-1 Hot Air Hair Dryer Brush (Dryer, Straightener & Curler)",
    desc:"One-step hot-air styling brush that dries, straightens and curls, with three heat and airflow settings.", icon:"💇‍♀️", badge:"", rating:4.78,
    image:"images/daraz-hair-dryer-brush.jpg",
    why:"2,574 sold with a 4.78★ rating from 495 reviews on Daraz — a popular, affordable all-in-one hair styler. Sold under 'No Brand'.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F3-in-1-hot-air-hair-dryer-brush-hair-dryer-straightener-curler-combo-professional-one-step-blow-dryer-brush-for-fast-drying-smooth-straightening-easy-curling-salon-style-hair-styler-for-women-girls-i912257010-s3954552050.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 1,699" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-beurer-electric-blanket", addedOrder:36, category:"appliances", name:"Beurer TS-17 Electric Under Blanket",
    desc:"Electric under-blanket from Beurer that warms the bed before you get in — a winter comfort pick, sold with a 3-month seller warranty.", icon:"🛏️", badge:"", rating:4.65,
    image:"images/daraz-beurer-electric-blanket.jpg",
    why:"1,897 sold with a 4.65★ rating from 352 reviews on Daraz — a branded (Beurer) winter essential, at a higher price than budget options.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F17-15-i166108019-s1334072273.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 9,072" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"daraz-thermal-inner-suit-men", addedOrder:37, category:"fashion", name:"Thermal Fleece Winter Inner Suit for Men (2-Piece)",
    desc:"Two-piece thermal fleece innerwear set (top and bottom) for cold weather, available in several colors and sizes.", icon:"🧥", badge:"", rating:4.36,
    image:"images/daraz-thermal-inner-suit.jpg",
    why:"3,637 sold with a 4.36★ rating from 732 reviews on Daraz — a very popular winter-wear pick in Pakistan. Sold under 'No Brand'; check the size chart before ordering.",
    stores:{ daraz:{ available:true, verified:true, url:"https://go.urtrackinglink.com/aff_c?offer_id=164&aff_id=172222&url=https%3A%2F%2Fwww.daraz.pk%2Fproducts%2F2-i255081169-s14033232260.html%3Fsub_id1%3D{transaction_id}%26sub_aff_id%3D{affiliate_id}", price:"Rs 1,390" },
             amazon:{ available:false }, aliexpress:{ available:false } } },
  { id:"ali-led-motion-sensor-light", addedOrder:38, category:"tools-home-improvement", name:"Wireless Motion Sensor LED Night Light (USB-C Rechargeable)",
    desc:"Slim rechargeable LED light bar with a built-in motion sensor and magnetic or adhesive mounting, handy for cabinets, wardrobes and stairs.", icon:"💡", badge:"", rating:4.5,
    image:"images/ali-led-motion-light.jpg", gallery:["images/ali-led-motion-light.jpg","images/ali-led-motion-light-2.jpg","images/ali-led-motion-light-3.jpg"],
    why:"5,000+ sold with a 4.5★ rating on AliExpress. A rechargeable, no-wiring light that switches on when you walk past — useful in wardrobes, kitchen cabinets and staircases. Sold on AliExpress by a third-party seller (no brand); delivery takes longer than local stores.",
    stores:{ daraz:{ available:false }, amazon:{ available:false },
             aliexpress:{ available:true, verified:true, url:"https://s.click.aliexpress.com/e/_c4dDo9dL", price:"Rs 713" } } },
  { id:"ali-rotating-faucet-aerator", addedOrder:39, category:"home-kitchen", name:"360° Rotatable Faucet Aerator with 2 Water Modes",
    desc:"Swivelling anti-splash faucet nozzle with two modes (bubble stream and spray), designed to reach corners of a kitchen or bathroom sink.", icon:"🚰", badge:"", rating:null,
    image:"images/ali-faucet-aerator.jpg", gallery:["images/ali-faucet-aerator.jpg","images/ali-faucet-aerator-2.jpg","images/ali-faucet-aerator-3.jpg"],
    why:"Adds a swivel head and two flow modes to a standard tap, making sink cleaning and rinsing easier. Check your tap thread size before ordering. Sold on AliExpress by a third-party seller (no brand).",
    stores:{ daraz:{ available:false }, amazon:{ available:false },
             aliexpress:{ available:true, verified:true, url:"https://s.click.aliexpress.com/e/_c4L0g4Oh", price:"Rs 836" } } },
  {"id": "ali-1005006995184446", "addedOrder": 144, "category": "appliances", "name": "Neck Bladeless Fan Mini Ultra Long Life Portable Lazy Silent Fan USB Charging Student Sports…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S79fab540817d4b569e0539490d0859ecl.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S79fab540817d4b569e0539490d0859ecl.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7143294623ae4e50a7bc0d4004757689x.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3c6c1ecc44b64829a66051bb3fb0c674i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S868df9f3dfb4423b8507c58f5ea1660fC.jpg"], "why": "2,600+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4m7RRmPevVNSD2frwC62zgi86nSRdsCCDvcmn6GJg7Q0YgJksgQ3krI6w46kSuaIVrF1JjtR2NYkeefjepUFQAx3y6QGZjyronPZcvner2VdevBGhGjRIFo5xnY8UsCoE0jAaHKk9qgFBSmCkYSk1mSPMq7Dj9BsYe9M3WBLfyBZIe74t5GFRvq6Rr9lOK46b1EnDVufpfYQGB9B3QEa9npgWG2fN0CNZ1gFDfBAUyaLd4qgM0sF7lAhvc7Nj22vhXybSPC4TdoFgUGkqxSKqNoX0HkXCUq0UXGvLT7vUIDEmGbRExPAvCkyJvl7Th2qV8lj1ShN5p7YfZpZziad8Teo4f5yIJAPGiebOnio0Jmna2vq3XeDA4UBUTUnv8e9nXFwbwmKoxPdNlyOwk9LxYkrSjLMPkzBAG9bC4WVwD5ZPQJVjpmriQB7pud0PfKFfF0D3ql0FpgFqahVlr7YvvE7P18Pf30fKvxLGdXgWKpAoIprZBKewGBsyJgoPxLUU8FEVZbeoaQ9OGe67fMjyHpOcyJ8guRGxMc6DQjT2QySC96s78RSwevPlcvSM525zoRMChaQHPUBEvBedCzegTOjtISzh7WIiEAObXCsjUDTu67RY684Y6Cy4Uu3pBt5r8BrOGyXSONUQiO07zWKWlfObzCRFET24OYEc7qzH9l2CJE4slYbR0Sw5yc6x8j28bLrUQVAGVfU5z", "price": "Rs 3,564"}}},
  {"id": "ali-1005010043992813", "addedOrder": 145, "category": "appliances", "name": "Neck Bladeless Fan Mini Ultra Long Life Portable Lazy Silent Fan USB Charging Student Sports…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/Sef124b10648048319c9a5a6709768a85B.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/Sef124b10648048319c9a5a6709768a85B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8dde6cba9bff457880e02270e520cbccs.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S948b7bae8d434be9b83a1f5bdf660eacn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6f939da57f5642839ea8b87426b495942.jpg"], "why": "2,300+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4kABGSwUSF0oMik5scQGJdIt1m0uFFQNJl2fPFZB4I0H6AtW7APzEdtkkWQ2p0O4032SriwbY6rVbpqeyBwxhegL2osRGdp91hEJrYBqk3UdjZrp0QLeEkRARAz1KcJJxuhfFQmskA3VhjrOoBoeLWrJlCymBjpSCLLRu9ENEgL63oLqD9Ql4KzPkxJLX5FxynumHVbk6YjLIeLLmVkmBwJd7PjxTCiMVvzM6e7SOl3rt1yfBU8nQXKTia58EECCjJSLept5bj3i5Ul07Iz87eaMjnU7ICHI9CI1wwB4Cc6liCtVKdhhA4IajHuWSvCjjZcXOH4jtFdC2B5710GMcZ9uPyNzSd7rZmSgPQRFQrqvEfjSmsch3qyPU8FoG2rF5prYka1bUSNSIkqTandjdTcRCJPQYvmUV7XjsjStgce1TvcApGi9t3du7Juf2MN72H5sxlR6AM0jMWx4LjCwp8SQEbqF6wAlWQ1OGeNYlmj35oyCjIgOtdbcz6A0Q9aeuOE9G1qvIX7UZLvm1Hk8yXg4rXlUuer58OiNa38oqDxS3OlbAyqPsn6KDs8oDeZsy7UbSZFyaNbDSdOxK2eHibGkZeWLDPKrjRMXJMoumunNOrYqKlokGaWVy0O8xnJiPMwG414fcK797nv0RI5lDFRwDk7NZUp23jRKGj3UVbDMMxZej2e1LfJ4AP0NyZrfjByb6tFJUsjXH1", "price": "Rs 3,966"}}},
  {"id": "ali-1005007431129955", "addedOrder": 146, "category": "electronics", "name": "Lenovo GM2 Pro TWS Wireless HIFI Stereo Headset Low Latency Headphones Gaming Music Dual Mode…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S54eca59e988d4648ba910ad9b44eea7ei.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S54eca59e988d4648ba910ad9b44eea7ei.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S88f35efb63864cfca208aab1983681aaj.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S428fbc8dcb5946d1af138aec230cab0bg.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8481ed223d4143248f50a713dfcf89303.jpg"], "why": "15,400+ sold on AliExpress with 96% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4EAUdrl8I9RKQdP4LvSpN2KwjJse8hxImevHnyOqxgWhLUvYdYBFZ1lgJ7hmPqgRHpQhxwj5Y9Q4ndhYYxKjKK1uZ8FCiIDwfml40qDAfa6cyIKbnqs6MtK4qbIuc1hmUIN6W6Sjs0DQdP1QVfm8Csjytqr6Acjcti9VGXGodPSqOUiu85KGshaqzWSj0sEprA1JOa3mwM4B7UnOIm5ciDRvHVwNwXkLXoaH9tlmb1WKlRuKzyZl73TuUDfaayODKT9YrD41rQPGqvuHj1gM3DTxLdiNWv7jZhwku8PCVHvBUYsDQ3CpiOijMCSuSpnOVU1a5XO0QelmUXmlK9tYWOQPUNo8ynNP7Np9tRyFH3DCNBdpFneuT5z7FywdCZNZDgwF9yb7ift476PIwFkTu4np3rCG92C6XBXNTk3DcqKHu5SkBsuq4WHvYUqyUEVKDQT5IxRduNnFJDgYcNkCAWBkzaAKFL4qeBPfKXKcaN122ygnWHMl4MiK0UVC2H0U5491LVNt8IibF2oZ4ehd6mYFvBTUjQw62Yu1q1C1VoCa5qyY2HGrRB1VLeAn4phqQfqBvlxd3a5Zfrcakdg04gvTluYGMhH0c0slyXQWk1XarO6EEO9maLyqoviB27NpHDoUVEaGSGYhV6sdnCR1rfGXE0R6ofZbVhxFg8mGformZChlgYlndBvtToRZy3RqnQn74Z0GtX8wJp", "price": "Rs 4,311"}}},
  {"id": "ali-1005006678116483", "addedOrder": 147, "category": "electronics", "name": "Choice Lenovo LP40 PRO Bluetooth Earphones TWS Wireless HiFi Stereo Immersive Music Headphone…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S472dc899879c4a91aa889c861cc77945W.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S472dc899879c4a91aa889c861cc77945W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S34ef4f2ca7d740509ea96a425a773b65B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc5c1cd88c1d3445da4f02888ae3b9ae21.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S80b9ba7fec67494ca19884e2579d3ed4M.jpg"], "why": "29,300+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4k93bnClGIKU37U0V0o0kiYePhmLS1qmbIAGtbleRRTZz2VjwhsPe8QfXcJY6OydhCgeI31HpiUrxDvpgkiqM1myzCVXrwJUxkSIDWF4jBPNPLqsXwasDnLE9XHTxZAmQuiBX9WlKjsRhQzXLw7efzvN4NBmVGxGiGw5CxmpJhSAwPusmwAyENJA9SOSXxB0O2gSgkYdiCWVWeqApZmzIqz2J6B4tU50yXf8yJeZM8YPbNzDqiI4TdXtVUk08hiGGls9mWSOlyCwadq0DYqeeUNVQ1RKEqgPjFwThOKay8wntVke7mGmnodgJ8aC9u3V5JOZGfG6T6t9vqjODn1R9IohmsNRnnHjI5UnUmajoIBKbrumu4m9Q6FSkT68c6xWjzUETooilYlnmyJLtTEcD8ghqenbQcDlcpLgkQrjtbs3seTNVGBLntlLjA3tqNwOlg3jdImbSIUnbNzYiynDRW0KYUP5J1R4EgoN5Khkl1JIUBgKELNyV6UlP3qiYUDm6wD7fiIFCWzUVrH2Q7yyF8j8Y9SSxdfgQRUZ8EKKrXqgNVPrPyhK3OupRNXJrEw8MkYSkJWfMvoPFW3KgWTxg1yX1UEjCwVqznItOHwb8bJV6x59xjXDSNV8JDRRH7He8vmXZaK7PUsXBxlH8b48nfSBv5vnEzW0eKEwcti443JHeJUP4eojqArA7UT7natHvwPqmnOA6K7kjZ", "price": "Rs 2,711"}}},
  {"id": "ali-1005006861792368", "addedOrder": 148, "category": "automotive", "name": "Magnetic Metal Plate 1-20Pcs For Magnetic Car Phone Holder Universal Iron Sheet Sticker Stand…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S504d1f05632f4df886531e74dc9db46aV.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S504d1f05632f4df886531e74dc9db46aV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3941c1ac01ce4213a76a2f1d4951bfa8U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0afc28c7818542689bc99a3529023acdP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sbb0081717e3e44a683c36fc5c9500e5fX.jpg"], "why": "12,000+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4mXiZG9FxXfjzVsgosntsDTFWHJwSFAoyzDrK7d6yEJbnXMKjPDKdvN4Yeu6gIDBSdNf36wOb3OTdIIMycbXzUk7OG8dcIq4ZVstbl8hekYpXHWkaAMNZj5fFWENNdEj9wZHSCXlFYQ6rCpVHnFKREOZLeEkQz1bxPRNIDn4mfn7AY1zJsJ85MOGvWr6jfNMzdtbSqXk3aihfu7kJfn5QzmeVcjJfCpVZ4J7Nby5cLQme74o2gX3jXP1yN3xgvr0yoUJrqY9DAuaVMJplJ6TvRTrIIqXhVoFho2ozEB2AXPLoYfwGwEKlf8Rh4yL5lInzutiyBcNWPwBAnNTbscg5UD3xjVrTYzBPr3hzDT5SNMQqJLY7LV4qIBswl7CgnDTAqO33Ryf47N1A71a7uG4ba5yFq2hPIVxc36spHNlYaHlorO23ZWMnS31YpmUVQPfS1a0wgKwR0AWxhpAVm0PMk4PoIbK5w4honcW8mQ3k3oYVFPScWT6cJimO9WYRr3Meo3KCuS8xGQMs7kRb4SGunaQ7Ty3fGSEkZJwAYM9PX61KDahv6t4CL1EdbRGkThkeR4cShUydJetFObIdUjaEuLBxn0QPW5itkCCSV8UKqksL7QcrRJHMnufae0OI9H2UATmavChU7Z0A9wd2WZJlBUyqNqfDcMsPwbIIXCVReiGt25aA6BMQuYPHaIzmDHdfork1JWG7gzSFJ", "price": "Rs 883"}}},
  {"id": "ali-1005006861966091", "addedOrder": 149, "category": "automotive", "name": "Mini Finger Ring Holder Stand Grip 360 Rotating For Mobile Phone Car Magnetic Mount Phone Back…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/Saab0a5660acf4c7ab167e7ac9cd37e7b5.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/Saab0a5660acf4c7ab167e7ac9cd37e7b5.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf5ea2d615c9c49398bca0acf4f193b502.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S075af56ce7c042ad88c20530f77b66f1o.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb86b27bc29734dba905031cf460e6199Y.jpg"], "why": "8,300+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4kyaFiAXARNOmqgJAJvbAfo0cjKu76FqzuDkl2MvYrddxsUWmURNKnexwjZrYkOdveWPZss2XGagaApJ3qAW4ig6B4uPhuy0O8vvXBYN4Oq5bqB0DT41wPGod1lzlVgH2ygRFBRcopulrwUySgl3OMTShZqF6t15e1vJnfZFvaG9xiPNMme2w3nT933HddPh6Yhu4UgjgxAgEGnFivnIs5aiGnYrDWYAPxuNRzFQyON7VCOMvBv7G4PA5pcYhFYQQZpHJegTBCfNzIvjXsfbyll4bSQxoSZpL7wuzHQQqHoOtuYRckyW1qxFcrw1bcg2MDsqMwsF0ZcjVkKy3hjMOWq4W9zTN3cDZNs85LLNYWfp6nGoXh3yRIIail83tC8dzD4p1iUuH9Da8jtYC3IqIzQ1TS30SLKBLhoPC5miVutPv78Xl9kP6GiJUMvlfNCghs0hVTfo1R55g7AsEepRh16MPeigUrSBuzuGD6WHobztQ35DgQtobEcJoicrd7fINWeP7Tu3YPaoySTYhsbu1btDPVbwJsS4MxMI3u7cNLgquye6Guy73ZX0XjEZJHrwtr2kEnoTeCwZReEz8EaTXCnwFGNkJxkTlvFKoXgBgzge8rt13xHxg433xRZMX0cU54V7V2JHpUq1UcSntHssaIxpZ3A6FoMHzjk0utXteaLVWmdECvYMWDqnvpeWb0SLU0isb3ETS5nrmD", "price": "Rs 670"}}},
  {"id": "ali-1005007306730122", "addedOrder": 150, "category": "home-kitchen", "name": "Bag Clip Food Sealing Stick Reusable Food Preservation Sealer Kitchen Storage Organizer Snack…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S6a9fb5b86b7e4016b1031f062ef66da9d.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S6a9fb5b86b7e4016b1031f062ef66da9d.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf295487e85f841848181d0ac99b1ac7fi.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sdd384a1707734022bdd52d8e351047f31.png", "https://ae-pic-a1.aliexpress-media.com/kf/S986afb428f2d4d75889b1fafa1ee4f3eT.jpg"], "why": "1,200+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4Fk3W4qwZLNSaa57tgqKZ8O1HFz07bDp6o5peBme8Z0YZoNMRXfDA1JZ2ZzGIawMnBKtWOqVJnRbRxUAZW4Rv0ZsEF8eCE8rhAUWwRpckj577hmLFjSSuZSPWDvpX6WHLQrhn9YQrc5GdVWh63O5Mk5N76RMCt7FlK1o2ZPzYRkUKpVrn5pKsSA23fb9f5UPGxtcfiAWick3ULtSVlM7VPjagXasHdGmdVA3n42CPhvwfYGn48WEwmpb8XmcIwKQKR2h7sfVShomRgZp0z9IIO1lEfMPJoaLhDzzpUTMbQxpBQS43NpnkIrabyqSNDXgztvHpA3WEpl2lGLB4XGef4xpzBrXdhiUt76dQOVAVCgJVJ1cXodwmlG9JpZPPrmvf3Lp5sxtsOCiZClic3r1COOrru9QI3qfPa0vt1cgej67bE1FpS54a9CtnS9TlLqPnL4uFuGebnvnoTAapNHlgzbDfwbw5BbVhmieGePXd3u06BJoP1o5VCYjY1Zoz3DQdrf5l7ZzuAUT7b3jiU1G3gtLFnw4CnltsLotZlUU78LLfGzkX8vYEwx7VBv8mFZGhrPKayWg1qFVD8toAVh1V6ZCcHpv9jwjzH7DvDMfq3mW4AxfGNESTW80SKG9oBuxd5QL2ZSdXb3anWp3zvTzKx98iU18hhqf8kPWsIiq7hgGLyimDFtW5ktxlXCXkYxFv5ShpJQR8mptpl", "price": "Rs 1,966"}}},
  {"id": "ali-1005006354475137", "addedOrder": 151, "category": "home-kitchen", "name": "Sink Silicone Tray With Drain Soap Sponge Storage Holder Countertop Sink Scrubber Brush Soap…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/Sb75a94147aa5475fa971d5b7bd45c9aai.png", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/Sb75a94147aa5475fa971d5b7bd45c9aai.png", "https://ae-pic-a1.aliexpress-media.com/kf/S0285608037ce4551b80cc8d42e37899bu.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S18104443daf641bda015b611ad95d1bbZ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6c92ea42da384318b96a436a4349d86eR.jpg"], "why": "2,000+ sold on AliExpress with 96% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4kJa3s9yLHyc4YmAIxQCrX6Ij2cOqE5YEluiJC1pZPV0CJpRFbyyB9625jWEV94xaWmJi32LkbvdgjFGDBoE8GAZx5bJkgIIEx4V32l3z7jh66QysuKO8oW8uTZp1Zkm9eHabP58qvhjp8vlf5YXHlCY9SuOOYSGAU4iNHTLN531ZvfoHYTzzL40oqGtZJrXfrpV558J1Ljqej6Hd2QqNHOhtoDfbDmQN8zu8ZSZR1lvuN2doL3fK1lp0u3L0Esxc9IDZenz36Bv6pdiAlfVCUvnuDpASa6BjKu9dI8JLt1HYDwjCRBdi5o0WdbYzrnHAvRdrTideKqK5TewAn9bbGmnj71CtuGSiTIlNe3cE5Su178d1EAxfw9XtAI1RimuHnJfZkKW4KIQ2idfxE06KiEkMjyMc7G8NsJxVeg4nc1ujlpeAwwBswFToI2Rb9LxzzdmaGlhwKWP7WSEpuCQD1vxEJzk5ByiyjYOpPPn80Jjh5m25dME4bKqwqEySZDHQU2UuRpWxQLFzapElFhogAbSvPeoPsBNLz4Axo7VsacalXXLr9rASTqoahyotOvRKwL6XpJEtbcSlQ0Vmgz9KMAAX3oeC0mIzXr9Z6RBoHhrdCqDiIvnYwU39wjqnmxHsmGuv8BzKMwcgJDkzsHH6LtI7Aircl7Q9cY8jTYHHKrR6rNg61M6ke2OUamc6zVK4nhDkOluuHC689", "price": "Rs 728"}}},
  {"id": "ali-1005007696406001", "addedOrder": 152, "category": "home-kitchen", "name": "Motion Sensor Wireless LED Night Light USB Rechargeable Long Strip Bar Lamp for Kitchen…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S47d6f17535e64d85b294dfcac44085fdq.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S47d6f17535e64d85b294dfcac44085fdq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2f0712d35c664f1189ec81284c78f557X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S429583d7129b455e96a36c733fb2da52g.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2d8860545287445ab1f99282368ccbc7m.jpg"], "why": "5,500+ sold on AliExpress with 90% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4mr1W6emSZ5wm6vMRukUOGgiCdlAkBH4BUDSSNhYujzDqM1YdUE05wBFU5tOJl89ewUNIqL4PM7jUF9tsjcTcZm2Q7ebcJt69azzwJDgvuAyJZJnYimjlTl4p2MGnUeypJmBMetaNqLdZ3L4zpskzdUxqRcfc5LwAjvPVXVtnXEn4GlaBiJVM4c2q5b2AyPXvxmczVw9vYNYFquHMMWNpDZrVDnZwpPiQcPhSfoRrLitOqTlXkH7VpEnCtofpj9xqTEXwt8g8M4a4IffkDnAFqUVME66jfacgKeASnu7M3RoCfmdjjqLBR6fAYgpI9bHL9l046nVnJUl2uaHdYRTzYCx8jptXUbMjP2MCtyXy8Es3BXjf2ojkAtpGXYZ3Z8ibRgKefWgXBYTR0rttMsWwtUxyDYBkrXCHfWLexyn2fgT5IpfxcMEm7Ava02R8rGznrteM74OgLkeJYeUBX8pxQ5yJblz1ROcIt7HxoITaEhUY2DZJcWbyNnqjr7bk2Q9uerBELmSwenZVe8Zq80LQI9E3BNz819hznEEDEujtWwHCWyWw33oKYWCRzsoWCZsUO2TuHR08OoWT9BgKHVjcmBS2O9gjUNs7h0KqwMbh5IFwVoVMpLGASN8Kl8xBimz2T5SPeBTlYEhpt7gDmWYwWClvX6TPA4BfnkxrgzONwrGIqHshcwphi323joWZw9rjaqfcWsYZgUXUl", "price": "Rs 685"}}},
  {"id": "ali-1005010439276720", "addedOrder": 153, "category": "home-kitchen", "name": "Ultra Thin 12V/24V LED Power Supply Adapter 60W 100W 200W 300W 400W Lighting Transformer 5A…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S447723feacde412a9724ce3012ee02bf2.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S447723feacde412a9724ce3012ee02bf2.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0b7f48e97774c9ba02b2b00d84d13d3H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb57c738236fa4f439d891b68b5019a86l.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7148be0f5e8c480da7e40ef0ac9f2c77U.jpg"], "why": "6,200+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4m4NGwo1YQLUlSFHesmwloAhuAFpIwdhkj10WOmPuV8UNkk5WHNonBUmRVf6h09aU8bnbutRtQCHWT9wtr40PXuybROTbiNaBTSH3zRVkmYRuOq5i88qw2N2vMj11DetSaMcFKKjH3TaoJYMRHNGkewMbehDTLyZJulzD0HmMUHGHYKeP8a344yfnmt6eXUyvz2CJv5qkuApufpZLrD2JKPWttn4AvEybWz7Ti3YyPKBGjXNiA2etwYBaKFDNP6A64h43LqrlH5Dv6PGVfjb69dPfmGjxylorUeRuCuPRdEwFurplw73l8YT0p04X2eY2lq6EAi1UnDQjgDKcoLhSfzZI55tnvnK5GdJNBxgcAPo4J495XWGwHjuK0iVAqoPiapDnBgrgwBGu2cYHcBe3CQj8oFYsCxtIqccdjVgjOoQYVkDV3KtrlyvqTyjrPagyz4C8y46qAhPjxUswd6SzwocQPGCeoqum8i9rmagovhzHSR20jaL57qHVzfIqltoY9fMaSLVJeOHcjobIScqXx3WBGe7iHXrZlAs9aKzKs6Fn7Ei7fHPmcdhfzkNIIF8sXTQAmrKU6kz7Dn9fndKDR3UI7Zt2jPqdLXpfLDEYNr4RhdyCzud20szwlRO4ds4nAWNNPBhfkEPfsiZfcPRIAz7upHcTzuXll2ZMOVKUeNaoCDNX8oNqMbTIDdDFrIrhrd2D59Gkco9Ph", "price": "Rs 1,650"}}},
  {"id": "ali-1005006861822286", "addedOrder": 154, "category": "home-kitchen", "name": "5/10/15/20PC Jars for spices Salt and Pepper Shaker Seasoning Jar spice organizer Plastic…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S67f5eaa1bca04ffabcab151b96e2cd83t.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S67f5eaa1bca04ffabcab151b96e2cd83t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4b1ee32f7ccb4aa484419289deb16b11S.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H587c3e89d9194ed6853dc90e55f22f86k.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa6fb8f29197c4023b3ece35b8773bd2di.jpg"], "why": "1,300+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4m5AMOpexL4Mz0AQ9zeUAUrdehzH6QUmLZ5Q5YhgUloSTpu6fNMK9zg0oSRItRJF52v6F0ExxEw93hLd350aCnef95gEqXb5NXH7Y00TI3Ho33iJvsqCa61bv4OF0I1xvVK79uvD1VqjZQxTwTcM9mUHxIPJis8DmAKUtSIb4kRjsWAhG0h6oV26WYSy39dsqQOZ3PVkbd0FnSEwmPf3ZSGsDTbbITJ4E9dzGWZXX0I0rdYHY3Kl8y6BVVMr6LJgZ2HI6MAVO15VzRbBHTGfjAUAoLBbcPYIuYR7zilh8O1BseUc59D3jaqaNdvle3ZWglQYusNh6emuq4TgK813uut3kttTebBLhTircjvI6Yq1BifqyL1Q62QZyK509rdPRNoXx2wSdaV2rOiuc9V9tx7AjAvJLkHirZaFA6mbjQM9BmctQ6S3fx43coLBJZBKVNB9iinyWUG5vaGHa9MQereWle45BPGuhHI2FDovEpKxrboKXjz7h1ajRghkJ8bExt9tFHSySwDjuppM7mkcJu3mnTQVrBYuj0POfZynosnKHf3q4VNnZan81GaRRJa8KwHFTkPzCGCUC6CW7uWin7wryZnaS16rHO73JHh8fuvUMDyExBGg3A3ax9xXIJEPaPYAidFVFfwZO6LC0qFGQgQPRpQKCvAIwzaMyuPTsMRWvxQN3C04HLQbV27kGWtj1RHaFsaOoo9H6n", "price": "Rs 1,923"}}},
  {"id": "ali-1005007170841697", "addedOrder": 155, "category": "home-kitchen", "name": "USB RGB LED Tape 5V Flexible Strip Bluetooth Control Self Adhesive Diode Lamp For TV…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S828688ddbb254baba6b4ec49638c34dbT.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S828688ddbb254baba6b4ec49638c34dbT.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2bdc772508c844d2b7dcfa547ce8f8d2D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdaf1426b30d04638ba5e22e0153f3a6fT.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfef4a1d61b4442ffbcdd4aef480185eaG.jpg"], "why": "13,100+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4EIkmBTRLWSasGegr2UElTnMuXi6S7573ZEILPXAeQeKawaUia4gdFcz2bsr5s28MrWYgGTBrYY1dkj2RGKEF69krfFWDXrujWfDMKu3G88XgWQPw5XSpZfkhMstitrnSaEEwSsLparawhftC1xhfYb3LxMbgGxLb5Qd2u2BKaRFTR8fXJGUGkMcA1Z9cNOly9NU6WstWsWNptx6hZUMq1eHc0QGlq4Tuywz4wTF1rFbaFovmINcvJ7Jhkg9Iib2L32aBaCPV3auQNN4Ghv44d80c5xiYwrpgxwyfpcJ99zbNaRqyqfPoJPQPuV9jBfh33nghTg4ARGw6IURb1tFC4vgMHmIFNOvpK61cwBp11pY98eEeMTUgVO7HCh9lPhS2Hc0YBtmbtuOVkyoLP6luSb0Xw5Isaj2YVvL4w9HWtOMMr6VQKWeTkimZhQIzxYwJRAR5Hd06xaKphHsUlfFZPRxSLjeLiNiz49DNREOL7RA2cb2jlE1fHyCeYYGZQIidZCDN6boPTIephQf4193ZXI76OcOfjBYaKG15wMGWrHX0dLCzqKOSZtGQnmd5cEPFCl6AdQG2jWM8XP5EIq5f51GRiWvp1MMybFf1xSu19PvPlmQFvDTsdsPdD6Un48i5lSKuCRkbwzX3zOcNZm0fTo3ijOpVJapOtkT1F2wZPMfcfkyWEPDj2b6R1GjGJyvzH31PqM9awwDNX", "price": "Rs 859"}}},
  {"id": "ali-1005010228529636", "addedOrder": 156, "category": "electronics", "name": "ThundeaL TD80PRO Full HD 4K Projector For Movie WiFi Android Proyector Smart TV Home Theater…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S408732a5cbd14c86bbebbedbd16efeacn.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S408732a5cbd14c86bbebbedbd16efeacn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S38526ebc49ed4fb891a6affd207abc02s.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb30faadeb104925bfb7da6eff9baecdG.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scfc26db84f3749a7b85a6c531ab7f679u.png"], "why": "1,400+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4mKagSjaFzMEVKSyu7JsJz3z3FbqS1D88VWMYtqH8F08DxserGsPI90cxPbKErj0K8fWcriwu98A1vZDThdxCxhq2UPKGSM0qEGWqNCOz1fGUw3aShDZiAVI5kOgMGnTIFQrtPCyX334dAtWN1v73HrMWtNShOvghOSofvG2zDIXJHkPjF0kk6AiBidz5NExdhXrdSju7f1dXcT8NUZP8vWo1BqbUKAsC5WL7hbW670k4d7kWJxH8ldpcQdSH8KYY6XaK2NBzkH9iURsJx90ATpi1ev3okGznjGsquU5moyrtyq07ShcYG15xWYywROXpKM38cWFSISxKljiLml1lYJyuyOTJPF5BuW8xIWIPamZFCdiQHK0SofCFQp5U4RAd05OteuIadeTvbd9SI2hSw2gis3OqDUveFQGtstXhxJJjyc8ghAA36MzWTVeUCqJOhb3FVBhXp2t78Joi7u4cffCUr5HZkk2OEHVcB29HL7oG7kNQ4vhP2vi6Gn05iYu8HkH1H29cIbbYhqUQvVoPWDbZbJ01woQtcLA2e3kdpm8jWpHmHy0s9r2IwW6AG6gn3wYbK98ZXvEKOReWgNdkpz6YAgKBLhIwExGh1lKkfnz6H1DmssuIcgJDwqA1GfxUO4YcURsVhGKkBtNzAswwBYYLF3xMvXMyRVIKo40Q0ekWjXNabw0IUDx318Fah5PqmU8SjUTGqapKl", "price": "Rs 45,204"}}},
  {"id": "ali-1005007567145990", "addedOrder": 157, "category": "travel-accessories", "name": "Foldable Compressible Packing Cubes, Waterproof Travel Storage Bag, Nylon Suitcase, Portable…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S889cdc4bfc29461f90ed66e921d99fa9C.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S889cdc4bfc29461f90ed66e921d99fa9C.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4dda8653b88742f8ad8390fcaedfda701.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S068e2b32e3204f5fbb6d10f0d4ce15a9Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3e4d13978ed045fb9a0576756e2b3925I.jpg"], "why": "1,300+ sold on AliExpress with 90% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4nxL5mvoXLGcsN0YvOVPQyFx8CBxPBtwRCBpPYPmRgbllzr5AsuXnkjNAfUPL8hMtry3ZoIz6LZ517t2QqM9jNoqGdIWPTOAK371D6X8hurdMsJZaxqMuZo4ljnpM8BwIlcVoTucI81D9xTN1h4RqwFmBSleDemTHS32sQMMJvjwaO0MjzUB8IpF0ZB0LmDn6lqPbPc7xoeftMK63Cu4UU5dVgnc8u7XMdlmP9YIMZxQuKbDhYioOgMYrVm2vJ01aXLrQ9VMbkJ1Oitud2Ijk1Xu7fDAmXkaHzgN8XOMwLpn1QUInCoNpIlawRepiXo4h978QBKw4MKsilLdmsHvwi2Ag9euX5OvHG3SWwWbcSMl4ES63MDj8FD8IZfDhgAIBw0VOdtK6lIh9lIXJZFmOX4MUG8XAsBV9tU8rQ211r6UM1B1nvoEDpEohSEy5Pgo7uuEsaz2NP49jdFmA6h73LsRffPD2WJSdRqpFqKG2IXtVgTXK6fyMzlfydWn3nFrlphQG8gW66MihkB867LKIbtuumeRiJtCR2bHBLGqJHccc9OTxaWMSFWnXMw52Yeq2CZQBJ1fqOtwZNGLcNYuOkvE8UPlMe3NjOakFhOGUGKpMtstU4mqoyDeN397WN1AzLZX7IhMPXVSUNyJ0xIqO1F8YbdbJMHMNPr6VVGDCFPkAyXqa7quZfz7LnF0I0iHJftFTk0m3KBsxD", "price": "Rs 1,726"}}},
  {"id": "ali-1005010044071639", "addedOrder": 158, "category": "mobile-accessories", "name": "Durable Dragon Braided USB C Cable High Tensile Strength 2.4A Fast Charging Type C Cord Tangle…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S2ab02e7a1ef947b1bcc318e057792295X.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S2ab02e7a1ef947b1bcc318e057792295X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfb1942958f8d48a0a47dfa984253accbb.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S821abc8bd4cf43d0b41b97104b0cb9aec.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S839f6a6dcb3e4f0ba2d0f12bdb88bc5fe.jpg"], "why": "26,800+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4ny8D2dds0eT2P2AQvwpxTEx0FimzfaAl4Zbix2gdmDWGfYGZDBjLC9dOwCVIMubZJvC6grQxff4Zl0dOaLz6dGKVGfvoMbtnygx58BjGM4HWovlVrFiYHR4HNSU2D2U93sbv4XV8tAO73KqLj6ApnPtxicBHwYxO8zjnIkvqZDmoTRnYj7ATBEHDLTM7FrsNHdZPKIhjzUQX2bUlUFg5OZe8HSiiIo2DKHVqSeQM4DnZO8OPLWjZ934nahChebMjMhTvPBdRiDTxcl1vcVZ1Fz6zbuqN8fQa59Zp8Z6St9Nk7ytrKwoLdgQadmrrthJ9SvVdDBayaU4ClLi5xNHc0cRP2wod6Z5K1hmUSoo8De21sawvMvp6ddfa4oNlyuJ4WwrUpJtPVGLW9YAIYnPepiaR4IpV79DYCwpSMleI3sZLlT82H7Up4kuDoZcKBtrBnl2hgtPzPNzLN5QIP72uLLY8h4Upa5g8zmqZOd3ZFXuICh63WhJeHHu71za6V5uPpPvAJ4MFdYh1robtiJ7vXvrI2DTZrpKtCp6Ve3zHfQoOhsPdXAlWFmJhppwn6w3nvPElHEsOa5JfUe2tmc5kzlqaw81yfqYpoyxJGFSUtZSrWjhszsqJU4gBbu9bKaxVgndmD5XA6DNOuYMixfoNEkSscAgYOAJUkeVRSjqsxzAHpShZ625tr9qLTby20CNtDvCQaEQJ62Ozj", "price": "Rs 824"}}},
  {"id": "ali-1005007923305870", "addedOrder": 159, "category": "health-fitness", "name": "Booster Massage Gun Electric Neck Massager 7.4V Smart Hit Fascia Gun for Body Massage…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S3368cf2667744ec8a760f085f81876fbz.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S3368cf2667744ec8a760f085f81876fbz.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa7fc9f72609448febafe21ebad2af82cb.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8f644a3861754bddb1cdb0ed62f66a10U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S10a8491c64b64ba28909b4bea95e6d0cb.jpg"], "why": "1,000+ sold on AliExpress with 97% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4kxTJvSmlKp3QDYsn9FtmF1VFn1R6rl6Ysm8P6Jbdmt5UEoJdsX6CJ7DS1mZdKvPj9Adzb5QwRJGTQ1GQQYogPA2VLhLfilBfEW1c7RvFZ2GqNlPpWvgTttMMAOYYLvCsFmptxedLjrMfSJE0wKEB1Wp7D4Zdk1G3DgbrEKFJ8nFn33bhRMw5fJ6OzY1ubgHlQKKSpJlwUScgd9JNxbfkF5JGujSXC4VRFuu6rdZMtvp997IWtWCoDaFzdMtKioDt52yN22LN2c2nM4DErpOEdsyUpc2EW9MJ71ojh4mxO8LrpYcVKVISvnkfBZeXkH5tmxA2stw1MzRhetAk8iym784xtvlFZH53SdHCQgJPz56wkUHkOkLO5HnfEH2xx0i9su8ggO5uCEbZ01HWTXvHnvFWVLMyyv1qidlZ4HcEAjf1kQGhTrXNBzyfzsCZKaEPGOR9xyWYMb54TOk9L5AqXrcHxQUwEjLTv9CPdemzKnEW5lTUkeNmQSyrvuAbmeJLtjBvMOrYpLvGHHrhS8AYoIOBSP1utPmWkt8hxZKn2XOU9bEm0UIYv8JqUeVxNFcI9Nbb1CLRkMIXsm0UXVLthftMa09IBPbGzT8WVbZWOJ01RXF5NI2a9WFWJIyoyhLYKAnK3QauOAH37bHWj2sHtQJ9hghEc5aINLELlV4Gr5pJ969cemxwQfncpuR37LBEgorfxd5Ldsko9", "price": "Rs 29,397"}}},
  {"id": "ali-1005012471192217", "addedOrder": 160, "category": "computers-accessories", "name": "HANLINYUE Free2 Mini Bluetooth Keyboard Page Flipper Supports Android System E-book Reader…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S3affb74fe5b042c593189786273d9976A.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S3affb74fe5b042c593189786273d9976A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S59d6298398a64c30b77a4c1dd0cab43fa.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6124195d271b432fbfc2cd4e0674da1bE.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9dc92fa51425467586149c7839745f0dP.jpg"], "why": "1,000+ sold on AliExpress with 97% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4kxZRKnon93Rrc81uwXli6Y8udQRqAZT59FJkyIbWmWu3yCNQAMUhUUnJkPnsAisvYIPfe9CJytOFlJo2omr0p5IxZ3Sqpe6l2xKPBWpDrJWgsSnQkoYZuBwyEOg8iA0YWnbbvYuKIzObsEcNeg9rzzRBAalvgiRBTgO587l330gs6cENyRfhuIXQSXakTqIcZO2FwnkAWvz8IQxC3hpWGb04n5dD8y1yj7nYb2A3cOTK8tEX7QYaywvpSUhosKy3YS7LC4IUq7niqsmV14rmJYail7j5MLOZR9S0AaOXLANDl1wne5JR1eligHJ3UPNanIdUOxQCf5hb1qeo6yPLfIG9vcU7kr0PVFjrR2ROwAJyESn1nEy2GsET2V9TvNPkVIXa500CWPc5C2rswavemk8bLG97pZtxxgYnG5ykRidar1QMW9qyxSb1T0xX81L9DlDoTZNjWvl0WYOyYIoeSXbxXEzlloJdWcHFn9mSz18fvgDrYCQiExrXDHGB6xPp2KCH1LYuV4VumPwMFyqA8pzhgE5HMy6yuOFbqgLyYVMwQiln11zkAzyWfkOkRbiomGRilAxMIbMBvsqKTvyli93QpQZBwlZh2PYqp9pQSA2DQfTdLHSfCuCeClMj3X1QcI4Cnn3y87ZMJ6RclBXUe5liU9DK7Q0QRWsKvwRrrRH0BZDbnUey9UUrEvakz0KoUBCcNK8OMP2yf", "price": "Rs 4,714"}}},
  {"id": "ali-1005007957947739", "addedOrder": 161, "category": "health-fitness", "name": "Unlock Your Fitness Potential With Resistance Bands: Strength Training, Body Building, Working…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/Seb9b2c86c04d456c9ae7d22baee2ce1bF.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/Seb9b2c86c04d456c9ae7d22baee2ce1bF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S38920be94a0841d7a8e3afeff5fb6deao.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3cd4ec69a715449c8228f3d31ce00df7u.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Safed45ea48ca47f7bf00a39c4b7836e0V.jpg"], "why": "1,000+ sold on AliExpress with 95% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4op0iaj7rbH2ezZujljvwOumbq1OYKMSCu5JDptCyS5LiytxUNXwka3DOYVOpgz1dwsDNDU3Gs4V2cfiVuUVUGkW7PTDui6NwP6GqvbSw92m07tYJog9D2cwpFmx4sdAlsOIze8amUQLxGFwI4jn6zubjy3MkYjkBwH7gZ8vRUZv8CgMEdx7C3TXP9dMZcfnSIlZAaJ23Y6CQ4QacRuiHJmaDKdnoNtCzGBgoEhFTUR8D9YeGsk2CAReLLapNKujzxTM4Yml8stboOpjVbm6lNFOjAJbECFWxo8XgEDd2Vpmlk5Ih1Ey2vNE2Hi8FGSvVMpRxfUgLK5nRqiPsaCwWm3P3OeQLc02aOqNJmVqJzo38ud9pyMJIBwV508pyj0pCzTPoSKHyA8hu1fHI1i8eLICHIUwe77fHlH0Nx1ejEHnXvANB2VmjSKQQmJONUyBvu8BtmcaVk3vqutih8uoWQICH2o4rz4yPBFbiu1e47FuJt3n5063FAbr6awWqCry8kDJwq3jM1OBuAyHttkx9ElTDiLJEuL5sIHK8LMblEDbEymkAR7dAUjnvF7RvLCwAFBYwMiUQ4i7pIVw41hbb4WPo5zytBZx3LIOq9E2gEC6VHVf0WQMV47mqm5Pph1bdfhysLpcDhSyFfgtYsmUAVlBTUCOtc4I5wcmP5DonZGUngx2BlvlOHK7U9ECPQC6dlk7nXQ014cgXF", "price": "Rs 896"}}},
  {"id": "ali-1005007043647896", "addedOrder": 162, "category": "electronics", "name": "LIGE Waterproof Women Smart Band Watch Real-time Weather Forecast Men Watches Sports Ladies…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S5c3d1f3705884714a97f8da622f84e1bT.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S5c3d1f3705884714a97f8da622f84e1bT.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S057e172e7942466e989982551ce0f6005.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc483d5a50cde41bfb81edb755a4fda6cF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2059afd962044ddc96f447b190d05f15Z.jpg"], "why": "1,900+ sold on AliExpress with 91% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4FmKVwZ3sWTyt3sl4UqTk8tDvpB4VuFEKUeqiyo5SdWkRd5EqsyyB030UdUjqqEyPEd5eVSEMbwD95o6v6eNGG3o4VCuoZutsLytExgN6NLmuGkGl9Yt6Re1j7wSBvPRjI1ZOIlD5RfYrgNJLMXhwY5ZTWH3j8e6nW0pjP6n1HQ3S3bXDGFgKczCz5F1wPKOb7QwGNJwh0CvaH6nZrMjTQPNPdewTXBGmdd5IMEVlH3vbXamlEl7Leg3OJIlFKxpCCA0gDBvDfhTwQZpGK9d69m3rwbguNwmy30PxOrUcEdK2rqAYqjN8wV3ubTMqvzdNmwsQGsST2dz3x9TOjHULqToX3eoTh4SLmteNU4YKJRwIikn2vfuXrpZqwDdWRctYKXvTDtgQMQc734WIb0M0mVJvTLdcmAhkstSuLmRyOLlMQ1SOWzTNHkd5mqgIYAZmtzmSPia421AWN3Wz74vlKliR4wkA57CB1aNlyebftkzynOdrHlZnomKettd0l0vPKnJBFaezlo7POdfHjGtvvq9hettwdEvmhokltrFsl5KJ7tzgk6mU8lAe4k2ZEr9CATvTzp9YkAfashZEhweSQhkwhSfbw7OoXVtYcwBJ36BNgGeevzqpLjs8ILRTrAIFC6q0vowC2KXhj7uzEjBhktp9LV0KaEJIaIY6g2afSDLIiNRqrrnKXzhlnRKSVjGEfTdioKdKHyeeF", "price": "Rs 5,975"}}},
  {"id": "ali-1005009960201825", "addedOrder": 163, "category": "tools-home-improvement", "name": "Professional Manicure Pedicure Kit Cordless Electric Nail File Set Nail Drill Machine Hand…", "desc": "Popular AliExpress listing, shown with the price in PKR at the time we checked. Sold by a third-party seller.", "icon": "🛍️", "badge": "", "rating": null, "image": "https://ae-pic-a1.aliexpress-media.com/kf/S412f3c9944bc48f78904bd43d6757c829.jpg", "gallery": ["https://ae-pic-a1.aliexpress-media.com/kf/S412f3c9944bc48f78904bd43d6757c829.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0b6911b3b81c4d11a2bc4431f0f549a7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se41c97a4640a49879b8fa41f6bcacd11f.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se763755eff004344984d48d7e690cf4ci.jpg"], "why": "1,600+ sold on AliExpress with 98% positive feedback. Sold by a third-party seller (no brand); delivery takes longer than local stores.", "stores": {"daraz": {"available": false}, "amazon": {"available": false}, "aliexpress": {"available": true, "verified": true, "url": "https://s.click.aliexpress.com/s/pyFri10M6ltAv61YZY9TfrxiDaaFXRreuZWJMeLtD8jig1wPxn51K2eq59ds8iT5Wl5L3w5KJyrl7SjOO3B0oJ0Xjwnc7n8AQA7gf5qnT4sCyU05LNms9JvyWQNFHNKtzBcoBpSguMg3UBR1FOODkmGTloXosMhqhnKgzzuJPYPxewVvzupiAiKSJA5SK0iQRxmaQ7UPG0AP2HC7uLitVpvXIfjMl7RnsnN7B8FrGfP9TWP7emQeaXV90Bp9fLEiLeKHsRf9R2jgKD32Axm5na4bRJdkhGVyv3GcDgMjmYrrZWinWctR9gnPwA4kyL1ItSxDU4dJFquuXuPA2RaltMybeQHR2SeJ5R5CgfhANXLCtXaHdQrUkfMNWeTd8JrzBokf4Vq81ANhzACE9tx2YrvHj2KDwZcZCgGzCfYcXYZt7bUG0VWM2nTj8ATiya88U2rIpmiyHusuJlRoxo6OqP6sXE8irCX32DUdf90dyvB3IcaVXiX2HnIaQZdbDI8AMe7x5sfqsf3cHykKKlYaNeRKONDSKe0T28crKhiczXlBLdLm06S9BDHQUm5R6ugia8aiJfamF2Kbvaxl5batodR7obsXWKVvfpnrsXBdhxdkvNvNnagQNkAl9vwKiZMM6nly76KYb0A5R8B5Bid5rgwK5781v7qwaJ8ASbGmnLNpZbGOYPuKjGKpq5B9b13uxQUAmymSZU5LZwpaP5HkLYMyaIAojICsVmxIhA8nwbKNFQzpj0EVuLcArKaXvhqVYXAR9eeupgdqhqpLPODvN2zorxE8KxzAyk35B0j4iEAP9LrPWuh9y6iPpYDKatlCazDL0AQojXM01nlQqwwS8pYTgBueFp8hD8B3NrcpdbIh1pSRrfk6xNj6qCZPXDW3WFN2JucPK3SAUSlPMLQ6l5FUMNuSPEBn6nA0J8f5plibqc5EgZzwn5FQuOvtdWqc0dsnZ2rQBBoYuNNBF95UlHws8HS7VZLukoIVGMJL9zNSiYPZqC1W89rSWJLU2UrD4wO0bfnH", "price": "Rs 2,687"}}},
  /* AUTO-ADD-END (do not remove this line: the AliExpress script adds new products above it) */
];

/* =========================================================
   PRODUCT DETAIL CONTENT — original, honest, hand-written
========================================================= */
const PRODUCT_DETAILS = {
  "ali-led-motion-sensor-light": {
    availability:"Ships internationally from AliExpress",
    features:[
      "Built-in motion sensor that switches the light on when you come close (listing shows a 120° sensing area)",
      "Rechargeable through a USB-C port, so there are no wires or batteries to swap",
      "Slim bar design that sticks on with adhesive or a magnetic strip — handy for cabinets, wardrobes, stairs and desks",
      "Shown in both white and warm-white light options on the listing"
    ],
    specs:{ "Charging":"USB-C rechargeable", "Sensor":"Motion sensing", "Light colors":"White / warm white (per listing)", "Seller":"Third-party seller, no brand" },
    pros:[
      "Very popular on AliExpress — 5,000+ sold with a 4.5★ rating at the time we checked",
      "No wiring needed; stick it up and charge it now and then",
      "Low price for a motion-activated light"
    ],
    cons:[
      "Sold by a third-party seller with no known brand, so quality can vary between batches",
      "AliExpress delivery usually takes longer than local stores",
      "Battery size and run-time are not clearly stated on the listing"
    ],
    whoFor:"Anyone who wants a cheap, no-fuss light for a wardrobe, kitchen cabinet or staircase.",
    whoAvoid:"People who need a branded product with a warranty, or who need it quickly.",
    verdict:"A well-liked budget gadget for dark corners. Check the current price and delivery date on AliExpress before ordering."
  },
  "ali-rotating-faucet-aerator": {
    availability:"Ships internationally from AliExpress",
    features:[
      "Swivel head that rotates 360° and tilts about 80°, so water can reach sink corners (as shown on the listing)",
      "Two water modes: a soft bubble stream and a stronger spray",
      "Anti-splash aerator nozzle for a kitchen or bathroom tap",
      "Black finish shown in the listing photos"
    ],
    specs:{ "Rotation":"360° swivel, about 80° tilt", "Modes":"2 (bubble / spray)", "Use":"Kitchen or bathroom tap", "Seller":"Third-party seller, no brand" },
    pros:[
      "Makes rinsing dishes and cleaning the sink easier",
      "Two flow modes in one small attachment",
      "Very low price"
    ],
    cons:[
      "Not a branded product — we could not verify long-term durability",
      "You must check that the thread size fits your tap before ordering",
      "We did not see rating or sales figures for this listing, so treat it as a low-risk, low-cost try-out"
    ],
    whoFor:"Someone with a standard tap who wants a more flexible spray without replacing the whole faucet.",
    whoAvoid:"Anyone with an unusual tap thread or who wants a proven, branded fitting.",
    verdict:"A cheap, practical upgrade if the size fits your tap. Compare the size info on AliExpress before buying."
  },
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

  const altSameStore = (storeType !== "aliexpress" && product.stores.aliexpress?.available) ? null : PRODUCTS.find(p => p.id !== product.id && p.category === product.category && p.stores[storeType]?.available);
  if (altSameStore) return { product:altSameStore, store:altSameStore.stores[storeType], storeType, kind:"alternate" };

  if (storeType !== "aliexpress" && product.stores.aliexpress?.available)
    return { product, store:product.stores.aliexpress, storeType:"aliexpress", kind:"alternate-store" };

  // Last resort: the exact product IS sold somewhere, just not through this visitor's usual
  // store. Show it honestly labeled as international, rather than a dead "unavailable" end.
  const anyStoreEntry = Object.entries(product.stores).find(([, s]) => s && s.available);
  if (anyStoreEntry) return { product, store:anyStoreEntry[1], storeType:anyStoreEntry[0], kind:(anyStoreEntry[0] === "daraz" ? "pk-only" : "international") };


  return null;
}

/* Daraz fix: har Daraz product ka asal daraz.pk page khule.
   DCM ke deep links milen to unhein yahan product id ke saath daalna. */
const DARAZ_DEEP = {
  // "earbuds-pro": "DCM ka deep link",
};
PRODUCTS.forEach(p => {
  const d = p.stores && p.stores.daraz;
  if (!d || !d.available) return;
  if (DARAZ_DEEP[p.id]) { d.url = DARAZ_DEEP[p.id]; return; }
});
