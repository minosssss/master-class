import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api requests to the backend server
      "/sign-in": {
        target: "http://localhost:8080", // Replace with your backend URL
        changeOrigin: true,
      },
      "/refresh-token": {
        target: "http://localhost:8080", // Replace with your backend URL
        changeOrigin: true,
      },
    },
  },
});
