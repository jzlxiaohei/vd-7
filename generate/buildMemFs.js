const path = require('path');
const fs = require('fs');
const MemoryFileSystem = require('memory-fs');
const glob = require('glob');

module.exports = function buildMemFs(dir) {
  const memFs = new MemoryFileSystem();
  memFs.mkdirpSync(dir);
  const clientFiles = glob.sync(path.join(dir, '*'));
  const clientFileContentPairs = clientFiles.map((filename) => {
    const data = fs.readFileSync(filename);
    return { filename, data };
  });

  const statOrig = memFs.stat.bind(memFs);
  const readFileOrig = memFs.readFile.bind(memFs);
  memFs.stat = (_path, cb) => {
    statOrig(_path, (err, result) => {
      if (err) {
        return fs.stat(_path, cb);
      }
      return cb(err, result);
    });
  };

  memFs.readFile = (path, cb) => {
    readFileOrig(path, (err, result) => {
      if (err) {
        return fs.readFile(path, cb);
      }
      return cb(err, result);
    });
  };

  clientFileContentPairs.forEach((pair) => {
    const { filename, data } = pair;
    memFs.writeFileSync(filename, data);
  });

  return memFs;
}

