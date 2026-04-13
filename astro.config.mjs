// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://jackelinegoncalves.dev",
  adapter: netlify(),
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});