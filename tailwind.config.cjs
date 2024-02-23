/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'russell-red': '#7f1424',
				'russell-blue': '#2e2e74',
				'mun-burgundy': '#923343',
				'mun-grey': '#737577',
				'mi-navy': '#004b84',
				'mi-teal': '#008b9a',
				'edge-yellow': '#fff200',
				'edge-blue': '#ed1c24',
				'mate-orange': '#ef8920',
				'mate-blue': '#164072',
				'first-red': '#ed1c24',
				'first-blue': '#0066b3',
				'verafin-red': '#ec1c24',
				'verafin-grey': '#354854',
				'angler-blue': '#0E2257',
				'angler-green': '#175315',
				'bell-blue': '#00549a',
				'avalon-blue': '#2b3b7f',
				'avalon-orange': '#faa541',
				'maverick-green': '#3c746b',
				'maverick-blue': '#0a408a',
				'mcdonalds-red': '#DA291C',
				'mcdonalds-yellow': '#FFC72C',
				'mcdonalds-black': '#27251F',
				'staples-red': '#b02b20',
				'mpmba-blue': '#304D6D',
				'mpmba-orange': '#B18344',
				'relay-blue': '#3d62ab',
				'relay-yellow': '#e2bc5d'
			},
			fontFamily:{
				techmono: ['ShareTechMono', 'monospace'],
				tech: ['ShareTech', 'sans-serif'],
				russo: ['RussoOne', 'sans-serif'],
				bebas: ['BebasNeue', 'cursive'],
			}
		},
	},
	plugins: [],
}
