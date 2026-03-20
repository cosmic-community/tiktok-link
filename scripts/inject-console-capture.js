const fs = require('fs');
const path = require('path');

const SCRIPT_TAG = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);

  files.forEach(function(file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      injectScript(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');

      if (!content.includes('dashboard-console-capture.js')) {
        content = content.replace('</head>', SCRIPT_TAG + '\n</head>');
        fs.writeFileSync(filePath, content);
        console.log('Injected console capture script into: ' + filePath);
      }
    }
  });
}

const outDir = path.join(__dirname, '..', '.next');
if (fs.existsSync(outDir)) {
  injectScript(outDir);
  console.log('Console capture script injection complete.');
} else {
  console.log('No .next directory found. Skipping console capture injection.');
}