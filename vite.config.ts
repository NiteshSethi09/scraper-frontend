import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), runtimeErrorOverlay()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "src", "shared"),
    },
  },
});
