const { resolve } = require('path'); // reading and manipulating paths
const webpack = require('webpack');

module.exports = {
  /* Context = base directory which to resolve our entry points
   * __dirname is a global Node variable that represents the path to the
   * executable that node is currently running - our case, app.js
  */
  context: resolve(__dirname, 'src'), // compile everything in src
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'public', 'javascripts'),
    publicPath: '/javascripts',
  },
  // configure dev server
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, ''),
    publicPath: '/javascripts',
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
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // update on changed bits in build file
    new webpack.NamedModulesPlugin(),
  ],
};
