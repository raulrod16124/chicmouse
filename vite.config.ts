import react from '@vitejs/plugin-react'
import { ServerOptions, defineConfig } from 'vite'
import svgrPlugin from "vite-plugin-svgr";
import tsConfigPaths from "vite-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";

const serverOptions: ServerOptions = {
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
    ...serverOptions
  },
  preview: {
    ...serverOptions
  },
  build: {
    outDir: "build",
    sourcemap: true
  },
  css: {
    devSourcemap: true
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   coverage: {
  //     provider: "c8",
  //     reporter: ["text", "json", "html"],
  //     reportsDirectory: "./tests/unit/coverage"
  //   }
  // }
})
