/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12","950":"#431407"},
				night: '#0C0C17',
				bone: '#DBD0BF',
				'white/90': '#00000010',
				'gray-35': '#C9C9C9',
				'gray-40': '#C1C1C1',
				'gray-30': '#FBFDFF',
			},
 			fontFamily: {
      			'body': [
    				'Inter', 
    				'ui-sans-serif', 
    				'system-ui', 
    				'-apple-system', 
    				'system-ui', 
    				'Segoe UI', 
    				'Roboto', 
    				'Helvetica Neue', 
    				'Arial', 
    				'Noto Sans', 
    				'sans-serif', 
    				'Apple Color Emoji', 
    				'Segoe UI Emoji', 
    				'Segoe UI Symbol', 
    				'Noto Color Emoji'
  				],
      			'sans': [
				    'Inter', 
				    'ui-sans-serif', 
				    'system-ui', 
				    '-apple-system', 
				    'system-ui', 
				    'Segoe UI', 
				    'Roboto', 
				    'Helvetica Neue', 
				    'Arial', 
				    'Noto Sans', 
				    'sans-serif', 
				    'Apple Color Emoji', 
				    'Segoe UI Emoji', 
				    'Segoe UI Symbol', 
				    'Noto Color Emoji'
				],
				'grifter':[
					'GrifterBold',
					'Inter', 
    				'ui-sans-serif'
				]
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

