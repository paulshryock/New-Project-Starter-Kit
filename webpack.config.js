const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('@babel/register')

module.exports = {

  name: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: {
    app: './src/_assets/app/js/app.js',
    cms: './src/_assets/cms/js/cms.js',
    email: './src/_assets/email/js/email.js',
    site: './src/_assets/site/js/site.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './[name]/js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: (url, resourcePath, context) => {
                const splitPath = resourcePath.split('/')
                const assets = splitPath.indexOf('_assets')
                const path = splitPath.slice(assets + 1).join('/')
                return `/${path}`
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/_assets/fonts'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: (url, resourcePath, context) => {
              const urlParts = url.split('-')
              const fontFamily = urlParts[0]
              const fontWeight = urlParts[1]

              // TODO (paulshryock): Test font processing
              return `/fonts/${fontFamily}/${fontWeight}/${url}`
            }
          }
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: './[name]/css/[name].css',
        chunkFilename: './[name]/css/[id].css'
      }
    )
  ]

}
