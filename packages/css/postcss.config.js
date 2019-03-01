const path = require('path');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const twConfigPath = path.resolve(__dirname, 'tailwind.js');

module.exports = {
  plugins: [atImport(), tailwind(twConfigPath), autoprefixer()],
};
