import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  plugins: [new CleanWebpackPlugin()]
};
