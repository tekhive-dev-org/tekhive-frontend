import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Add this import

export default defineConfig({
  
  plugins: [
    react(),
    tailwindcss() // Add this plugin
  ],
  resolve: {
    alias: {
      '@/': '/src/',
      '@components/': '/src/components/'
    }
  },
   server: {
    proxy: {
      '/maps': {
        target: 'https://www.google.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})