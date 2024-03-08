module.exports = {
	mode: "jit",
	purge: [
		"./assets/**/*.css",
		"./components/*.{vue,js}",
		"./components/**/*.{vue,js}",
		"./pages/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./*.{vue,js,ts}",
		"./nuxt.config.{js,ts}",
	],
	content: [],
	theme: {
		screens: {
			sm: "460px",
		},
		fontFamily: {
			sans: ["Lato", "sans-serif"],
		},
	},
	plugins: [ ],
};
