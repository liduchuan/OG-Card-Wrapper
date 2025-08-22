import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        plugins: [react()],
        test: {
          include: ['components/**/*.test.tsx'],
          environment: 'jsdom'
        }
      }
    ]
  },
})
