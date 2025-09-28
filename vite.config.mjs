import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DocOnDesk/', // 👈 this is needed for GitHub Pages
})
