import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
})
