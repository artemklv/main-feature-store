const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example/src/index.jsx'),
  output: {
    path: path.join(__dirname, 'example/assets'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: [{loader: 'babel-loader'}],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, './src/actions'),
      styles: path.resolve(__dirname, './src/assets/styles'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      reducers: path.resolve(__dirname, './src/reducers'),
      services: path.resolve(__dirname, './src/utils'),
      store: path.resolve(__dirname, './src/store'),
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};
