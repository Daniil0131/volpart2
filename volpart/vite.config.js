import { defineConfig } from 'vite'
export default defineConfig({
	base: '/volpart2/',
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				conditions: "conditions.html"
			}
		}
	}
})
