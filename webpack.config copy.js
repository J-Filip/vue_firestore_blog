const path = require('path');

// add in imports
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
