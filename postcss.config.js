const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');

module.exports = {
  plugins: [atImport(), tailwind('./tailwind.js'), autoprefixer()],
};
