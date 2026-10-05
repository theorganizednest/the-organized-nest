document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Functionality
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

    // 2. Back to Top Button Functionality
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

    // 3. Client-Side Search Functionality
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

    // 4. Product Registry System (Article Pages)
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

    // 5. Amazon Affiliate Tag Injector
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

    // 6. Pinterest "Pin It" Button (Auto-inject on Articles)
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

    // 7. AMAZON FINDS HUB RENDERER (NEW - Sprint 12)
    const findsGrid = document.getElementById('finds-grid');
    if (findsGrid && typeof PRODUCT_REGISTRY !== 'undefined') {
        
        // Helper to determine category based on ID prefix or explicit mapping
        const CATEGORY_MAP = {
            "clear-backpack-01": "concert", "neck-fan-01": "concert", "power-bank-01": "concert", "water-bottle-01": "concert",
            "packing-cubes-01": "travel", "toiletry-bag-01": "travel", "neck-pillow-01": "travel", "headphones-01": "travel",
            "storage-containers-01": "kitchen", "lazy-susan-01": "kitchen", "label-maker-01": "kitchen", "organizer-bins-01": "kitchen",
            "bag-organizer-01": "kitchen", "cereal-dispensers-01": "kitchen", "under-sink-organizer-01": "kitchen", "drawer-dividers-01": "kitchen",
            "cabinet-door-basket-01": "kitchen", "can-organizer-01": "kitchen",
            "throw-blanket-01": "seasonal", "scented-candle-01": "seasonal", "coffee-mug-01": "seasonal", "accent-pillow-01": "seasonal"
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
            
            // Re-run tag injector for newly created elements
            document.querySelectorAll('#finds-grid .amazon-affiliate-link').forEach(link => {
                 let href = link.getAttribute('href');
                 if (href && !href.includes('tag=')) {
                     href += (href.includes('?') ? '&' : '?') + 'tag=' + AMAZON_TAG;
                     link.setAttribute('href', href);
                 }
            });
        }

        // Initial Render
        renderCards('all');

        // Filter Logic
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