'use strict';
require('es6-promise').polyfill();

module.exports = {
  entry: "./src/js/main.jsx",
  output: {
    path: './dist',
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css' },
      {test: /\.json$/, loader: 'json-loader' },

      {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'react'] } }
    ]
  }
};
