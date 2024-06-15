import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
	root: ".",
	site: "https://chkaiblog.eu.org/",
	output: "static",
	prefetch: true,
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
		pagefind()
	],
});
