import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { Configuration } from 'webpack'

import type { BuildOptions } from './types/config'

export function buildPlugins({ paths, isProd }: BuildOptions): Configuration['plugins'] {
  return [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    isProd ? new MiniCssExtractPlugin() : undefined,

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ]
}
