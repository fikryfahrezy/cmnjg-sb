import fs from "fs";
import path from "path";

const args = process.argv;
if (args.length !== 4) {
  throw Error("Usage: node script/css-copy.mjs [srcDir] [destDir]");
}

function copyCssFiles(srcDir, destDir) {
  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Get all files in the source directory
  const files = fs.readdirSync(srcDir);

  // Iterate over each file
  files.forEach((file) => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    // Check if the file is a directory
    const isDirectory = fs.statSync(srcPath).isDirectory();

    if (isDirectory) {
      // If it's a directory, recursively copy its contents to the destination directory
      copyCssFiles(srcPath, destPath);
    } else {
      // If it's a CSS file, copy it to the destination directory
      if (path.extname(file) === ".css") {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });
}

// Usage: copyCssFiles('src', 'dist')
// This will copy all CSS files in the 'src' directory to the 'dist' directory
// while preserving the directory structure.
copyCssFiles(args[2], args[3]);
