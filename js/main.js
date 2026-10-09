document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // 0. DYNAMIC NAV RENDERER (Sprint B1)
    // ========================================
    const NAV_ITEMS = [
        { label: 'Home', href: 'index.html', matchPattern: '^/(index\\.html)?$' },
        { label: 'Kitchen', href: 'kitchen.html', matchPattern: 'kitchen\\.html$' },
        { label: 'Travel', href: 'travel.html', matchPattern: '^/travel\\.html$' },
        { label: 'Concerts & Events', href: 'articles/concert-essentials.html', matchPattern: 'concert-essentials\\.html$' },
        { label: 'Seasonal', href: 'articles/seasonal-fall.html', matchPattern: 'seasonal-fall\\.html$' },
        { label: 'Gift Guides', href: 'articles/gift-guide-holiday.html', matchPattern: 'gift-guide-holiday\\.html$' },
        { label: 'Amazon Finds', href: 'amazon-finds.html', matchPattern: '^/amazon-finds\\.html$' }
    ];

    function resolveNavPath(href) {
        if (href === '#') return '#';
        var isArticlePage = window.location.pathname.includes('/articles/');
        if (!isArticlePage) return href;
        if (href.startsWith('articles/')) {
            return href.replace('articles/', '');
        }
        return '../' + href;
    }

    function renderNav() {
        var nav = document.querySelector('.main-nav');
        if (!nav) return;

        nav.style.visibility = 'hidden';

        var html = '<ul class="nav-list">';
        NAV_ITEMS.forEach(function(item) {
            var href = resolveNavPath(item.href);
            var isActive = new RegExp(item.matchPattern).test(window.location.pathname);
            html += '<li><a href="' + href + '"' + (isActive ? ' class="active"' : '') + '>' + item.label + '</a></li>';
        });
        html += '</ul>';

        nav.innerHTML = html;

        requestAnimationFrame(function() {
            nav.style.visibility = 'visible';
        });
    }

    renderNav();

    // ========================================
    // 1. Mobile Menu Toggle Functionality
    // ========================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
    document.addEventListener('click', (event) => {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // ========================================
    // 2. Back to Top Button Functionality
    // ========================================
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========================================
    // 3. Client-Side Search Functionality
    // ========================================
    const searchInput = document.querySelector('.header-search input');
    const searchResultsContainer = document.getElementById('search-results');
    if (searchInput && searchResultsContainer && typeof siteArticles !== 'undefined') {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResultsContainer.innerHTML = '';
            if (query.length < 2) {
                searchResultsContainer.style.display = 'none';
                return;
            }
            const filteredArticles = siteArticles.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query)
            );
            if (filteredArticles.length > 0) {
                filteredArticles.forEach(article => {
                    const resultItem = document.createElement('a');
                    resultItem.href = article.url;
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = '<span class="search-result-category">' + article.category + '</span><span class="search-result-title">' + article.title + '</span>';
                    searchResultsContainer.appendChild(resultItem);
                });
                searchResultsContainer.style.display = 'block';
            } else {
                const noResult = document.createElement('div');
                noResult.className = 'search-result-item no-results';
                noResult.textContent = 'No articles found.';
                searchResultsContainer.appendChild(noResult);
                searchResultsContainer.style.display = 'block';
            }
        });
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.header-search')) {
                searchResultsContainer.style.display = 'none';
            }
        });
    }

    // ========================================
    // 4. Product Registry System (Article Pages)
    // ========================================
    if (typeof PRODUCT_REGISTRY !== 'undefined') {
        document.querySelectorAll('[data-product]').forEach(card => {
            const id = card.getAttribute('data-product');
            const product = PRODUCT_REGISTRY[id];
            if (!product) return;
            if (product.available === false) {
                card.style.display = 'none';
                return;
            }
            const nameEl = card.querySelector('.product-info h3');
            const descEl = card.querySelector('.product-info p');
            const imgEl = card.querySelector('.product-image img');
            const linkEl = card.querySelector('.amazon-affiliate-link');
            if (nameEl && product.name) nameEl.textContent = product.name;
            if (descEl && product.description) descEl.textContent = product.description;
            if (imgEl && product.image) {
                imgEl.src = product.image;
                imgEl.alt = product.imageAlt || product.name;
            }
            if (linkEl && product.link) linkEl.setAttribute('href', product.link);
        });
    }

    // ========================================
    // 5. Amazon Affiliate Tag Injector
    // ========================================
    const AMAZON_TAG = "organizedne02-20";
    document.querySelectorAll('.amazon-affiliate-link').forEach(link => {
        let href = link.getAttribute('href');
        if (href && href !== '#' && (href.includes('amazon.com') || href.includes('amzn.to') || href.includes('link.amazon'))) {
            if (href.includes('?')) {
                if (!href.includes('tag=')) {
                    href += '&tag=' + AMAZON_TAG;
                }
            } else {
                href += '?tag=' + AMAZON_TAG;
            }
            link.setAttribute('href', href);
        }
    });

    // ========================================
    // 6. Pinterest "Pin It" Button (Auto-inject on Articles)
    // ========================================
    const heroImg = document.querySelector('.article-hero-img');
    if (heroImg) {
        const wrap = document.createElement('div');
        wrap.className = 'article-hero-wrap';
        heroImg.parentNode.insertBefore(wrap, heroImg);
        wrap.appendChild(heroImg);
        const pinBtn = document.createElement('button');
        pinBtn.className = 'pin-it-btn';
        pinBtn.setAttribute('aria-label', 'Save this image to Pinterest');
        pinBtn.innerHTML = 'Pin it';
        wrap.appendChild(pinBtn);
        pinBtn.addEventListener('click', () => {
            const pageUrl = encodeURIComponent(window.location.href);
            const imgUrl = encodeURIComponent(new URL(heroImg.src, window.location.href).href);
            const desc = encodeURIComponent(document.title);
            const shareUrl = 'https://www.pinterest.com/pin/create/button/?url=' + pageUrl + '&media=' + imgUrl + '&description=' + desc;
            window.open(shareUrl, '_blank', 'noopener');
        });
    }

    // ========================================
    // 7. AMAZON FINDS HUB RENDERER (Sprint 12)
    // ========================================
    const findsGrid = document.getElementById('finds-grid');
    if (findsGrid && typeof PRODUCT_REGISTRY !== 'undefined') {
        const CATEGORY_MAP = {
            "clear-backpack-01": "concert", "neck-fan-01": "concert", "power-bank-01": "concert", "water-bottle-01": "concert",
            "packing-cubes-01": "travel", "toiletry-bag-01": "travel", "neck-pillow-01": "travel", "headphones-01": "travel",
            "storage-containers-01": "kitchen", "lazy-susan-01": "kitchen", "label-maker-01": "kitchen", "organizer-bins-01": "kitchen",
            "bag-organizer-01": "kitchen", "cereal-dispensers-01": "kitchen", "under-sink-organizer-01": "kitchen", "drawer-dividers-01": "kitchen",
            "cabinet-door-basket-01": "kitchen", "can-organizer-01": "kitchen",
            "throw-blanket-01": "seasonal", "scented-candle-01": "seasonal", "coffee-mug-01": "seasonal", "accent-pillow-01": "seasonal",
            "weighted-blanket-01": "gift", "wine-opener-set-01": "gift", "cutting-board-01": "gift", "slippers-01": "gift", "photo-frame-01": "gift",
            "fridge-bins-set-01": "kitchen", "produce-keeper-01": "kitchen", "egg-dispenser-01": "kitchen", "fridge-turntable-01": "kitchen",
            "can-dispenser-01": "kitchen", "freezer-bins-01": "kitchen", "fridge-dividers-01": "kitchen", "fridge-labels-01": "kitchen",
            "coffee-canister-01": "kitchen", "tea-organizer-01": "kitchen", "mug-rack-01": "kitchen", "pod-drawer-01": "kitchen",
            "syrup-caddy-01": "kitchen", "milk-frother-01": "kitchen", "gooseneck-kettle-01": "kitchen", "drip-tray-mat-01": "kitchen"
        };
        function renderCards(filterCat) {
            findsGrid.innerHTML = '';
            Object.keys(PRODUCT_REGISTRY).forEach(id => {
                const p = PRODUCT_REGISTRY[id];
                if (!p.available) return;
                const cat = CATEGORY_MAP[id] || 'other';
                if (filterCat !== 'all' && cat !== filterCat) return;
                const card = document.createElement('div');
                card.className = 'product-card finds-card';
                card.innerHTML = `
                    <div class="product-image">
                        <img src="${p.image}" alt="${p.imageAlt || p.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <p>${p.description}</p>
                        <a href="${p.link}" class="btn btn-primary amazon-affiliate-link" target="_blank" rel="nofollow noopener sponsored">View on Amazon</a>
                    </div>
                `;
                findsGrid.appendChild(card);
            });
            document.querySelectorAll('#finds-grid .amazon-affiliate-link').forEach(link => {
                 let href = link.getAttribute('href');
                 if (href && !href.includes('tag=')) {
                     href += (href.includes('?') ? '&' : '?') + 'tag=' + AMAZON_TAG;
                     link.setAttribute('href', href);
                 }
            });
        }
        renderCards('all');
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderCards(btn.dataset.category);
            });
        });
    }

    console.log("The Organized Nest: JavaScript loaded successfully.");
});