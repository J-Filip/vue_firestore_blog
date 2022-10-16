const path = require('path');

// add in imports
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    clean: true,
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        include: path.resolve(__dirname, 'src/assets/'),
        use: [

          // compiles Less to CSS.
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  // inače vraća 404 kad refreshamo neke route, provjeriti još.
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // chunks: ['css/main'],
    }),
  ],
};
