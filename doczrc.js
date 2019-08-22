const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;

export default {
  title: 'UI Components',
  description: 'This is Dashlane UI components lib documentation',
  codeSandbox: false,
  typescript: true,
  dest: 'docs',
  hashRouter: true,
  base: '/ui-components/',
  modifyBundlerConfig: config => {
    config.resolve.plugins = [new TsConfigPathsPlugin()];
    return config;
  }
};
