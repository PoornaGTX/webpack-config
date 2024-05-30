const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 'hello-world': './src/hello-world.js', kiwi: './src/kiwi.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    // clean: { dry: true },
  },
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      { test: /\.(png|jpg)$/, type: 'asset', parser: { dataUrlCondition: { maxSize: 3 * 11024 } } },
      { test: /\.txt/, type: 'asset/source' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.hbs$/, use: ['handlebars-loader'] },
    ],
  },

  plugins: [
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
