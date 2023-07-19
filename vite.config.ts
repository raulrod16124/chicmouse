/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { ServerOptions, defineConfig } from 'vite'
import svgrPlugin from "vite-plugin-svgr";
import tsConfigPaths from "vite-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";

const devServerOptions: ServerOptions = {
  host: "localhost",
  port: 3000,
  open: false
};

const prodServerOptions: ServerOptions = {
  host: "localhost",
  port: 3000,
  open: false
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    tsConfigPaths(),
    topLevelAwait(),
  ],
  server: {
    ...devServerOptions
  },
  preview: {
    ...prodServerOptions
  },
  build: {
    outDir: "build",
    sourcemap: true
  },
  css: {
    devSourcemap: true
  },
  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
    // coverage: {
    //   provider: "c8",
    //   reporter: ["text", "json", "html"],
    //   reportsDirectory: "./tests/unit/coverage"
    // }
  }
})
