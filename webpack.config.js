const path = require('path');

module.exports = {
  entry: './src/_assets/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};