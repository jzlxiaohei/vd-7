const path = require('path');
const distPath = path.join(__dirname, 'dist');
const babelConfig = require('./babel-config');
const autoprefixer = require('autoprefixer');


const commonStyleLoader = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      minimize: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        }),
      ],
    },
  },
  {
    loader: 'less-loader',
  },
];

module.exports = {
  bail: true,
  entry: path.join(__dirname, './code/test.jsx'),
  output: {
    filename: '[name].js', // the output bundle
    path: distPath,
    publicPath: '/',
    chunkFilename: '[name].js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      'hoc/preview': path.join(__dirname, 'code/preview.jsx'),
    }
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },
  module: {
    rules: [// Process JS with Babel.
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
          cacheDirectory: true,
          babelrc: false,
          ...babelConfig,
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          ...commonStyleLoader,
        ],
      }
    ]
  }
};
