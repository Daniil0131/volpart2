// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // ЕСЛИ репозиторий называется "volpart" → '/volpart/'
  // ЕСЛИ репозиторий называется "volpart.ru" → '/volpart.ru/'
  base: '/volpart/',
  build: { outDir: 'docs' }   // собираем туда, откуда Pages умеет отдавать
})
