import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					black: '#1C1C1F',
					text: '#606272',
					gray: '#B2B4C0',
					yellow: '#F7B40D',
					orange: '#F14C5D',
					pink: '#EC0393'
				}
			},
			fontFamily: {
				sans: ['Atyp BL Text', 'sans-serif'],
				'sans-alt': ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
} satisfies Config;
