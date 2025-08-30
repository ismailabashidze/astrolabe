# PowerShell script to convert JPG images to WebP format
# This script requires ImageMagick to be installed and available in PATH
# Download from: https://imagemagick.org/script/download.php

param(
    [string]$SourcePath = "public/images",
    [string]$DestinationPath = "public/images_webp"
)

Write-Host "Starting JPG to WebP conversion..." -ForegroundColor Green

# Check if ImageMagick is available
try {
    $magickVersion = magick -version
    Write-Host "ImageMagick found: $magickVersion" -ForegroundColor Green
} catch {
    Write-Error "ImageMagick not found. Please install ImageMagick and ensure it's in your PATH."
    Write-Host "Download from: https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    exit 1
}

# Create destination directory if it doesn't exist
if (!(Test-Path $DestinationPath)) {
    New-Item -ItemType Directory -Path $DestinationPath | Out-Null
    Write-Host "Created destination directory: $DestinationPath" -ForegroundColor Green
}

# Get all JPG files recursively
$jpgFiles = Get-ChildItem -Path $SourcePath -Recurse -Include *.jpg, *.jpeg

Write-Host "Found $($jpgFiles.Count) JPG files to convert" -ForegroundColor Green

foreach ($file in $jpgFiles) {
    # Calculate relative path from source
    $relativePath = $file.FullName.Substring((Get-Item $SourcePath).FullName.Length).TrimStart('\')
    
    # Create destination directory structure
    $destDir = Join-Path $DestinationPath (Split-Path $relativePath -Parent)
    if (!(Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir | Out-Null
    }
    
    # Define WebP output path
    $webpPath = Join-Path $destDir ([System.IO.Path]::GetFileNameWithoutExtension($file.Name) + ".webp")
    
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
        } else {
            Write-Warning "Failed to create WebP file: $webpPath"
        }
    } catch {
        Write-Error "Failed to convert $($file.FullName): $($_.Exception.Message)"
    }
}

Write-Host "Conversion complete!" -ForegroundColor Green
Write-Host "WebP files saved to: $DestinationPath" -ForegroundColor Green