const fs = require('fs');
const path = require('path');

// Function to recursively find all .astro and .js files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (
      filePath.endsWith('.astro') ||
      filePath.endsWith('.js') ||
      filePath.endsWith('.ts') ||
      filePath.endsWith('.jsx') ||
      filePath.endsWith('.tsx')
    ) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Function to fix incorrect paths in a file
function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix the incorrect paths that were created by the previous script
    content = content.replace(/\.\.\/@/g, '@');
    
    // Only write if content has changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed paths in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
  }
}

// Main function
function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const files = getAllFiles(srcDir);
  
  console.log(`Found ${files.length} files to process...`);
  
  files.forEach(file => {
    fixPathsInFile(file);
  });
  
  console.log('Path fixing complete!');
}

// Run the script
main();