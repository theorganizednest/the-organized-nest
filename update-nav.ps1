# update-nav.ps1
Write-Host "Starting Nav Link Update..." -ForegroundColor Green

# Define the files to update
$files = @(
    "index.html",
    "travel.html",
    "amazon-finds.html",
    "articles/concert-essentials.html",
    "articles/travel-essentials.html",
    "articles/kitchen-organization.html",
    "articles/seasonal-fall.html"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing: $file" -ForegroundColor Cyan
        
        # Determine correct path based on location
        if ($file.StartsWith("articles\")) {
            $targetLink = "../amazon-finds.html"
        } else {
            $targetLink = "amazon-finds.html"
        }

        # Read content
        $content = Get-Content $file -Raw
        
        # Replace dead link with live link
        # Pattern matches: <a href="#">Amazon Finds</a> OR variations with class attributes
        $regexPattern = '(<a\s+href="[^"]*"[^>]*>)\s*Amazon Finds\s*(<\/a>)'
        
        # We need to be careful not to break existing classes like 'active'. 
        # So we replace ONLY the href value inside that specific anchor text context.
        # Simpler approach for this specific case: Just swap the href="#" or href="..." before Amazon Finds
        
        # Let's use a more robust replacement logic:
        # Find "<a ... >Amazon Finds</a>" and ensure href points to targetLink
        
        $newContent = $content -replace '(<a\s+)(href="[^"]*")(\s+[^>]*>\s*Amazon Finds\s*</a>)', "`${1}href=`"$targetLink`${3}"
        
        # Save back
        Set-Content $file $newContent
        Write-Host "Updated!" -ForegroundColor Yellow
    } else {
        Write-Warning "File not found: $file"
    }
}

Write-Host "Done! All nav links updated." -ForegroundColor Green