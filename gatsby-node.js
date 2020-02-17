const TsConfigPathsPlugin = require('awesome-typescript-loader')
  .TsConfigPathsPlugin;

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsConfigPathsPlugin()]
    }
  });
};
