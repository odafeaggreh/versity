/** @format */

module.exports = {
	mode: 'jit',
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				atoll: {
					DEFAULT: "#096A6A",
					50: "#66F2F2",
					100: "#4FF0F0",
					200: "#20ECEC",
					300: "#11C8C8",
					400: "#0D9999",
					500: "#096A6A",
					600: "#053B3B",
					700: "#010C0C",
					800: "#000000",
					900: "#000000",
				},
			},
			spacing: {
				82: "22rem",
			},
			fontFamily: {
                "sans": ["Dubai, Roboto, sans-serif"],
            },
		},
	},
	variants: {
		extend: {
			dropShadow: ['hover', 'focus'],
			transform: ['hover', 'focus'],
		},
		fill: ['hover', 'focus'],
	},
	plugins: [require("@tailwindcss/forms")],
	important: true,
};
