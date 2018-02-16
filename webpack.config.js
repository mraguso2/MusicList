const { resolve } = require('path'); // reading and manipulating paths
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  /* Context = base directory which to resolve our entry points
   * __dirname is a global Node variable that represents the path to the
   * executable that node is currently running - our case, app.js
  */
  context: resolve(__dirname, 'src'), // compile everything in src
  entry: [
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
  output: {
    filename: 'javascripts/build.js',
    path: '/',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // update on changed bits in build file
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('stylesheets/style.css'),
  ],
};
