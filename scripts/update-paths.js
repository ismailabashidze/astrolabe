"import fs from 'fs';
import path from 'path';

// Define the mapping of relative paths to alias paths
const pathMappings = [
  { from: '../components/', to: '@components/' },
  { from: '../layouts/', to: '@layouts/' },
  { from: '../pages/', to: '@pages/' },
  { from: '../styles/', to: '@styles/' },
  { from: '../utils/', to: '@utils/' },
  { from: '../fonts/', to: '@fonts/' },
  { from: '../scripts/', to: '@scripts/' },
  { from: '../content/', to: '@content/' },
  { from: '../i18n/', to: '@i18n/' },
  { from: '../../components/', to: '@components/' },
  { from: '../../layouts/', to: '@layouts/' },
  { from: '../../pages/', to: '@pages/' },
  { from: '../../styles/', to: '@styles/' },
  { from: '../../utils/', to: '@utils/' },
  { from: '../../fonts/', to: '@fonts/' },
  { from: '../../scripts/', to: '@scripts/' },
  { from: '../../content/', to: '@content/' },
  { from: '../../i18n/', to: '@i18n/' },
  { from: '../../../components/', to: '@components/' },
  { from: '../../../layouts/', to: '@layouts/' },
  { from: '../../../pages/', to: '@pages/' },
  { from: '../../../styles/', to: '@styles/' },
  { from: '../../../utils/', to: '@utils/' },
  { from: '../../../fonts/', to: '@fonts/' },
  { from: '../../../scripts/', to: '@scripts/' },
  { from: '../../../content/', to: '@content/' },
  { from: '../../../i18n/', to: '@i18n/' },
  { from: '../../../../components/', to: '@components/' },
  { from: '../../../../layouts/', to: '@layouts/' },
  { from: '../../../../pages/', to: '@pages/' },
  { from: '../../../../styles/', to: '@styles/' },
  { from: '../../../../utils/', to: '@utils/' },
  { from: '../../../../fonts/', to: '@fonts/' },
  { from: '../../../../scripts/', to: '@scripts/' },
  { from: '../../../../content/', to: '@content/' },
  { from: '../../../../i18n/', to: '@i18n/' },
  { from: '../public/', to: '@public/' },
  { from: '../../public/', to: '@public/' },
  { from: '../../../public/', to: '@public/' },
  { from: '../../../../public/', to: '@public/' }
];

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

// Function to replace paths in a file
function replacePathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all path mappings
    pathMappings.forEach(mapping => {
      // Create a global regex for each mapping
      const regex = new RegExp(mapping.from.replace(/\\//g, '\\\\/').replace(/\\./g, '\\\\.'), 'g');
      content = content.replace(regex, mapping.to);
    });
    
    // Only write if content has changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated paths in: ${filePath}`);
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
    replacePathsInFile(file);
  });
  
  console.log('Path replacement complete!');
}

// Run the script
main();"