# fix-all-headers.ps1
# =========================================
# THE ORGANIZED NEST - GLOBAL HEADER STANDARDIZER (v4)
# =========================================
# PURPOSE: Replaces the ENTIRE <header> block in ALL HTML files (root and articles)
# with the exact structure that js/main.js renders. This guarantees zero layout shift
# (zero flicker/jerk) when navigating between ANY pages on the site.
# =========================================

Write-Host "Starting Global Header Standardization..." -ForegroundColor Green

# TEMPLATE 1: For Root Pages (index, travel, amazon-finds, about, etc.)
$rootHeader = @'
    <header class="site-header">
        <div class="container header-container">
            <a href="index.html" class="logo">The Organized Nest</a>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation"><span class="hamburger"></span></button>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="kitchen.html">Kitchen</a></li>
                    <li><a href="travel.html">Travel</a></li>
                    <li><a href="articles/concert-essentials.html">Concerts &amp; Events</a></li>
                    <li><a href="articles/seasonal-fall.html">Seasonal</a></li>
                    <li><a href="articles/gift-guide-holiday.html">Gift Guides</a></li>
                    <li><a href="amazon-finds.html">Amazon Finds</a></li>
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

# TEMPLATE 2: For Article Pages (inside /articles/ folder)
$articleHeader = @'
    <header class="site-header">
        <div class="container header-container">
            <a href="../index.html" class="logo">The Organized Nest</a>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation"><span class="hamburger"></span></button>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../kitchen.html">Kitchen</a></li>
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

$pattern = '(?s)<header class="site-header">.*?</header>'

# 1. Process Root HTML files
$rootFiles = Get-ChildItem -Path $PSScriptRoot -Filter "*.html" -File
foreach ($file in $rootFiles) {
    Write-Host "Processing Root: $($file.Name)" -ForegroundColor Cyan
    $content = [System.IO.File]::ReadAllText($file.FullName)
    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, $rootHeader)
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "  -> Standardized." -ForegroundColor Green
    } else {
        Write-Warning "  -> No site-header found. Skipped."
    }
}

# 2. Process Article HTML files
$articlesDir = Join-Path $PSScriptRoot "articles"
if (Test-Path $articlesDir) {
    $articleFiles = Get-ChildItem -Path $articlesDir -Filter "*.html" -File
    foreach ($file in $articleFiles) {
        Write-Host "Processing Article: articles/$($file.Name)" -ForegroundColor Cyan
        $content = [System.IO.File]::ReadAllText($file.FullName)
        if ($content -match $pattern) {
            $newContent = [regex]::Replace($content, $pattern, $articleHeader)
            [System.IO.File]::WriteAllText($file.FullName, $newContent)
            Write-Host "  -> Standardized." -ForegroundColor Green
        } else {
            Write-Warning "  -> No site-header found. Skipped."
        }
    }
}

Write-Host "Done. Global header sync complete. Zero flicker guaranteed." -ForegroundColor Green