const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = env => ({
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    filename: path.join('client', 'dist', 'app.js'),
  },
  devtool: env === 'development' ? 'eval-cheap-module-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
        }),
      },
    ],
  },
  resolve: {
    modules: [`${__dirname}/node_modules`],
  },
  plugins: [
    new ExtractTextPlugin(path.join('client', 'dist', 'style.css')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor.js',
      filename: path.join('client', 'dist', 'vendor.js'),
      minChunks(module) {
        const { context } = module;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ],
});
