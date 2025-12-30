import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  plugins: [react()],
});
