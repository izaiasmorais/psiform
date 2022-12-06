/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Lexend deca, sans-serif",
			},
			colors: {
				blue: {
					300: "#93C5FD",
					400: "#60A5FA",
					900: "#000768",
				},
			},
		},
	},
	plugins: [],
};
