# Validate-Structure.ps1
# Simple folder / file / image presence validator for garuda-temple-koladevi
# Works in Windows PowerShell and PowerShell Core

$Root = Get-Location

$Folders = @(
    "public",
    "public\assets",
    "src",
    "src\assets",
    "src\assets\images",
    "src\components",
    "src\pages",
    "src\api"
)

$Files = @(
    "src\index.css",
    "src\main.jsx",
    "src\App.jsx",
    "src\components\Header.jsx",
    "src\components\Footer.jsx",
    "src\components\BookingForm.jsx",
    "src\api\bookings.js",
    "src\pages\Home.jsx",
    "src\pages\About.jsx",
    "src\pages\UniqueDeity.jsx",
    "src\pages\Legend.jsx",
    "src\pages\Gallery.jsx",
    "src\pages\Sevas.jsx",
    "src\pages\Contact.jsx",
    "vite.config.js",
    "package.json"
)

$Images = @(
    "src\assets\images\garuda_4.jpg",
    "src\assets\images\garuda_deity.png",
    "src\assets\images\sita_abduction.jpg",
    "src\assets\images\koladevi-location.jpg",
    "src\assets\images\gallery1.jpg",
    "src\assets\images\gallery2.jpg",
    "src\assets\images\hero-temple.jpg"
)

$Missing = @()

Write-Host "=== Validating Folder Structure ===`n"

foreach ($f in $Folders) {
    $path = Join-Path $Root $f
    if (Test-Path $path) {
        Write-Host "  [+] Folder OK: $f" -ForegroundColor Green
    } else {
        Write-Host "  [-] Missing Folder: $f" -ForegroundColor Red
        $Missing += $f
    }
}

Write-Host "`n=== Validating Files ===`n"

foreach ($file in $Files) {
    $path = Join-Path $Root $file
    if (Test-Path $path) {
        Write-Host "  [+] File OK: $file" -ForegroundColor Green
    } else {
        Write-Host "  [-] Missing File: $file" -ForegroundColor Red
        $Missing += $file
    }
}

Write-Host "`n=== Validating Images ===`n"

foreach ($img in $Images) {
    $path = Join-Path $Root $img
    if (Test-Path $path) {
        Write-Host "  [+] Image OK: $img" -ForegroundColor Green
    } else {
        Write-Host "  [-] Missing Image: $img" -ForegroundColor Red
        $Missing += $img
    }
}

# Summary
if ($Missing.Count -eq 0) {
    Write-Host "`nValidator result: PASSED. All required folders and files are present." -ForegroundColor Green
} else {
    Write-Host "`nValidator result: FAILED. Missing items:" -ForegroundColor Red
    foreach ($m in $Missing) {
        Write-Host "  - $m"
    }
}

Write-Host "`nDone."
