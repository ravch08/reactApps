/** @type {import('tailwindcss').Config} */
module.exports = {
	// Add the paths to all of your template files
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#bfa888",
				darkBlue: "#021527",
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
				serif: ["Cormorant Upright", "serif"],
				monospace: ["Inconsolata", "monospace"],
			},
		},
	},
	plugins: [],
};
