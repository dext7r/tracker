import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    target: 'es2020',
    lib: {
      entry: 'src/index.ts',
      name: 'Tracker',
      fileName: 'index',
      formats: ['cjs', 'es', 'umd', 'iife']
    }
  },
  plugins: [dts({ rollupTypes: true })]
})
