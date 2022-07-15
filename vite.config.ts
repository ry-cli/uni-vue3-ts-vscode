import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [uni()],
    server: {
        host: '0.0.0.0',
        proxy: {
            '/v1': {
                target: 'http:test.demo.com/',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
