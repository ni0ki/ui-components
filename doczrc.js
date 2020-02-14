const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;
import { svgSpriteLoader } from 'docz-plugin-svg-sprite-loader';

export default {
  title: 'UI Components',
  description: 'This is Dashlane UI components lib documentation',
  typescript: true,
  dest: 'docs',
  host: 'localhost',
  hashRouter: true,
  base: '/ui-components/',
  plugins: [svgSpriteLoader()],
  menu: ['Getting Started', 'Components']
};
