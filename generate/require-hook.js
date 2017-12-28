
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const originJsxExtension = require.extensions['.jsx'];

function hook(compile, extension) {
  require.extensions[extension] = (m, filename) => {
    const tokens = compile(filename);
    // if (process.env.NODE_ENV !== 'production') {
    //   delete require.cache[filename];
    // }
    delete require.cache[filename];
    return m._compile('module.exports = ' + JSON.stringify(tokens), filename);
  };
}

function empty() {
  return '';
}

// function outputFileContent(fileName) {
//   return fs.readFileSync(fileName).toString();
// }

const widgetsDir = path.join(__dirname, '../src/widgets');

hook(empty, '.less');

hook(empty, '.css');

hook(function(fileName, m) {
  const relativePath = path.relative(widgetsDir, fileName );
  if(relativePath && _.endsWith(fileName, 'Preview.jsx')) {
    return `widgets/${relativePath}`;
  }
  return originJsxExtension(m, fileName);
}, '.jsx')
