import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
const plugins = [react()];
plugins.unshift(MillionLint.vite() as any);
export default defineConfig({
  plugins: plugins,
  server: {
    port: 3000,
  },
});
