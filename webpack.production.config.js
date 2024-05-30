const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 'hello-world': './src/hello-world.js', kiwi: './src/kiwi.js' },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    // clean: { dry: true },
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000,
    },
  },
  module: {
    rules: [
      { test: /\.(png|jpg)$/, type: 'asset', parser: { dataUrlCondition: { maxSize: 3 * 11024 } } },
      { test: /\.txt/, type: 'asset/source' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.hbs$/, use: ['handlebars-loader'] },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello world',
      template: 'src/page-template.hbs',
      description: 'Hello world',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'Kiwi',
      template: 'src/page-template.hbs',
      description: 'Kiwi',
      minify: false,
    }),
  ],
};
