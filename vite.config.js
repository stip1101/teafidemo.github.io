import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from 'fs'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    {
      name: 'copy-stats',
      writeBundle() {
        // Copy stats.html to dist
        copyFileSync('stats.html', 'dist/stats.html')
        
        // Create src directory in dist and copy stats.js
        mkdirSync('dist/src', { recursive: true })
        
        // Find the CSS file name in assets directory
        const assetsDir = 'dist/assets'
        const assets = readdirSync(assetsDir)
        const cssFile = assets.find(file => file.endsWith('.css'))
        
        if (cssFile) {
          // Update stats.js with correct CSS path
          let statsContent = readFileSync('src/stats.js', 'utf-8')
          statsContent = statsContent.replace(
            /cssLink\.href = '.*?';/,
            `cssLink.href = '/assets/${cssFile}';`
          )
          
          // Add MetaMask conflict prevention
          const metaMaskProtection = `
// Prevent MetaMask conflicts
if (typeof window.ethereum !== 'undefined') {
  console.log('Ethereum provider detected, but not needed for stats page');
}

`
          
          statsContent = metaMaskProtection + statsContent
          writeFileSync('dist/src/stats.js', statsContent)
        } else {
          copyFileSync('src/stats.js', 'dist/src/stats.js')
        }
      }
    }
  ]
}) 