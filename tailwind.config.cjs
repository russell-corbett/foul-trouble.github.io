/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'russell-red': '#7f1424',
				'russell-blue': '#2e2e74',
				panel: 'var(--panel)',
				card: 'var(--card)',
				ink: 'var(--ink)',
				muted: 'var(--muted)',
				line: 'var(--line)',
			},
			fontFamily: {
				techmono: ['ShareTechMono', 'monospace'],
			},
		},
	},
	plugins: [],
}
