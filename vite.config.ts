import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    sourcemap: false,
    emptyOutDir: true,
    minify: false,
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: ['src'],
    }),
  ],
})
