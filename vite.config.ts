
import { BuildConfig, ServerConfig } from 'vite'

// const path = require('path')
import path from 'path'
// console.log(path.resolve(__dirname,), path.resolve(__dirname, './src/styles/abstracts/*.styl'))

const config: ServerConfig = {
  alias: {
    '@/': path.resolve('./src'),
    // 'ali-oss': 'node_modules/ali-oss/dist/aliyun-oss-sdk.min.js'
    // '/src/': path.resolve( __dirname, '/visual/src' ),
  },
  cssPreprocessOptions: {
    // prefix: 'kkdy-'\
  },
  proxy: {
    // '/foo': 'http://localhost:7001',
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ''),
      logs: true
    }
  },
  cors: true
}

export default config
