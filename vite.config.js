import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@/': '/src/',
      '@components/': '/src/components/'
    }
  },
  server: {
    port: 3000, // Explicit port (change if needed)
    host: true,  // Allows external access
    proxy: {
      '/maps': {
        target: 'https://www.google.com',
        changeOrigin: true,
        secure: false,
      },
    },
    // Remove invalid options - Vite handles SPA routing automatically
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})