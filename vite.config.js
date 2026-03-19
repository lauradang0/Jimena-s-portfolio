import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Jimena-s-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        about:     resolve(__dirname, 'about.html'),
        interests: resolve(__dirname, 'interests.html'),
      },
    },
  },
})
