/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,jsx,ts,tsx,css}'],
	darkMode: 'media',
	theme: {
		extend: {
			aspectRatio: {
				'2/3': '2 / 3',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
