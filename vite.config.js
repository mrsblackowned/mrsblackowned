import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { mediaKit } from "./src/data/mediaKit.js";

// Resolves which mediaKit.assets[].path files actually exist in /public,
// so the Downloadable Assets section can hide rows for files that haven't
// been added yet (e.g. press kit assets) — checked at build/dev time.
function mediaKitAssetsPlugin() {
  const virtualModuleId = "virtual:media-kit-assets";
  const resolvedId = "\0" + virtualModuleId;

  return {
    name: "media-kit-assets",
    resolveId(id) {
      if (id === virtualModuleId) return resolvedId;
    },
    load(id) {
      if (id !== resolvedId) return;
      const availability = {};
      for (const asset of mediaKit.assets) {
        const filePath = path.join(process.cwd(), "public", asset.path);
        availability[asset.path] = fs.existsSync(filePath);
      }
      return `export default ${JSON.stringify(availability)}`;
    },
  };
}

export default defineConfig({
  plugins: [react(), mediaKitAssetsPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-gsap": ["gsap"],
        },
      },
    },
  },
});
