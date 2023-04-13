import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
    registerType: "prompt",
    workbox: {
        globPatterns: ["**/*"],
    },
    includeAssets: ["**/*"],
    manifest: {
        name: "Calculadora",
        short_name: "Calculadora",
        icons: [
            {
                src: "/public/icon.png",
                sizes: "1299x1299",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        orientation: "portrait",
    },
};

export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugin)],
});
