import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@krosantos/web-ui-kit",
      fileName: (format) => `web-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: { react: 'react' },
      },
      plugins: [
        typescript({
          check: false,
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          include: [path.resolve(__dirname, "./src")],
        }),
      ],
    },
  },
});
