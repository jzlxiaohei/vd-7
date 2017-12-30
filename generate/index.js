global.__IS_NODE__ = true;
global.__IS_DESIGN__ = false;
const babelConfig = require('./babel-config');



require('babel-core/register')(babelConfig);
// require('babel-polyfill');
require('./require-hook');
// require('./rollup');
require('./genCode');
