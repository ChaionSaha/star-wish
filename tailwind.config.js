/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#EB370B ',
					secondary: '#747C8E',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
