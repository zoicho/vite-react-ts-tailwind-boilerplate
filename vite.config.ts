import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@rollup/plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    { ... eslint({ include: './src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') }
    ],
  },
})
