const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Function to optimize a single image
async function optimizeImage(inputPath, outputPath, maxSizeKB = 200) {
  try {
    // Get original file size
    const stats = await fs.stat(inputPath);
    const originalSizeKB = stats.size / 1024;
    
    console.log(`Processing: ${inputPath}`);
    console.log(`Original size: ${originalSizeKB.toFixed(2)} KB`);
    
    // If already small enough and is WebP, skip
    if (path.extname(inputPath).toLowerCase() === '.webp' && originalSizeKB <= maxSizeKB) {
      console.log(`Already optimized: ${inputPath}`);
      return;
    }
    
    // Configure sharp for WebP conversion with quality adjustment
    let quality = 80; // Start with quality 80
    let optimizedSizeKB = 0;
    
    // Try to optimize with decreasing quality until under maxSizeKB
    while (quality > 10) {
      const { data, info } = await sharp(inputPath)
        .webp({ quality })
        .toBuffer({ resolveWithObject: true });
      
      optimizedSizeKB = info.size / 1024;
      
      if (optimizedSizeKB <= maxSizeKB) {
        // Save the optimized image
        await fs.writeFile(outputPath, data);
        console.log(`Optimized: ${outputPath}`);
        console.log(`New size: ${optimizedSizeKB.toFixed(2)} KB (quality: ${quality})`);
        return;
      }
      
      // Reduce quality for next iteration
      quality -= 5;
    }
    
    // If we still couldn't get under maxSizeKB, use the lowest quality
    const { data } = await sharp(inputPath)
      .webp({ quality: 10 })
      .toBuffer();
    
    await fs.writeFile(outputPath, data);
    const finalStats = await fs.stat(outputPath);
    const finalSizeKB = finalStats.size / 1024;
    console.log(`Optimized (at minimum quality): ${outputPath}`);
    console.log(`Final size: ${finalSizeKB.toFixed(2)} KB`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

// Function to process all images in a directory
async function processImagesInDirectory(directory) {
  try {
    // Get all jpg and png files recursively
    const getAllImages = async (dir) => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const files = await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          return getAllImages(fullPath);
        } else if (
          entry.isFile() && 
          (path.extname(entry.name).toLowerCase() === '.jpg' || 
           path.extname(entry.name).toLowerCase() === '.jpeg' || 
           path.extname(entry.name).toLowerCase() === '.png')
        ) {
          return fullPath;
        }
        return null;
      }));
      return files.flat().filter(Boolean);
    };

    const imageFiles = await getAllImages(directory);
    
    console.log(`Found ${imageFiles.length} images to optimize`);
    
    // Process each image
    for (const imagePath of imageFiles) {
      // Create output path with .webp extension
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      await optimizeImage(imagePath, outputPath);
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error processing directory:', error.message);
  }
}

// Main execution
async function main() {
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  // Check if sharp is installed
  try {
    require('sharp');
  } catch (error) {
    console.error('Error: Sharp library not found. Please install it with:');
    console.error('npm install sharp');
    process.exit(1);
  }
  
  // Check if images directory exists
  try {
    await fs.access(imagesDir);
  } catch (error) {
    console.error(`Error: Images directory not found at ${imagesDir}`);
    process.exit(1);
  }
  
  console.log(`Starting image optimization in ${imagesDir}`);
  await processImagesInDirectory(imagesDir);
}

// Run the script
if (require.main === module) {
  main();
}