const devMode = process.env.NODE_ENV === 'production' ? false : true
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './app.js',
  devtool: devMode ? 'eval-source-map': undefined,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module:  { },
  plugins: [ ]
};

if (devMode) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config;
