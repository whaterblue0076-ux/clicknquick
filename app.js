/* ============ HELPERS ============ */
function starString(r){ const f=Math.round(r); return '★'.repeat(f)+'☆'.repeat(5-f); }
function catLabel(c){ return CATEGORIES.find(x => x.slug === c)?.name || c; }
function priceNumber(str){
  if (!str) return NaN;
  const m = str.replace(/,/g, "").match(/[\d.]+/);
  return m ? parseFloat(m[0]) : NaN;
}
function discountPercent(price, oldPrice){
  const p = priceNumber(price), o = priceNumber(oldPrice);
  if (isNaN(p) || isNaN(o) || o <= p) return null;
  return Math.round(((o - p) / o) * 100);
}
/** Keeps pinned/featured products first, without disturbing the relative order of everything else. */
function sortPinnedFirst(list){
  const pinned = list.filter(p => p.pinned);
  const rest = list.filter(p => !p.pinned);
  return [...pinned, ...rest];
}

/* ============ WISHLIST (saved locally in the visitor's browser) ============ */
function getWishlist(){
  try { return JSON.parse(localStorage.getItem('cq_wishlist') || '[]'); } catch(e){ return []; }
}
function isWishlisted(id){ return getWishlist().includes(id); }
function toggleWishlist(id){
  let list = getWishlist();
  list = list.includes(id) ? list.filter(x => x !== id) : [...list, id];
  try { localStorage.setItem('cq_wishlist', JSON.stringify(list)); } catch(e){}
  document.querySelectorAll(`[data-wish-id="${id}"]`).forEach(btn => btn.classList.toggle('active', list.includes(id)));
}
function wireWishButtons(container){
  container.querySelectorAll('[data-wish-id]').forEach(btn =>
    btn.addEventListener('click', (e) => { e.preventDefault(); toggleWishlist(btn.dataset.wishId); })
  );
}

/* ============ PRODUCT CARD ============ */
/** The product image/title link to that product's own page (product-<id>.html).
    The separate "View Deal" button is untouched and always goes straight to the real affiliate link. */
function buildCard(offerInfo){
  const shown = offerInfo.product;
  const store = offerInfo.store;
  const fallbackLabel = offerInfo.kind === "alternate" ? "Similar pick" : offerInfo.kind === "alternate-store" ? "Via AliExpress" : offerInfo.kind === "international" ? "Ships Internationally" : "";
  const storeLabel = offerInfo.storeType === "daraz" ? "Daraz" : offerInfo.storeType === "amazon" ? (AMAZON_MARKETS[window.CQ_COUNTRY]?.store || "Amazon") : "AliExpress";
  const hasVerifiedPrice = store.verified !== false && !!store.price;
  const discount = hasVerifiedPrice && store.oldPrice ? discountPercent(store.price, store.oldPrice) : null;
  const wished = isWishlisted(shown.id);
  const href = `product-${shown.id}.html`;

  return `
    <div class="card${shown.pinned ? ' pinned' : ''}">
      <a href="${href}" class="card-media" style="cursor:pointer;">
        ${shown.badge ? `<span class="card-badge">${shown.badge}</span>` : ""}
        ${fallbackLabel ? `<span class="card-fallback">${fallbackLabel}</span>` : ""}
        ${shown.image ? `<img src="${shown.image}" alt="${shown.name}" loading="lazy">` : `<span>${shown.icon}</span>`}
      </a>
      <button class="wish-btn ${wished ? 'active' : ''}" data-wish-id="${shown.id}" aria-label="Save to wishlist" title="Save to wishlist">♥</button>
      <div class="card-body">
        <span class="card-cat">${catLabel(shown.category)}${shown.pinned ? ' · <span style="color:#2b6cff;font-weight:700;">Featured Pick</span>' : ''}</span>
        <a href="${href}" style="color:inherit;"><h3>${shown.name}</h3></a>
        <p class="desc">${shown.desc}</p>
        <p class="card-why"><b>Why we recommend it:</b> ${shown.why || 'A solid, well-reviewed pick in this category.'}</p>
        <span class="stars">${starString(shown.rating)} <span style="color:var(--muted)">(${shown.rating})</span></span>
        ${hasVerifiedPrice
          ? `<div class="price-line"><span class="now">${store.price}</span>${store.oldPrice ? `<span class="old">${store.oldPrice}</span>` : ''}${discount ? `<span class="discount-badge">-${discount}%</span>` : ''}</div>`
          : `<p class="price-unverified">Price shown on ${storeLabel} — check current price before buying.</p>`}
        ${offerInfo.kind === "international" ? `<p class="card-note" style="color:var(--gold-deep);">Not sold locally — ships internationally via ${storeLabel}. International shipping/import charges may apply — check before buying.</p>` : ''}
        <span class="store-tag">via ${storeLabel}</span>
        <a class="card-cta" href="${store.url}" target="_blank" rel="nofollow sponsored noopener">${shown.pinned ? 'View Deal & More Options →' : 'View Deal →'}</a>
      </div>
    </div>`;
}
function buildUnavailableCard(p){
  return `
    <div class="card">
      <div class="card-media"><span>${p.icon}</span></div>
      <div class="card-body">
        <span class="card-cat">${catLabel(p.category)}</span>
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <p class="card-note">Not available for your region yet</p>
        <div class="card-cta unavailable">Coming soon to your region</div>
      </div>
    </div>`;
}

/* ============ HOMEPAGE: Shop by Category cards ============ */
/** Uses a real product photo (our own verified image) as the category thumbnail when one exists, instead of a stock photo. */
function getCategoryThumb(slug){
  const rep = PRODUCTS.filter(p => p.category === slug && p.image).sort((a, b) => (a.addedOrder || 0) - (b.addedOrder || 0))[0];
  return rep ? rep.image : null;
}
function renderCategoryCards(){
  const wrap = document.getElementById('categoryGrid');
  if(!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => {
    const thumb = getCategoryThumb(c.slug);
    return `
    <a class="cat-card" href="category-${c.slug}.html">
      ${thumb ? `<span class="cat-thumb"><img src="${thumb}" alt="${c.name}" loading="lazy"></span>` : `<span class="cat-icon">${c.icon}</span>`}
      <span class="cat-name">${c.name}</span>
      <span class="cat-desc">${c.desc}</span>
    </a>`;
  }).join('');
}

/* ============ HOMEPAGE: curated rows (Trending / Popular / Best Deals / Recently Added) ============ */
function renderRow(containerId, products){
  const el = document.getElementById(containerId);
  if(!el) return;
  const offers = products.map(p => resolveOffer(p, window.CQ_STORE_TYPE)).filter(Boolean);
  el.innerHTML = offers.length ? offers.map(buildCard).join('') : `<div class="empty-state">Nothing here yet — check back soon!</div>`;
  wireWishButtons(el);
}
function renderCuratedRows(){
  renderRow('trendingRow', PRODUCTS.filter(p => p.badge === "Trending"));
  renderRow('popularRow', PRODUCTS.filter(p => p.rating >= 4.5));
  renderRow('bestDealsRow', PRODUCTS.filter(p => {
    const offer = resolveOffer(p, window.CQ_STORE_TYPE);
    return offer && offer.store.verified !== false && offer.store.oldPrice;
  }));
  renderRow('recentRow', PRODUCTS.slice(0, 4));
}

/* ============ HOMEPAGE: "Browse All Deals" grid + filter pills ============ */
function renderProducts(filter){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  let list;
  if (filter === 'all') list = PRODUCTS;
  else if (filter === 'best-deals') list = PRODUCTS.filter(p => { const o = resolveOffer(p, window.CQ_STORE_TYPE); return o && o.store.verified !== false && o.store.oldPrice; });
  else list = PRODUCTS.filter(p => p.category === filter);
  list = sortPinnedFirst(list);
  grid.innerHTML = '';
  if(list.length === 0){ grid.innerHTML = `<div class="empty-state">No products in this category yet — check back soon!</div>`; return; }
  list.forEach(p => {
    const offer = resolveOffer(p, window.CQ_STORE_TYPE);
    grid.insertAdjacentHTML('beforeend', offer ? buildCard(offer) : buildUnavailableCard(p));
  });
  wireWishButtons(grid);
}
function initFilterPills(){
  const pills = document.querySelectorAll('.pill');
  if(!pills.length) return;
  pills.forEach(pill => pill.addEventListener('click', () => {
    pills.forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');
    renderProducts(pill.dataset.filter);
  }));
}

/* ============ CATEGORY PAGE (category-<slug>.html) ============ */
let catState = { slug: "", search: "", sort: "popular", dealsOnly: false, pageSize: 8 };

function getCategoryProducts(slug){
  if (slug === "best-deals") {
    return PRODUCTS.filter(p => { const o = resolveOffer(p, window.CQ_STORE_TYPE); return o && o.store.verified !== false && o.store.oldPrice; });
  }
  return PRODUCTS.filter(p => p.category === slug);
}

function initCategoryPage(){
  const slug = window.CQ_CATEGORY_SLUG;
  if (!slug) return;
  catState = { slug, search: "", sort: "popular", dealsOnly: false, pageSize: 8 };
  const cat = CATEGORIES.find(c => c.slug === slug) || { name: slug, icon: "🛍️" };
  document.getElementById("catHeroIcon").textContent = cat.icon;
  document.getElementById("catHeroTitle").textContent = cat.name;
  document.getElementById("catIntro").textContent = CATEGORY_INTRO[slug] || `Browse our ${cat.name} picks.`;

  const related = CATEGORIES.filter(c => c.slug !== slug).slice(0, 4);
  document.getElementById("catRelated").innerHTML = related.map(c => {
    const thumb = getCategoryThumb(c.slug);
    return `
    <a class="cat-card" href="category-${c.slug}.html">
      ${thumb ? `<span class="cat-thumb"><img src="${thumb}" alt="${c.name}" loading="lazy"></span>` : `<span class="cat-icon">${c.icon}</span>`}
      <span class="cat-name">${c.name}</span>
      <span class="cat-desc">${c.desc}</span>
    </a>`;
  }).join("");

  document.getElementById("catSearch").addEventListener("input", (e) => { catState.search = e.target.value; catState.pageSize = 8; renderCategoryGrid(); });
  document.getElementById("catSort").addEventListener("change", (e) => { catState.sort = e.target.value; renderCategoryGrid(); });
  document.getElementById("catDealsOnly").addEventListener("change", (e) => { catState.dealsOnly = e.target.checked; catState.pageSize = 8; renderCategoryGrid(); });
  document.getElementById("catLoadMore").addEventListener("click", () => { catState.pageSize += 8; renderCategoryGrid(); });

  renderCategoryGrid();
}

function renderCategoryGrid(){
  const grid = document.getElementById("catProductGrid");
  if(!grid) return;
  const loadMoreBtn = document.getElementById("catLoadMore");

  let list = getCategoryProducts(catState.slug);

  if (catState.search.trim()) {
    const q = catState.search.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }

  const offersByProduct = new Map();
  list.forEach(p => offersByProduct.set(p.id, resolveOffer(p, window.CQ_STORE_TYPE)));

  if (catState.dealsOnly) {
    list = list.filter(p => { const o = offersByProduct.get(p.id); return o && o.store.verified !== false && o.store.oldPrice; });
  }

  list = list.slice().sort((a, b) => {
    if (catState.sort === "newest") return (b.addedOrder || 0) - (a.addedOrder || 0);
    if (catState.sort === "price-low" || catState.sort === "price-high") {
      const pa = priceNumber(offersByProduct.get(a.id)?.store.price);
      const pb = priceNumber(offersByProduct.get(b.id)?.store.price);
      if (isNaN(pa)) return 1;
      if (isNaN(pb)) return -1;
      return catState.sort === "price-low" ? pa - pb : pb - pa;
    }
    return (b.rating || 0) - (a.rating || 0); // popular (default)
  });
  list = sortPinnedFirst(list);

  grid.innerHTML = "";
  if (list.length === 0){
    grid.innerHTML = `<div class="empty-state">No products match here yet — check back soon, or try a different search/filter.</div>`;
    loadMoreBtn.style.display = "none";
    return;
  }

  const visible = list.slice(0, catState.pageSize);
  visible.forEach(p => {
    const offer = offersByProduct.get(p.id);
    grid.insertAdjacentHTML("beforeend", offer ? buildCard(offer) : buildUnavailableCard(p));
  });

  loadMoreBtn.style.display = list.length > catState.pageSize ? "inline-flex" : "none";
  wireWishButtons(grid);
}

/* ============ PRODUCT DETAIL PAGE (product-<id>.html) ============ */
function initProductPage(){
  const id = window.CQ_PRODUCT_ID;
  if (!id) return;
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const offer = resolveOffer(product, window.CQ_STORE_TYPE);
  const shown = offer ? offer.product : product;
  const store = offer ? offer.store : null;
  const details = PRODUCT_DETAILS[shown.id];
  const storeLabel = offer ? (offer.storeType === "daraz" ? "Daraz" : offer.storeType === "amazon" ? (AMAZON_MARKETS[window.CQ_COUNTRY]?.store || "Amazon") : "AliExpress") : "";

  document.getElementById("pdCategory").innerHTML = `<a href="category-${shown.category}.html" style="color:inherit;">${catLabel(shown.category)}</a>`;
  document.getElementById("pdTitle").textContent = shown.name;
  document.getElementById("pdStars").innerHTML = `${starString(shown.rating)} <span style="color:var(--muted)">(${shown.rating})</span>`;
  const images = (shown.gallery && shown.gallery.length) ? shown.gallery : (shown.image ? [shown.image] : []);
  document.getElementById("pdMainImage").innerHTML = images.length ? `<img src="${images[0]}" alt="${shown.name}" id="pdMainImg">` : `<span>${shown.icon}</span>`;
  document.getElementById("pdThumbs").innerHTML = images.map((src, i) => `<img src="${src}" class="${i === 0 ? 'active' : ''}" data-idx="${i}" alt="${shown.name} thumbnail ${i + 1}">`).join('');
  document.getElementById("pdThumbs").querySelectorAll('img').forEach(thumb => thumb.addEventListener('click', () => {
    document.getElementById("pdThumbs").querySelectorAll('img').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    document.getElementById("pdMainImg").src = images[thumb.dataset.idx];
  }));

  const hasVerifiedPrice = store && store.verified !== false && store.price;
  document.getElementById("pdStoreAvail").innerHTML = store
    ? `Sold via <b>${storeLabel}</b>${details?.availability ? ` — ${details.availability}` : ""}${offer?.kind === "international" ? ` <span style="color:var(--gold-deep);font-weight:700;">— not sold locally, ships internationally</span>` : ""}`
    : `Not currently available in your region.`;
  document.getElementById("pdPriceBlock").innerHTML = (hasVerifiedPrice
    ? `<div class="price-line" style="margin:10px 0;"><span class="now" style="font-size:1.4rem;">${store.price}</span>${store.oldPrice ? `<span class="old">${store.oldPrice}</span>` : ''}${discountPercent(store.price, store.oldPrice) ? `<span class="discount-badge">-${discountPercent(store.price, store.oldPrice)}%</span>` : ''}</div>`
    : `<p class="price-unverified" style="margin:10px 0;">Price not independently verified — check the current price on ${storeLabel || "the marketplace"} before buying.</p>`)
    + (offer?.kind === "international" ? `<p class="price-unverified">International shipping/import charges may apply — check the total cost on ${storeLabel} before buying.</p>` : '');
  document.getElementById("pdSummary").textContent = shown.desc;
  document.getElementById("pdWhy").innerHTML = `<b>Why we recommend it:</b> ${shown.why || 'A solid, well-reviewed pick in this category.'}`;

  const cta = document.getElementById("pdCta");
  if (store) { cta.href = store.url; cta.style.display = "flex"; cta.textContent = shown.pinned ? "View Deal & More Options →" : "View Deal →"; }
  else { cta.style.display = "none"; }

  const sec = document.getElementById("pdDetailSections");
  if (details) {
    sec.innerHTML = `
      <div class="container">
        ${details.features ? `<div class="pd-block"><h2>Key Features</h2><ul>${details.features.map(f => `<li>${f}</li>`).join('')}</ul></div>` : ''}
        ${details.specs && Object.keys(details.specs).length ? `<div class="pd-block"><h2>Specifications</h2><table class="pd-specs">${Object.entries(details.specs).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table></div>` : ''}
        ${details.pros ? `<div class="pd-block"><h2>Pros</h2><ul class="pros">${details.pros.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${details.cons ? `<div class="pd-block"><h2>Things to Consider</h2><ul class="cons">${details.cons.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${details.whoFor ? `<div class="pd-block"><h2>Who This Product Is For</h2><p style="color:var(--muted);font-size:.9rem;line-height:1.7;">${details.whoFor}</p></div>` : ''}
        ${details.whoAvoid ? `<div class="pd-block"><h2>Who Should Avoid It</h2><p style="color:var(--muted);font-size:.9rem;line-height:1.7;">${details.whoAvoid}</p></div>` : ''}
        ${details.verdict ? `<div class="pd-block"><h2>Our Verdict</h2><p style="color:var(--ink);font-size:.94rem;line-height:1.7;">${details.verdict}</p></div>` : ''}
      </div>`;
  } else {
    sec.innerHTML = `<div class="container"><div class="pd-note-box">We're still compiling a fully verified review for this product — real features, specs, pros/cons and a verdict will appear here once we have genuine information to share, rather than guessed details. The price and link above (if shown) are accurate to the best of our current information.</div></div>`;
  }

  const related = PRODUCTS.filter(p => p.id !== shown.id && p.category === shown.category).slice(0, 4);
  const relatedGrid = document.getElementById("pdRelated");
  relatedGrid.innerHTML = related.length
    ? related.map(p => { const o = resolveOffer(p, window.CQ_STORE_TYPE); return o ? buildCard(o) : buildUnavailableCard(p); }).join('')
    : `<div class="empty-state">No other products in this category yet.</div>`;
  wireWishButtons(relatedGrid);

  const similar = PRODUCTS.filter(p => p.id !== shown.id && p.category !== shown.category && p.rating >= 4.4).slice(0, 4);
  const similarGrid = document.getElementById("pdSimilar");
  similarGrid.innerHTML = similar.length
    ? similar.map(p => { const o = resolveOffer(p, window.CQ_STORE_TYPE); return o ? buildCard(o) : buildUnavailableCard(p); }).join('')
    : `<div class="empty-state">Nothing else to show yet.</div>`;
  wireWishButtons(similarGrid);

  document.getElementById("pdBackLink").href = `category-${shown.category}.html`;
}

/* ============ GEO DETECTION (runs on every page) ============ */
window.CQ_COUNTRY = "PK";
window.CQ_STORE_TYPE = "daraz";

async function detectCountry(){
  try{
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeout);
    const data = await res.json();
    if (data && data.country_code) window.CQ_COUNTRY = data.country_code;
  }catch(e){ /* detection failed — keep default */ }
  window.CQ_STORE_TYPE = resolveStoreType(window.CQ_COUNTRY);
  updateGeoBanner();
  refreshForGeo();
}
function updateGeoBanner(){
  const el = document.getElementById('geoBanner');
  if(!el) return;
  const type = window.CQ_STORE_TYPE;
  let flag="🌍", label="your region", store="AliExpress";
  if (type === "daraz"){ flag="🇵🇰"; label="Pakistan"; store="Daraz"; }
  else if (type === "amazon"){ const m = AMAZON_MARKETS[window.CQ_COUNTRY] || {label:"your region",store:"Amazon"}; flag="🛒"; label=m.label; store=m.store; }
  el.innerHTML = `${flag} Showing deals for <b>${label}</b> — routed through <b>${store}</b>`;
}
/** Re-renders whatever this particular page has, now that we know the visitor's real country. */
function refreshForGeo(){
  if (document.getElementById('productGrid')) {
    const activePill = document.querySelector('.pill.active');
    renderProducts(activePill ? activePill.dataset.filter : 'all');
  }
  if (document.getElementById('trendingRow')) renderCuratedRows();
  if (document.getElementById('catProductGrid')) renderCategoryGrid();
  if (document.getElementById('pdMainImage')) initProductPage();
}

/* ============ MOBILE NAV (every page) ============ */
function initMobileNav(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (!navToggle || !mainNav) return;
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
}

/* ============ CONTACT FORM (contact.html only) ============ */
function initContactForm(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent('Message from ' + name + ' via Click & Quick');
    const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
    window.location.href = `mailto:hello@clickandquick.com?subject=${subject}&body=${body}`;
  });
}

/* ============ INIT (runs on every page) ============ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initContactForm();
  renderCategoryCards();   // homepage "Shop by Category" (no-op if not present)
  initFilterPills();       // homepage filter pills (no-op if not present)
  initCategoryPage();      // category pages (no-op if window.CQ_CATEGORY_SLUG not set)
  initProductPage();       // product pages (no-op if window.CQ_PRODUCT_ID not set)
  detectCountry();
});
