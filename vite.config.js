import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: "Calculadora",
                short_name: "Calculadora",
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
                lang: "en",
                scope: "/",
                icons: [
                    {
                        src: "/icon.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
                theme_color: "#ffffff",
            },
        }),
    ],
});
