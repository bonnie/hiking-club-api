const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

const moduleObj = {
  rules: [{
    test: /\.js|jsx$/,
    exclude: /node_modules/,
    loaders: ["babel-loader"],
  }, {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }],
    }),
  }],
};

const client = {
  entry: {
    'client': './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    }),
    new ExtractTextPlugin('index.css'),
  ]
};

const server = {
  entry: {
    'server': './src/server/index.js'
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: moduleObj,
  externals: [nodeExternals()]
}

module.exports = [client, server];
