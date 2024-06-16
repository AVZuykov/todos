import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

import type { BuildOptions } from './types/config'

export function buildLoaders({ isProd }: BuildOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.(ts|tsx)$/i,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
          },
        },
        'ts-loader',
      ],
      exclude: ['/node_modules/'],
    },
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: 'asset',
    },

    // Add your rules for custom modules here
    // Learn more about loaders from https://webpack.js.org/loaders/
  ]
}
