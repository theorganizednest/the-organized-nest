# fix-all-navs.ps1
Write-Host "Starting Global Nav Sync..." -ForegroundColor Green

# Define the TARGET navigation structure (based on your verified index.html)
$targetNavRoot = @"
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Home & Organization</a></li>
                    <li><a href="articles/kitchen-organization.html">Kitchen</a></li>
                    <li><a href="travel.html">Travel</a></li>
                    <li><a href="articles/concert-essentials.html">Concerts & Events</a></li>
                    <li><a href="articles/seasonal-fall.html">Seasonal</a></li>
                    <li><a href="amazon-finds.html">Amazon Finds</a></li>
                </ul>
            </nav>
"@

$targetNavArticle = @"
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="#">Home & Organization</a></li>
                    <li><a href="kitchen-organization.html">Kitchen</a></li>
                    <li><a href="../travel.html">Travel</a></li>
                    <li><a href="concert-essentials.html">Concerts & Events</a></li>
                    <li><a href="seasonal-fall.html">Seasonal</a></li>
                    <li><a href="../amazon-finds.html">Amazon Finds</a></li>
                </ul>
            </nav>
"@

# List of files to process
$rootFiles = @("travel.html") # index.html is already done, amazon-finds.html might need check too but let's focus on articles first
$articleFiles = @(
    "articles/concert-essentials.html",
    "articles/travel-essentials.html",
    "articles/kitchen-organization.html",
    "articles/seasonal-fall.html"
)

function Update-FileNav {
    param ($filePath, $isArticle)
    
    if (-not (Test-Path $filePath)) {
        Write-Warning "File not found: $filePath"
        return
    }

    Write-Host "Processing: $filePath" -ForegroundColor Cyan
    
    $content = Get-Content $filePath -Raw
    
    # Regex to find the entire nav block
    $pattern = '(?s)<nav class="main-nav">.*?</nav>'
    
    $replacement = if ($isArticle) { $targetNavArticle } else { $targetNavRoot }
    
    # Replace only if pattern exists
    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, $replacement)
        Set-Content $filePath $newContent
        Write-Host "Updated!" -ForegroundColor Yellow
    } else {
        Write-Warning "Nav block not found in $filePath. Skipping."
    }
}

# Process Root Files (excluding index.html which is already fixed)
foreach ($file in $rootFiles) {
    Update-FileNav -filePath $file -isArticle:$false
}

# Process Article Files
foreach ($file in $articleFiles) {
    Update-FileNav -filePath $file -isArticle:$true
}

Write-Host "Done! All navigations synced." -ForegroundColor Green