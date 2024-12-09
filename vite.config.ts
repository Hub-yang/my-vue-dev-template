import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueRouter(),
    Vue(),
    VueDevTools(),
    svgLoader(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    Components({
      dts: true,
    }),
    UnoCSS(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use '~/styles/variables.scss' as *;`,
      },
    },
  },
  build: {
    minify: 'terser', // 默认 esbuild，选择 terser 可能提供更高的压缩率
    terserOptions: {
      compress: {
        drop_console: true, // 压缩后删除 console.log
        drop_debugger: true, // 压缩后删除 debugger
      },
    },
    rollupOptions: {
      output: { // 手动拆分依赖，可以将常用的第三方库单独打包，减少主文件大小，并且利用缓存
        manualChunks: {
          'vue': ['vue'],
          'vue-router': ['vue-router'],
        },
      },
    },
  },
})
