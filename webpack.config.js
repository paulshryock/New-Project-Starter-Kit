const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }/*,
          {
            loader: 'postcss-loader'
          }*/
        ]
      }
    ]
  },
  entry: './src/_assets/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'src/js')
  }
};