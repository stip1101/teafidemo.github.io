import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'fs'

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
        copyFileSync('src/stats.js', 'dist/src/stats.js')
      }
    }
  ]
}) 