import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    svelte(),
    Icons({
      compiler: "svelte",
      scale: 1.5,
      autoInstall: true,
      defaultClass: "icon",
    }),
  ],
});
