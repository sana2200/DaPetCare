import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DaPetCare/', // Replace with your actual repository name
  build: {
    outDir: 'dist',
  }
})
