// vite.config.js
import { defineConfig } from "file:///home/asura/Desktop/codeverse/web1/NovelSite/client/node_modules/vite/dist/node/index.js";
import react from "file:///home/asura/Desktop/codeverse/web1/NovelSite/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api" : "http://127.0.0.1:5000"
      // "/api" : "https://mystic-reads-api.vercel.app", 
      target: "https://mystic-reads-api.vercel.app"
      // changeOrigin: true,
      // // rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hc3VyYS9EZXNrdG9wL2NvZGV2ZXJzZS93ZWIxL05vdmVsU2l0ZS9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2FzdXJhL0Rlc2t0b3AvY29kZXZlcnNlL3dlYjEvTm92ZWxTaXRlL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hc3VyYS9EZXNrdG9wL2NvZGV2ZXJzZS93ZWIxL05vdmVsU2l0ZS9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgIC8vIFwiL2FwaVwiIDogXCJodHRwOi8vMTI3LjAuMC4xOjUwMDBcIlxuICAgIC8vIFwiL2FwaVwiIDogXCJodHRwczovL215c3RpYy1yZWFkcy1hcGkudmVyY2VsLmFwcFwiLCBcbiAgICB0YXJnZXQgOiBcImh0dHBzOi8vbXlzdGljLXJlYWRzLWFwaS52ZXJjZWwuYXBwXCIsXG4gICAgLy8gY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgIC8vIC8vIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLG9CQUFvQjtBQUN4VyxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBO0FBQUEsTUFHUCxRQUFTO0FBQUE7QUFBQTtBQUFBLElBR1Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
