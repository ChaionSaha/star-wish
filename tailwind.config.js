/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
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
