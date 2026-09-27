import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['netfinder.svg'],
      manifest: {
        name: 'Netfinder',
        short_name: 'Netfinder',
        description: 'Find something worth watching.',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        theme_color: '#09090b',
        background_color: '#09090b',
        icons: [
          { src: '/netfinder.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'netfinder-images',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          }
        ]
      }
    })
  ],
  server: { host: true, port: 5173 },
  build: { target: 'es2020', sourcemap: false }
});
