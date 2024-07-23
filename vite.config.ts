/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
});
