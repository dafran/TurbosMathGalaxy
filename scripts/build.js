#!/usr/bin/env node
/**
 * Build script: copies web assets to the www/ directory
 * that Capacitor uses as its webDir.
 */
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..');
const wwwDir = path.resolve(srcDir, 'www');

// Files to include in the mobile build
const assetFiles = [
  'index.html',
  'app.js',
  'manifest.webmanifest',
  'sw.js',
  'icon.svg',
  'icon-192.png',
  'fonts/nunito-latin.woff2',
  'fonts/press-start-2p-latin.woff2',
];

// Required files that must be present in www/ for the app to boot
const requiredFiles = ['index.html', 'app.js'];

// Create www/ directory
if (!fs.existsSync(wwwDir)) {
  fs.mkdirSync(wwwDir, { recursive: true });
  console.log('Created www/');
}

// Copy each asset
for (const file of assetFiles) {
  const src = path.join(srcDir, file);
  const dest = path.join(wwwDir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    const size = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`  Copied ${file} (${size} KB)`);
  } else {
    console.warn(`  WARNING: ${file} not found, skipping`);
  }
}

// Verification gate: assert required files are present
let missing = requiredFiles.filter(f => !fs.existsSync(path.join(wwwDir, f)));
if (missing.length > 0) {
  console.error('\nERROR: Required files missing from www/:', missing.join(', '));
  process.exit(1);
}

console.log('\n✔ Verification passed — all required files present in www/');
console.log('Build complete → www/');
console.log('Run: npx cap sync   to push changes to native projects');
