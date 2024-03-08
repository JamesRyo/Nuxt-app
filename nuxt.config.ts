import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	css: ["@/assets/css/app.css"],
	build: {
		postcss: {
			postcssOptions: require("./postcss.config.js"),
		},
	},
	modules: ["@pinia/nuxt"],
});
