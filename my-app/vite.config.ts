import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	root: './dak-web',
	server: {
		port: 5173,
	},
	plugins: [react()],
});
