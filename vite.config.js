import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/machine-coding-2/',
  plugins: [react()],
  envPrefix: "CAC_",
});
