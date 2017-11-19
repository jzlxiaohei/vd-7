const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin({
    __IS_NODE__: JSON.stringify(false),
    __IS_DESIGN__: JSON.stringify(true),
  }),
]
