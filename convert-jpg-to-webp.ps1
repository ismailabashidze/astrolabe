# PowerShell script to convert JPG images to WebP format (in-place conversion)
# This script requires ImageMagick to be installed and available in PATH
# Download from: https://imagemagick.org/script/download.php

param(
    [string]$ImagesPath = "public/images"
)

Write-Host "Starting JPG to WebP in-place conversion..." -ForegroundColor Green

# Check if ImageMagick is available
try {
    $magickVersion = magick -version
    Write-Host "ImageMagick found: $magickVersion" -ForegroundColor Green
} catch {
    Write-Error "ImageMagick not found. Please install ImageMagick and ensure it's in your PATH."
    Write-Host "Download from: https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    exit 1
}

# Get all JPG files recursively
$jpgFiles = Get-ChildItem -Path $ImagesPath -Recurse -Include *.jpg, *.jpeg

Write-Host "Found $($jpgFiles.Count) JPG files to convert" -ForegroundColor Green

foreach ($file in $jpgFiles) {
    # Define WebP output path
    $webpPath = [System.IO.Path]::ChangeExtension($file.FullName, ".webp")
    
    # Convert JPG to WebP with quality setting
    try {
        # Using quality 80 for good balance between size and quality
        magick convert $file.FullName -quality 80 -define webp:method=6 $webpPath
        
        if (Test-Path $webpPath) {
            $originalSize = $file.Length
            $webpSize = (Get-Item $webpPath).Length
            $reduction = [math]::Round((($originalSize - $webpSize) / $originalSize) * 100, 2)
            
            Write-Host "Converted: $($file.Name) -> $([System.IO.Path]::GetFileName($webpPath))" -ForegroundColor Cyan
            Write-Host "  Original: $([math]::Round($originalSize/1KB, 2)) KB -> WebP: $([math]::Round($webpSize/1KB, 2)) KB (reduced by $reduction%)" -ForegroundColor Gray
            
            # Remove original JPG file after successful conversion
            Remove-Item $file.FullName -Force
            Write-Host "  Removed original file: $($file.Name)" -ForegroundColor Gray
        } else {
            Write-Warning "Failed to create WebP file: $webpPath"
        }
    } catch {
        Write-Error "Failed to convert $($file.FullName): $($_.Exception.Message)"
    }
}

Write-Host "In-place conversion complete!" -ForegroundColor Green