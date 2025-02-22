import { sveltekit } from '@sveltejs/kit/vite';
import {defineConfig, loadEnv} from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [
			sveltekit(),
			tailwindcss(),
		],
		server: {
			allowedHosts: env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS
				? env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS.split(',')
				: [],
		},
	}
});

