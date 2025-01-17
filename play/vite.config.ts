import path from "node:path";
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: /^use-semantic-version$/,
          replacement: path.join(__dirname, '../src/hooks/index.ts'),
        },
      ],
    },
    server: {
      port: 8989,
      host: true,
      https: !!env.HTTPS,
    }
  }
})
