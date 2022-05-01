import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // disable formatter on save
  dev: {
    useEslint: false
  },
  lintOnSave: false,
  plugins: [vue()],
  server: {
    port: 12009
  },
})
