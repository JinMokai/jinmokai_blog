import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

import vue from "@astrojs/vue";
// compressor must in integrations last
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  root: ".",
  site: "https://chkaiblog.eu.org/",
  output: "static",
  prefetch: true,
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark"
      }
    }
  }), tailwind(), pagefind(), playformCompress({
    CSS: {
      lightningcss: {
        minify: true
      },
      csso: false
    },
    HTML: {
      "html-minifier-terser": {
        removeComments: true
      }
    },
    Image: false
  }), robotsTxt(), sitemap(), vue({
    jsx: true
  }), compressor({
    gzip: true,
    brotli: false
  })],
  devToolbar: {
    enabled: false
  }
});