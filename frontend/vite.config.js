import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  // 🟢 Yeh frontend se "/api" requests ko backend pe forward karega
        target: 'http://localhost:4000', // 🔥 Backend ka URL
        changeOrigin: true,
        secure: false
      }
    }
  }
  
})
