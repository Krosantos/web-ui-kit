import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";
import { peerDependencies } from './package.json'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@krosantos/web-ui-kit",
      fileName: (format) => `web-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: [Object.keys(peerDependencies)],
      output: {
        globals: {
          ...Object.keys(peerDependencies).reduce((acc, cur) => {
            acc[cur] = cur;
            return acc;
          }, {}),
        },
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
