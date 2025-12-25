import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite configuration for garuda-temple-koladevi
 * - React 19 compatible
 * - API proxy for backend integration
 * - Base URL support for production deployment
 */
export default defineConfig(({ mode }) => {
    const base =
        process.env.VITE_BASE_URL ||
        process.env.BASE_URL ||
        "/";

    return {
        base,

        plugins: [react()],

        server: {
            port: 5173,
            open: true,
            proxy: {
                "/api": {
                    target: "http://localhost:5000",
                    changeOrigin: true,
                    secure: false
                }
            }
        },

        build: {
            outDir: "dist",
            sourcemap: mode === "development"
        }
    };
});