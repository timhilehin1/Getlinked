/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary-color)",
				"horizontal-line-color": "var(--horizontal-line-color)",
				"input-color": "var(--input-color)",
				"secondary-color": "var(--secondary-color)",
			},
		},
	},
	plugins: [],
};
