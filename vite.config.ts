import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// 🛠️ Remove top import of lovable-tagger — use inside config instead!

export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    const { componentTagger } = await import("lovable-tagger");
    plugins.push(componentTagger());
  }

  return {
    base: mode === "development" ? "./" : "/moving-page-creator/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
