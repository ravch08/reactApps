import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const _plugins = [react()];
export default defineConfig({
  plugins: _plugins,
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
  },
});
