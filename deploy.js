const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment to GitHub Pages...\n');

// Step 1: Build the project
console.log('📦 Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Get dist path
const distPath = path.join(__dirname, 'dist');

// Step 3: Initialize git repo in dist
console.log('\n📝 Initializing git repository in dist...');
const gitPath = path.join(distPath, '.git');
if (fs.existsSync(gitPath)) {
  fs.rmSync(gitPath, { recursive: true, force: true });
}
// Add safe directory for dist folder
execSync(`git config --global --add safe.directory "${distPath}"`, { stdio: 'inherit' });
execSync('git init', { stdio: 'inherit', cwd: distPath });
execSync('git add -A', { stdio: 'inherit', cwd: distPath });
execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit', cwd: distPath });
execSync('git branch -M gh-pages', { stdio: 'inherit', cwd: distPath });
try {
  execSync('git remote remove origin', { stdio: 'inherit', cwd: distPath });
} catch (e) {
  // Remote doesn't exist, that's fine
}
execSync('git remote add origin https://github.com/saadmdev/DocOnDesk.git', { stdio: 'inherit', cwd: distPath });

// Step 4: Force push to gh-pages branch
console.log('\n🚀 Pushing to GitHub Pages...');
try {
  execSync('git push -f origin gh-pages', { stdio: 'inherit', cwd: distPath });
  console.log('\n✅ Successfully deployed to GitHub Pages!');
  console.log('🌐 Your site should be live at: https://saadmdev.github.io/DocOnDesk/');
} catch (error) {
  console.error('\n❌ Deployment failed. Please check your GitHub credentials.');
  console.error('You may need to authenticate with GitHub.');
  process.exit(1);
}

