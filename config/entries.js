const paths = require('./paths');
const _ = require('lodash');

let entries = {
  main: [
    paths.appIndexJs
  ],
  preview: [
    paths.appPreviewIndexJs
  ]
}
if(process.env.NODE_ENV !== 'production') {
  entries = _.mapValues(entries, val => {
    return [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    'react-hot-loader/patch',
    ].concat(val);
  })
}

module.exports = entries;
