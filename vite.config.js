import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/where-to/",
  plugins: [svelte(), webfontDownload()],
});
