import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tekhive-frontend/',  // Place the base option at the top level
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@/': '/src/',
      '@components/': '/src/components/'
    }
  }
})