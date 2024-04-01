import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
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
      "@assets/*": ["./src/assets/*"],
    },
  },
});
