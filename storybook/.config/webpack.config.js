const path = require('path');

const package = filepath => path.resolve(__dirname, '../../packages', filepath);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: package('react'),
        use: {
          loader: 'babel-loader',
          options: {
            configFile: package('react/.babelrc'),
          },
        },
      },
      {
        test: /\.css$/,
        include: [__dirname, package('css')],
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: package('css'),
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@resketch/css': package('css/src/main.css'),
      '@resketch/react': package('react/src'),
    },
  },
};
