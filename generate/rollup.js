// require('./require-hook');
const path = require('path');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const less = require('rollup-plugin-less');

rollup.rollup({
  input: path.join(__dirname, 'code/code.js'),
  plugins: [
    json(),
    less({
      output: async (e) => {
        return await '';
      }
    }),
    resolve(),
    commonjs({

    }),
    babel({
      exclude: [
        'node_modules/**',

      ]
    }),
  ],
  external: ['react', 'react-dom'],
}).then(async bundle => {
  const result = await bundle.generate({
    format: 'iife',
    strict: false,
    name: 'v7_widget',
    globals:  {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  });
  console.log(result.code);
}).catch(e => {
  console.error(e);
})
