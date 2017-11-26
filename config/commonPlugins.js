const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const minify = process.env.NODE_ENV === 'production' ? {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
}: false ;

module.exports = [
  new webpack.DefinePlugin({
    __IS_NODE__: JSON.stringify(false),
    __IS_DESIGN__: JSON.stringify(true),
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
    filename: 'index.html',
    minify,
    chunks:['main'],
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.previewHtml,
    filename: 'preview.html',
    minify,
    chunks:['preview'],
  }),
]
