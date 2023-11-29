import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    include: ['lodash.pick', 'lodash.omit', 'stats.js','prop-types', 'lodash.clamp'],
    exclude: ['@react-three/drei']
  }
})