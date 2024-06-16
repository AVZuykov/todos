import webpack from 'webpack'

import 'webpack-dev-server'
import type { BuildOptions } from './types/config'

export function buildDevServer({ isProd, port }: BuildOptions): webpack.Configuration['devServer'] {
  if (isProd) return undefined

  return {
    open: false,
    port,
    host: 'localhost',
  }
}
