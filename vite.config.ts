import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Jurídico Emilia — Hostinger Deploy Configuration
export default defineConfig({
  base: './', // Relative paths for Hostinger static hosting
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  esbuild: {
    drop: ['console', 'debugger'], // Strip console/debugger in production
  },
  build: {
    outDir: 'dist',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
