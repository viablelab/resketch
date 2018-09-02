const themeVariables = require('./theme');

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      browsers: 'last 2 versions',
      features: {
        'custom-properties': {
          preserve: false,
          variables: themeVariables,
        },
      },
    }),
  ],
};
