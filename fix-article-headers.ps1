# fix-article-headers.ps1
# =========================================
# THE ORGANIZED NEST - ARTICLE HEADER STANDARDIZER (v3 - Dynamic)
# =========================================
Write-Host "Starting Article Header Standardization (Dynamic Scan)..." -ForegroundColor Green

$newHeader = @'
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

# DYNAMIC SCAN: Automatically finds all HTML files in the articles folder
$articlesDir = Join-Path $PSScriptRoot "articles"
$articleFiles = Get-ChildItem -Path $articlesDir -Filter "*.html" | Select-Object -ExpandProperty FullName

$pattern = '(?s)<header class="site-header">.*?</header>'

foreach ($fullPath in $articleFiles) {
    $fileName = Split-Path $fullPath -Leaf
    Write-Host "Processing: articles/$fileName" -ForegroundColor Cyan

    $content = [System.IO.File]::ReadAllText($fullPath)

    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, $newHeader)
        [System.IO.File]::WriteAllText($fullPath, $newContent)
        Write-Host "  -> Header standardized." -ForegroundColor Green
    } else {
        Write-Warning "  -> site-header block NOT FOUND. Skipped."
    }
}

Write-Host "Done. All article headers are now perfectly synced." -ForegroundColor Green