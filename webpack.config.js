const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.tsx', '.ts'],
    plugins: [new TsConfigPathsPlugin()]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  plugins: [new CleanWebpackPlugin()]
};
