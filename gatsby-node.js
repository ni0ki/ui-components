const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.resolve.plugins = [new TsConfigPathsPlugin()];
};
