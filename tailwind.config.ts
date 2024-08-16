import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#c7e4ff',
				'primary-red': '#930d4bd5',
			},
			screens: {
				sm: '620px',
				md: '767px',
				// 1024 !!!
				lg: '951px',
				xl: '1280px',
				'2xl': '1536px',
			},
			keyframes: {
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' },
				},
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
			animation: {
				'slide-up': 'slide-up 0.3s ease',
				'slide-down': 'slide-down 0.3s ease',
				spin: 'spin 20s linear infinite ',
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
		},
	},
	plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars,
	})
}
export default config;
