import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: adjust base if deploying to GitHub Pages under a repo name
// Example: https://<user>.github.io/PortfolioV2/  => base: "/PortfolioV2/"
export default defineConfig({
  plugins: [react()],
  base: "/FinalPortfolio/"
});
