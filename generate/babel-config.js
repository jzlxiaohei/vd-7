const fs = require('fs');
const path = require('path');
const json5 = require('json5');
const _ = require('lodash');
const babelContent = fs.readFileSync(path.join(__dirname, '../.babelrc'));
const babelConfig = json5.parse(babelContent);

babelConfig.presets[0].splice(1);
// babelConfig.plugins[2][1].alias = _.mapValues(
//   babelConfig.plugins[2][1].alias,
//   val => '.'+ val
// )
babelConfig.plugins[1][1].alias['hoc/preview'] = './generate/code/preview';

module.exports = babelConfig;
