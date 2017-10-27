const config = require('./webpack.config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server',
  path.join(__dirname, 'dev/index.jsx')
]
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new HtmlWebpackPlugin({
    template: 'dev/index.html',
    publicPath: '/'
  })
);

module.exports = config;
