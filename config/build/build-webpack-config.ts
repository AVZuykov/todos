import webpack from 'webpack'

import 'webpack-dev-server'
import { buildDevServer } from './build-dev-server'
import { buildLoaders } from './build-loaders'
import { buildPlugins } from './build-plugins'
import { buildResolvers } from './build-resolvers'
import type { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  const config: webpack.Configuration = {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].js',
      clean: true,
    },
    devServer: buildDevServer(options),
    devtool: isDev ? 'inline-source-map' : false,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
  }

  return config
}
