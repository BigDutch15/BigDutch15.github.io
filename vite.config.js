import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This repo is a user site (BigDutch15.github.io), so it is served from the
// domain root and the base path stays "/".
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
