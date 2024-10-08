import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    "/api" : "https://mystic-reads-api.onrender.com/", 
    // "/api" : "http://127.0.0.1:5000", 
    // "/api" : {
    //   target : "https://mystic-reads-api.vercel.app", 
    //   changeOrigin : true, 
    //   rewrite: (path) => path.replace(/^\/api/, ''),
    // }
    }
  }
})
