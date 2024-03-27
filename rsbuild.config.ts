import { defineConfig } from "@rsbuild/core";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill()],
  html: {
    template: "./public/index.html",
  },
  source: {
    alias: {
      "@components/*": ["./src/components/*"],
      "@API/*": ["./src/API/*"],
      "@store/*": ["./src/store/*"],
      "@scripts/*": ["./src/scripts/*"],
      "@router/*": ["./src/router/*"],
      "@pages/*": ["./src/pages/*"],
      "@interfaces/*": ["./src/interfaces/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@enums/*": ["./src/enums/*"],
      "@Context/*": ["./src/Context/*"],
      "@assets/*": ["./src/assets/*"],
    },
  },
});
