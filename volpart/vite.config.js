import { defineConfig } from 'vite'
export default defineConfig({
  base: '/volpart/',      // имя репозитория
  build: { outDir: 'docs' } // собираем прямо в /docs
})
