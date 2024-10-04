import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  root: ".",
  site: "https://chkaiblog.eu.org/",
  output: "server",
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
    // CSS: {
    //   lightningcss: {
    //     minify: true
    //   }
    //   // csso: {
    //   //   restructure: false
    //   // }
    // },
    CSS: false,
    HTML: {
      "html-minifier-terser": {
        removeComments: true
      }
    },
    Image: false
  }), robotsTxt(), sitemap()],

  devToolbar: {
    enabled: false
  },

  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  })
});