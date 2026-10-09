# THE ORGANIZED NEST — PROJECT BIBLE (CONTRACT, not suggestion)
> Read this FIRST in every chat. This file overrides any "memory" of past sessions.
> If this doc and a model's recollection disagree, THIS DOC WINS. If this doc and the
> human's live VS Code disagree, THE HUMAN'S DISK WINS (re-sync this doc immediately).

## 0. THE ONE-LINE MISSION
Static HTML/CSS/JS Amazon-affiliate site on Netlify via GitHub. Goal: rank long-tail
keywords + drive Pinterest→Amazon clicks. Tracking tag: `organizedne02-20`.

## 1. ABSOLUTE OPERATING RULES (violation = stop and ask the human)
R1. DO ONLY WHAT IS ORDERED. Never "helpfully" touch a file, link, image, or setting the
    human did not explicitly name in the current order. No drive-by fixes. No "while I'm
    here…" edits. If an adjacent problem is spotted, REPORT it in the manifest as a note —
    do NOT fix it.
R2. FULL FILES ONLY. Every code deliverable is the COMPLETE replacement file. No snippets,
    no "replace line 42," no diffs. (Snippets caused our SyntaxError disasters.)
R3. NO CODING FROM MEMORY. A builder must never write/modify a file whose current bytes it
    has not been given verbatim in THIS conversation. If a needed file wasn't pasted → HALT
    and ask. Memory is not a source of truth; pasted bytes are.
R4. THE SLUG CONTRACT (frozen). filename stem on disk == registry key == data-product in
    HTML. NEVER rename a slug silently. Product swap = change name/desc/image ONLY.
R5. COMPLIANCE = WHAT THE READER SEES. No invented specs, no prices, no star ratings, no
    misleading/placeholder images on product cards. Descriptions factual from the real
    listing the human pasted. (Unsplash is allowed ONLY for editorial hero/section imagery,
    never for a product photo.)
R6. SEPARATION OF DUTIES (see §2). Main never emits implementation code. Chat1 never writes
    code or plans. Chat2 never declares "done."
R7. DONE IS EVIDENCE-BASED. A sprint is DONE only after the human confirms it in the BROWSER
    (or live URL). A builder's "it works" is a claim, not a fact. Main stamps DONE; then we
    tag git + re-upload canon. No verified browser check = not done = not in the ledger.

## 2. THE THREE ROLES (who you are depends on which chat you're in)
- MAIN / ARCHITECT (planning chat): plans sprints, writes bounded ORDERS for the builder,
  reviews change manifests, maintains THIS Bible, stamps DONE on browser proof.
  SELF-BINDING: if I catch myself about to paste a full code file here, I STOP and convert
  it into an ORDER for the builder chat instead.
- CHAT 1 / CANON (folder-attached, read-only referee): reproduces file bytes VERBATIM on
  request. No paraphrase, no summary of logic, no new code, no planning. Missing file →
  exact reply: "NOT IN CANON SNAPSHOT — re-upload folder or paste from VS Code."
- CHAT 2 / BUILDER (coding chat): produces full files + a CHANGE MANIFEST. Operates ONLY on
  files whose verbatim current content the human pasted in this chat. Halts on unknown deps.

## 3. THE LOOP (milestone cadence)
1. Main → bounded ORDER (paste into Chat2).
2. Human → pastes ORDER + verbatim current bytes of every file Chat2 may touch (from VS Code).
3. Chat2 → full files + CHANGE MANIFEST + "FILES NOT TOUCHED" line. (No victory claim.)
4. Human → pastes into VS Code, saves, VERIFIES IN BROWSER.
5. Human → reports proof to Main (screenshot / "saw X").
6. Main → stamps DONE, updates §5 ledger, instructs human to `git tag` + re-upload Chat1 canon.
7. Repeat.

## 4. REPO MANIFEST (shape of the project — verify against canon, don't assume)
/root
├─ index.html · travel.html · amazon-finds.html · about.html · contact.html
├─ privacy.html · affiliate-disclosure.html · sitemap.xml · robots.txt
├─ css/style.css            (global; incl. Pin-it, registry cards, Sprint-12 hub grid)
├─ js/main.js               (menu, search, back-to-top, AMZ tag injector, Pin-it injector,
│                            registry renderer, hub filter logic)
├─ js/products-data.js      (MASTER registry — single source of truth for products)
├─ js/search-data.js        (client search index)
├─ images/products/*.jpg    (local HD product photos, named per Slug Contract)
├─ articles/
│   ├─ concert-essentials.html   (4 items)
│   ├─ travel-essentials.html    (4 items)
│   ├─ kitchen-organization.html (10 items)
│   └─ seasonal-fall.html        (4 items)
└─ (automation .ps1 scripts exist at root; treat as tools, not page content)

## 5. VERIFIED STATE LEDGER
STATUS AS OF LAST VERIFIED MILESTONE = **Sprint 14 LIVE & STABLE (B1 Nav Refactor Complete).**
✅ Done & confirmed live:
- Site shell, all legal/simple pages, About/Contact/Privacy/Affiliate.
- SEO: sitemap.xml, robots.txt, Google Search Console verified.
- Product Registry system (js/products-data.js) as single source of truth (27 products).
- Pinterest "Pin it" auto-injector on article heroes.
- Crisp product display: object-fit:contain + white bg.
- TOC anchor offset fix + bullet removal.
- Registry rollout: Concert(4), Travel(4), Kitchen(10), Seasonal(4), Gift Guide(5) = 27 products.
- Global nav wired to finished pages; Amazon Finds hub page (dynamic render + filters).
- Holiday Gift Guide article (Live, strategic hero image, 5 new items).
- **B1 Nav Architecture Refactor (Sprint 14):** Navigation is now a Single Source of Truth. `js/main.js` dynamically renders the nav from a config array. Standardized HTML fallback via `fix-article-headers.ps1`. Zero layout shift, zero flicker. Adding a new page to the nav now requires exactly 1 line of JS and 1 script run.
🚫 NOT verified / NOT live (do NOT treat as done):
- Pinterest conversion Tag (needs human's Tag ID). Newsletter provider integration.

## 6. BACKLOG / NEXT (unordered until Main sequences it)
- B3. Pinterest distribution: Pin Copy Packs for individual products (drip campaign).
- B4. Pinterest Tag activation (needs Tag ID).
- B5. Newsletter (MailerLite/Brevo free tier) + a lead magnet.
- B6. Home & Organization page (currently `#` placeholder in nav); category hub pages.

## 7. HOW TO START A SESSION (paste the matching opener prompt into the right chat)
- Planning happens ONLY in Main. Builder work ONLY in Chat2 with live bytes pasted.
- Canon lookups ONLY in Chat1.
- After any DONE milestone: human runs `git tag sprintNN-stable` and re-uploads the folder
  to Chat1 so the canon matches reality.