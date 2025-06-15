import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vite.dev/config/

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/react_shop_project/" : "/",
  plugins: [react(), svgr()],
}));
