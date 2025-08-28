import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure CSS is not minified in a way that breaks animations
    cssMinify: 'lightcss',
    // Preserve CSS animations and keyframes
    cssCodeSplit: true,
  },
  css: {
    // Ensure PostCSS processes CSS correctly
    postcss: './postcss.config.js',
    // Preserve CSS animations
    devSourcemap: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure build optimizations don't break animations
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Preserve CSS animations during build
  define: {
    __DEV__: mode === 'development',
  },
}));
