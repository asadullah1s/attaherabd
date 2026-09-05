/* =========================
   PRODUCT DATA (with 4 images each)
   ========================= */
const products = [{
    id: 1,
    title: "Unstitched Embroidered Lawn 3 Piece Code: U4672SU-3PC-329",
    category: "Fashion",
    price: "$459",
    images: [
        "images/products/product-1.jpeg",
        "images/products/product-2.jpeg",
        "images/products/product-3.jpeg",
        "images/products/product-4.jpeg",
        "images/products/product-5.jpeg",
        "images/products/product-6.jpeg"
    ],
    description: "Shirt
* Dyed Lawn Shirt – 3m
* Embroidered Front Center – 1pc
* Embroidered Side Panels – 2pc
* Embroidered Sleeves – 1pc
* Fabric: Lawn
* Colour: Mint

Dupatta
* Embroidered Chiffon Dupatta – 2.5m
* Fabric: Chiffon
* Colour: Mint

Trouser
* Embroidered Cambric Trouser – 1.8m
* Fabric: Cambric
* Colour: Mint

Product Highlights
A beautifully embroidered lawn outfit crafted on breathable fabric, offering comfort with an elegant finish. Perfect for summer wear, daytime events, and festive occasions where a fresh look stands out.

Size: Standard (Suitable up to XL)

Care Instructions:
Wash light and bright colors separately.
Do not use bleach.
Avoid twisting or squeezing embellished fabric.
Iron on low heat (avoid direct heat on embroidery).
Dry in shade for best results.

Disclaimer:
Designs shown are for shoot/styling purposes. Actual product color may vary slightly due to lighting and screen settings."
}, {
    id: 2,
    title: "Radiant Rose Serum",
    category: "Beauty",
    price: "$128",
    images: [
        "images/products/product-7.jpeg",
        "images/products/product-8.jpeg",
        "images/products/product-9.jpeg",
        "images/products/product-10.jpeg"
    ],
    description: "24K gold-infused face serum, brightening + firming luxury elixir."
}, {
    id: 3,
    title: "Marble Gold Candle",
    category: "Home Decor",
    price: "$89",
    images: [
        "images/products/product-11.jpeg",
        "images/products/product-12.jpeg",
        "images/products/product-13.jpeg",
        "images/products/product-14.jpeg",
        "images/products/product-15.jpeg"
    ],
    description: "Sandalwood & amber with 24k gold leaf. 60-hour burn time."
}, {
    id: 4,
    title: "Cashmere Wrap Coat",
    category: "Fashion",
    price: "$689",
    images: [
        "images/products/product-16.jpeg",
        "images/products/product-17.jpeg",
        "images/products/product-18.jpeg",
        "images/products/product-19.jpeg",
        "images/products/product-20.jpeg",
        "images/products/product-21.jpeg"
    ],
    description: "Pure Mongolian cashmere, dual-face design, oversized silhouette."
}, {
    id: 5,
    title: "Gold Leaf Highlighter",
    category: "Beauty",
    price: "$49",
    images: [
        "images/products/product-22.jpeg",
        "images/products/product-23.jpeg",
        "images/products/product-24.jpeg",
        "images/products/product-25.jpeg"
    ],
    description: "Luminous glow baked highlighter with reflective pearl pigments."
}, {
    id: 6,
    title: "Geometric Vase Set",
    category: "Home Decor",
    price: "$149",
    images: [
        "images/products/product-26.jpeg",
        "images/products/product-27.jpeg",
        "images/products/product-28.jpeg"
    ],
    description: "Brass & glass, modern sculptural centerpiece."
}, {
    id: 7,
    title: "Velvet Blazer",
    category: "Fashion",
    price: "$329",
    images: [
        "images/products/product-29.jpeg",
        "images/products/product-30.jpeg",
        "images/products/product-31.jpeg",
        "images/products/product-32.jpeg",
        "images/products/product-33.jpeg"
    ],
    description: "Deep burgundy velvet, satin lapels, tailored elegance."
}, {
    id: 8,
    title: "Diamond Infused Moisturizer",
    category: "Beauty",
    price: "$199",
    images: [
        "images/products/product-34.jpeg",
        "images/products/product-35.jpeg",
        "images/products/product-36.jpeg",
        "images/products/product-37.jpeg",
        "images/products/product-38.jpeg"
    ],
    description: "Luxurious peptide cream with crushed diamond dust."
}];

/* =========================
   STATE
   ========================= */
let currentFilter = "all";
let currentSearch = "";

/* =========================
   RENDER PRODUCT CARDS
   ========================= */
function renderProductCards(productsArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (productsArray.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5">No luxury items found</div>`;
        return;
    }
    container.innerHTML = productsArray.map(p => `
        <div class="col-lg-3 col-md-6 col-12 mb-4 product-card-item" data-product-id="${p.id}">
            <div class="product-card h-100">
                <img src="${p.images[0]}" class="card-img-top" alt="${p.title}" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="category-badge">${p.category}</span>
                        <span class="price">${p.price}</span>
                    </div>
                    <h5 class="card-title mt-2 fw-bold">${p.title}</h5>
                    <p class="card-text small text-secondary">${p.description.substring(0,70)}${p.description.length>70?'...':''}</p>
                    <div class="mt-auto d-flex justify-content-between gap-2 p-3">
                        <button class="btn btn-details view-details" data-id="${p.id}" aria-label="View details for ${p.title}">View Details</button>
                        <button class="btn btn-buy-now buy-now-btn" data-id="${p.id}" aria-label="Buy now on WhatsApp">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

/* =========================
   FILTER PRODUCTS
   ========================= */
function filterProducts() {
    let filtered = products.filter(p => {
        const matchCat = currentFilter === "all" || p.category === currentFilter;
        const matchSearch = currentSearch === "" ||
            p.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            p.category.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
    });
    renderProductCards(filtered, "productContainer");
}

/* =========================
   SPECIAL SECTIONS (Top Picks, Trending, Editor's Choice)
   ========================= */
function renderSpecialSections() {
    const topPicks = products.filter(p => [1, 2, 3].includes(p.id));
    const trending = products.filter(p => [4, 5, 6].includes(p.id));
    const editors = products.filter(p => [7, 8].includes(p.id));
    renderProductCards(topPicks, "topPicksContainer");
    renderProductCards(trending, "trendingContainer");
    renderProductCards(editors, "editorsChoiceContainer");
}

/* =========================
   WHATSAPP HELPER
   ========================= */
function getWhatsAppLink(product) {
    const phone = "+8801632787882"; // change to your number
    const message = `Hello Tahira, I'm interested in:\n*${product.title}*\n${product.description}\nPrice: ${product.price}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/* =========================
   FULLSCREEN MODAL WITH 4-IMAGE SLIDER
   ========================= */
const modalEl = document.getElementById("fullscreenModal");
const carouselInner = document.getElementById("modalCarouselInner");
const indicatorsContainer = document.getElementById("modalCarouselIndicators");
let modalCarouselInstance = null;

function openProductModal(productId) {
    const prod = products.find(p => p.id == productId);
    if (!prod) return;

    // Build carousel slides
    let slidesHtml = prod.images.map((img, idx) => `
        <div class="carousel-item ${idx === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" style="height:100%; object-fit:cover;" alt="${prod.title} - image ${idx+1}">
        </div>
    `).join('');

    let indicatorsHtml = prod.images.map((_, idx) => `
        <button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" aria-label="Slide ${idx+1}"></button>
    `).join('');

    carouselInner.innerHTML = slidesHtml;
    indicatorsContainer.innerHTML = indicatorsHtml;

    // Set details
    document.getElementById("modalCategory").innerText = prod.category;
    document.getElementById("modalTitle").innerText = prod.title;
    document.getElementById("modalDesc").innerText = prod.description;
    document.getElementById("modalPrice").innerText = prod.price;

    // Set Buy Now button
    const buyBtn = document.getElementById("modalBuyNowBtn");
    buyBtn.onclick = function() {
        window.open(getWhatsAppLink(prod), '_blank');
    };

    // Show modal
    modalEl.classList.add("active");
    document.body.style.overflow = "hidden";

    // Initialize carousel
    if (modalCarouselInstance) {
        modalCarouselInstance.dispose();
    }
    modalCarouselInstance = new bootstrap.Carousel(document.getElementById('modalCarousel'), {
        interval: 5000,
        pause: 'hover',
        wrap: true
    });

    history.pushState(null, null, `#product-${prod.id}`);
}

function closeModal() {
    modalEl.classList.remove("active");
    document.body.style.overflow = "";
    if (window.location.hash.startsWith("#product-")) {
        history.pushState(null, null, " ");
    }
    if (modalCarouselInstance) {
        modalCarouselInstance.dispose();
        modalCarouselInstance = null;
    }
}

/* =========================
   HANDLE HASH ON LOAD / CHANGE
   ========================= */
function handleHash() {
    const hash = window.location.hash;
    if (hash.startsWith("#product-")) {
        const id = parseInt(hash.split("-")[1]);
        if (products.find(p => p.id === id)) openProductModal(id);
    } else {
        closeModal();
    }
}
window.addEventListener("hashchange", handleHash);

/* =========================
   EVENT DELEGATION (clicks)
   ========================= */
document.addEventListener("click", (e) => {
    // View Details
    if (e.target.classList.contains("view-details") || e.target.closest(".view-details")) {
        const btn = e.target.classList.contains("view-details") ? e.target : e.target.closest(".view-details");
        const id = parseInt(btn.getAttribute("data-id"));
        openProductModal(id);
    }

    // Buy Now (card)
    if (e.target.classList.contains("buy-now-btn") || e.target.closest(".buy-now-btn")) {
        const btn = e.target.classList.contains("buy-now-btn") ? e.target : e.target.closest(".buy-now-btn");
        const id = parseInt(btn.getAttribute("data-id"));
        const prod = products.find(p => p.id === id);
        if (prod) {
            window.open(getWhatsAppLink(prod), '_blank');
        }
    }

    // Close modal (× or backdrop)
    if (e.target.closest(".close-modal")) closeModal();
    if (e.target === modalEl) closeModal();
});

/* =========================
   CATEGORY FILTER LINKS (navbar + footer)
   ========================= */
document.querySelectorAll(".filter-category-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const cat = link.getAttribute("data-category");
        if (cat) {
            currentFilter = cat;
            currentSearch = "";
            document.getElementById("searchInput").value = "";
            filterProducts();
            document.querySelectorAll(".category-filter-btn").forEach(btn => btn.classList.remove("active-filter"));
            const activeBtn = Array.from(document.querySelectorAll(".category-filter-btn")).find(b => b.getAttribute("data-filter") === cat);
            if (activeBtn) activeBtn.classList.add("active-filter");
            else document.querySelector(".category-filter-btn[data-filter='all']").classList.add("active-filter");
            document.getElementById("products-grid").scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* =========================
   CATEGORY FILTER BUTTONS
   ========================= */
document.querySelectorAll(".category-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-filter");
        currentSearch = document.getElementById("searchInput").value;
        filterProducts();
        document.querySelectorAll(".category-filter-btn").forEach(b => b.classList.remove("active-filter"));
        btn.classList.add("active-filter");
        document.querySelectorAll(".category-filter-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
    });
});

/* =========================
   SEARCH INPUT
   ========================= */
document.getElementById("searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value;
    filterProducts();
});

/* =========================
   NEWSLETTER
   ========================= */
document.getElementById("subscribeBtn").addEventListener("click", () => {
    const email = document.getElementById("newsEmail").value;
    const msg = document.getElementById("newsMsg");
    if (email && email.includes('@')) {
        msg.innerHTML = "✨ Thank you for subscribing. Your luxury journey begins.";
    } else {
        msg.innerHTML = "Please enter a valid email address.";
    }
    setTimeout(() => msg.innerHTML = "", 3500);
});

/* =========================
   SCROLL PROGRESS + NAVBAR + BACK TO TOP
   ========================= */
window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scrollProgress").style.width = scrolled + "%";

    const backBtn = document.getElementById("backToTop");
    if (winScroll > 300) backBtn.classList.add("show");
    else backBtn.classList.remove("show");

    const navbar = document.getElementById("mainNav");
    if (winScroll > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   INITIAL RENDER
   ========================= */
renderProductCards(products, "productContainer");
renderSpecialSections();
filterProducts();
window.dispatchEvent(new Event("hashchange"));

/* =========================
   AOS INIT
   ========================= */
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

console.log('Tahira — Luxury Finds loaded.');
