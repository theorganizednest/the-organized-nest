# fix-article-headers.ps1
# =========================================
# THE ORGANIZED NEST - ARTICLE HEADER STANDARDIZER (Sprint 14 / B1)
# v2: Encoding-proof. Search icon is now &#128269; (ASCII entity),
#     because PS 5.1 reads BOM-less .ps1 files as ANSI and corrupts literal emoji.
# SCOPE: Only the 5 article files. Idempotent. Fail-safe.
# =========================================

Write-Host "Starting Article Header Standardization (v2)..." -ForegroundColor Green

$newHeader = @'
    <header class="site-header">
        <div class="container header-container">
            <a href="../index.html" class="logo">The Organized Nest</a>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation"><span class="hamburger"></span></button>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="kitchen-organization.html">Kitchen</a></li>
                    <li><a href="../travel.html">Travel</a></li>
                    <li><a href="concert-essentials.html">Concerts &amp; Events</a></li>
                    <li><a href="seasonal-fall.html">Seasonal</a></li>
                    <li><a href="gift-guide-holiday.html">Gift Guides</a></li>
                    <li><a href="../amazon-finds.html">Amazon Finds</a></li>
                </ul>
            </nav>
            <div class="header-search">
                <input type="text" placeholder="Search finds..." aria-label="Search">
                <div id="search-results" class="search-results-container"></div>
                <button type="button" aria-label="Submit search">&#128269;</button>
            </div>
        </div>
    </header>
'@

$articleFiles = @(
    "articles/kitchen-organization.html",
    "articles/concert-essentials.html",
    "articles/seasonal-fall.html",
    "articles/travel-essentials.html",
    "articles/gift-guide-holiday.html"
)

$pattern = '(?s)<header class="site-header">.*?</header>'

foreach ($file in $articleFiles) {
    $fullPath = Join-Path $PSScriptRoot $file

    if (-not (Test-Path $fullPath)) {
        Write-Warning "FILE NOT FOUND (skipped): $file"
        continue
    }

    Write-Host "Processing: $file" -ForegroundColor Cyan

    $content = [System.IO.File]::ReadAllText($fullPath)

    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, $newHeader)
        [System.IO.File]::WriteAllText($fullPath, $newContent)
        Write-Host "  -> Header standardized (encoding-proof)." -ForegroundColor Green
    } else {
        Write-Warning "  -> site-header block NOT FOUND in $file. File left untouched."
    }
}

Write-Host "Done. Hard-refresh and check: same tab positions + clean magnifier on ALL pages." -ForegroundColor Green