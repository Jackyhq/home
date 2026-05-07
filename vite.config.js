import { defineConfig, loadEnv } from "vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import viteCompression from "vite-plugin-compression";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

const createLocalizedEntryHtml = () => {
  let outDir = "dist";

  return {
    name: "localized-entry-html",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    writeBundle() {
      const outputDir = resolve(process.cwd(), outDir);
      const indexPath = resolve(outputDir, "index.html");
      if (!existsSync(indexPath)) return;

      const ukHtml = readFileSync(indexPath, "utf8")
        .replace(/<html\s+lang="zh-CN">/, '<html lang="en">')
        .replace(
          /<link\s+rel="canonical"\s+href="https:\/\/jackyw\.cn\/"\s*\/?>/,
          '<link rel="canonical" href="https://jackyw.uk/" />',
        );

      writeFileSync(resolve(outputDir, "index-uk.html"), ukHtml);
    },
  };
};

// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          skipWaiting: true,
          clientsClaim: true,
          navigateFallback: null,
          runtimeCaching: [
            {
              urlPattern: /(.*?)\.(js|css|woff2|woff|ttf)/, // js / css 静态资源缓存
              handler: "CacheFirst",
              options: {
                cacheName: "js-css-cache",
              },
            },
            {
              urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 图片缓存
              handler: "CacheFirst",
              options: {
                cacheName: "image-cache",
              },
            },
          ],
        },
        manifest: {
          name: env.VITE_SITE_NAME,
          short_name: env.VITE_SITE_NAME,
          description: env.VITE_SITE_DES,
          display: "standalone",
          start_url: "/",
          theme_color: "#424242",
          background_color: "#424242",
          icons: [
            {
              src: "/images/icon/48.png",
              sizes: "48x48",
              type: "image/png",
            },
            {
              src: "/images/icon/72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "/images/icon/96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "/images/icon/128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "/images/icon/144.png",
              sizes: "144x144",
              type: "image/png",
            },
            {
              src: "/images/icon/192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/images/icon/512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
      viteCompression(),
      createLocalizedEntryHtml(),
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: srcDir,
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          pure_funcs: ["console.log"],
        },
      },
    },
  });
};
