// import { defineConfig } from "vite";
import { defineConfig, type UserConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/config/testSetup.ts',
  },
} as UserConfig)
