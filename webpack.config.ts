import { resolve as _resolve } from 'path'
import webpack from 'webpack'

import buildWebpackConfig from './config/build'
import type { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const port = Number(env.port || 3001)

  const paths: BuildPaths = {
    entry: _resolve(__dirname, 'src', 'main.tsx'),
    build: _resolve(__dirname, 'dist'),
    html: _resolve(__dirname, 'public', 'index.html'),
  }

  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isProd,
    port,
  })

  return config
}
