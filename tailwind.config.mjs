/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				night: '#0C0C17',
				bone: '#DBD0BF',
				'white/90': '#00000010',
				'gray-35': '#C9C9C9',
				'gray-40': '#C1C1C1',
				'gray-30': '#FBFDFF',
			},
			maxWidth: {
				'8xl': '90rem',
			},
			backgroundImage: {
				'dotted-dark': "url('/dot.svg')",
			},


		
		},
	plugins: [],
	}
}

