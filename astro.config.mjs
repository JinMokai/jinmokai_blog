import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	root: ".",
	site: "https://chkaiblog.eu.org/",
	output: "static",
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				themes: {
					light: "github-light",
					dark: "github-dark",
				},
			},
		}),
		tailwind(),
	],
});
