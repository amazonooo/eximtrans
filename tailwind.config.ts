import type { Config } from "tailwindcss";

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
			},
			animation: {
				'slide-up': 'slide-up 0.3s ease',
				'slide-down': 'slide-down 0.3s ease',
				spin: 'spin 20s linear infinite ',
			},
		},
	},
	plugins: [],
}
export default config;
