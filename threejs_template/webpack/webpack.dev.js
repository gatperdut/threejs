const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
const ip = require('internal-ip');
const portFinderSync = require('portfinder-sync');

module.exports = merge(
  commonConfiguration,
  {
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: portFinderSync.getPort(8080),
      https: false,
      open: false,
      hot: false,
      liveReload: false
    }
  }
);
