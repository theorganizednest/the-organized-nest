// Wait for the DOM to fully load
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

    // Close mobile menu when clicking outside of it
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
            searchResultsContainer.innerHTML = ''; // Clear previous results

            if (query.length < 2) {
                searchResultsContainer.style.display = 'none';
                return;
            }

            // Filter articles
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
                    resultItem.innerHTML = `
                        <span class="search-result-category">${article.category}</span>
                        <span class="search-result-title">${article.title}</span>
                    `;
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

        // Hide search results when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.header-search')) {
                searchResultsContainer.style.display = 'none';
            }
        });
    }

    console.log("The Organized Nest: JavaScript loaded successfully.");
});