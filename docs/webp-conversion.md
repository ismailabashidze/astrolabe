# Image Conversion to WebP

This directory contains a PowerShell script to convert JPG images to WebP format for better compression and web performance.

## Requirements

1. **ImageMagick** - The script requires ImageMagick to be installed and available in your system PATH.
   - Download from: https://imagemagick.org/script/download.php
   - For Windows, download the "ImageMagick-*-win64-static.exe" installer
   - During installation, make sure to check "Add application directory to your system path"

## Usage

Open PowerShell in the project root directory and run:

```powershell
.\convert-jpg-to-webp.ps1
```

The script will:
1. Find all JPG/JPEG images in the `public/images` directory and subdirectories
2. Convert each image to WebP format with 80% quality
3. Remove the original JPG files after successful conversion

## Optional Parameters

You can specify a different source directory:

```powershell
.\convert-jpg-to-webp.ps1 -ImagesPath "path/to/your/images"
```

## Benefits of WebP

- **Smaller file sizes** - WebP images are typically 25-35% smaller than JPEGs
- **Better quality** - Maintains better image quality at similar file sizes
- **Transparency support** - Unlike JPEG, WebP supports transparency
- **Modern browser support** - Supported by all modern browsers

## Note for Developers

After running this script, you may need to update references to these images in your code to use the new `.webp` extensions instead of `.jpg`.