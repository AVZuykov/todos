import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'

export function buildResolvers(): webpack.ResolveOptions {
  return {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  }
}
