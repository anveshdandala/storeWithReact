import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/storeWithReact/", // This ensures it runs at http://localhost:5174/
});
