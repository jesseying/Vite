import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import PkgConfig from 'vite-plugin-package-config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const VITE_BASE_URL: string = loadEnv(mode, process.cwd()).VITE_BASE_URL
  return defineConfig({
    base: '/',
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      Components({
        dts: 'src/components.d.ts',
        deep: true,
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        resolvers: []
      }),
      PkgConfig(),
      OptimizationPersist()
    ],
    server: {
      host: true,
      port: 1818,
      cors: true,
      https: false,
      strictPort: true, // 如果端口占用直接退出
      proxy: {
        '/api': {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path: any) => path.replace(/^\/api/, '') // 不可以省略rewrite
        }
      },
      open: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/')
      }
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/var.scss";' // 全局公共样式
        }
      }
    },
    optimizeDeps: {
      // include: ['@ant-design/icons-vue', 'element-plus']
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets' //指定生成静态资源的存放路径
    }
  })
}
