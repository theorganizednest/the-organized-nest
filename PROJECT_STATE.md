# PROJECT: THE ORGANIZED NEST (Amazon Affiliate Site)
## ROLE & GOAL
You are my Senior Developer and SEO Strategist. We are building "The Organized Nest," a static HTML/CSS/JS affiliate site hosted on Netlify, deployed via GitHub. 
Goal: Rank for long-tail keywords (e.g., "clear stadium backpack for concerts") and drive traffic from Pinterest to Amazon links for commissions.

## CURRENT STATUS (Sprint 11c Complete - Ready to Push)
- **Live URL:** https://the-organized-nest.netlify.app
- **Repo:** [Insert your GitHub Repo Link Here]
- **Tech Stack:** Static HTML5, CSS3, Vanilla JS (no frameworks). Hosted on Netlify.
- **Tracking ID:** `tag=organizedne02-20` (Amazon Associates).
- **Pinterest Account:** @organizednestguide (Boards: Concert Essentials, Kitchen Essentials, Summer/Baby/Home Org + need Travel/Fall boards).

## CRITICAL RULES (NON-NEGOTIABLE)
1. **THE SLUG CONTRACT:** Filename stem on disk == Registry Key == `data-product` attribute in HTML. NEVER rename slugs silently. If product changes, update name/desc/image ONLY. Slug stays frozen.
2. **COMPLIANCE FIRST:** No invented specs, no prices/ratings in text, no misleading images. Use actual Amazon product photos (saved locally in `/images/products/`). Descriptions must be factual based on real listing data provided by user.
3. **FULL FILES ONLY:** When editing code, provide COMPLETE replacement files. No snippets/snippets cause syntax errors. Exception: Small targeted line-swaps for nav updates if explicitly agreed upon.
4. **SEO STRATEGY:** Target Long-Tail Keywords. Optimize Title Tags, H1s, Meta Descriptions, and Internal Links. Sitemap.xml and robots.txt are live. Google Search Console verified.
5. **MAINTENANCE MODEL:** Single Source of Truth = `js/products-data.js`. All articles reference this registry dynamically via JS injection (with static HTML fallback).

## FILE STRUCTURE SNAPSHOT
/root
├── index.html          (Home page, wired nav)
├── sitemap.xml         (All pages listed)
├── robots.txt          (Points to sitemap)
├── css/style.css       (Global styles, includes Pin-it button & registry card styles)
├── js/main.js          (Handles mobile menu, search, back-to-top, AMZ tag injector, PIN-IT BUTTON INJECTOR, REGISTRY RENDERER)
├── js/products-data.js (MASTER DATABASE: 22 products currently registered across Concert, Travel, Kitchen, Fall)
├── js/search-data.js   (Client-side search index)
├── images/products/    (Local HD product photos named per Slug Contract)
└── articles/
    ├── concert-essentials.html   (4 items, linked to registry)
    ├── travel-essentials.html    (4 items, linked to registry)
    ├── kitchen-organization.html (10 items, linked to registry)
    └── seasonal-fall.html        (4 items, linked to registry - NEWLY ADDED)

## RECENT COMPLETIONS
- Sprint 8: Built Product Registry system.
- Sprint 9: Added Sitemap, Robots.txt, GSC Verification.
- Sprint 10: Added Pinterest "Pin it" button auto-injector + Pin Copy Pack strategy.
- Sprint 10.1: Fixed image crispness (`object-fit: contain`, white bg).
- Sprint 10.2: Fixed TOC anchor offset (`scroll-margin-top`) and removed bullets.
- Sprint 11a/b/c: Rolled out Registry for Travel, Kitchen (expanded to 10 items), and Seasonal/Fall articles. Wired global navigation to all finished pages.

## IMMEDIATE NEXT STEPS (PRIORITIZE THESE)
1. **Verify Live Deploy:** Ensure Sprint 11c pushed successfully and all 4 articles load correctly with working nav and images.
2. **Sprint 12 Decision:** Choose between:
   - Option A: **Amazon Finds Hub Page** (Auto-render cards from registry for a centralized shop view).
   - Option B: **Pinterest Tag Activation** (Add conversion tracking script to head tags for better ad targeting/analytics).
   - Option C: **New Content Expansion** (Write/optimize next article, e.g., "Gift Guides" or "Home Organization").
3. **Backlog Items:** Home & Organization page, Gift Guides page, Category Hub Pages, Newsletter Integration.

## HOW TO RESUME
Start by asking: "What is the current status of Sprint 11c deployment?" or "Which option do we choose for Sprint 12?" Then proceed with full-file replacements adhering to the rules above.