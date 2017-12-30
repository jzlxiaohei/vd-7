const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const path = require('path');
const fs = require('fs');
const buildMemFs = require('./buildMemFs');

const codeDir = path.join(__dirname, 'code');

function generate() {
  return new Promise((resolve, reject) => {
    const memFs = buildMemFs(codeDir);
    const compiler = webpack(webpackConfig);
    compiler.inputFileSystem = memFs;
    compiler.resolvers.normal.fileSystem = memFs;
    compiler.outputFileSystem = memFs;
    compiler.run((err, stats) => {
      if (err) {
        return reject({
          message: 'webpack compile error',
          err,
          stats,
        });
      }
      const info = stats.toJson();
      if (stats.hasErrors()) {
        return reject({
          message: 'webpack stats has errors',
          err: info.errors,
        });
      }

      // if (stats.hasWarnings()) {
      //   console.warn(info.warnings);
      // }
      const fileContent = memFs.readFileSync(path.join(__dirname, 'dist/main.js'));
      resolve(fileContent.toString())
    });
  });
}

generate()
  .then(content => fs.writeFileSync(path.join(__dirname, 'code/dist.js'), content))
  .catch(err => console.dir(err));

