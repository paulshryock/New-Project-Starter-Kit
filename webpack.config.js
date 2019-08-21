const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('@babel/register')
require('dotenv').config()

const webpackConfig = {

  name: process.env.ELEVENTY_ENV === 'production' ? 'production' : 'development',
  mode: process.env.ELEVENTY_ENV === 'production' ? 'production' : 'development',

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
            outputPath: (url, resourcePath, context) => {
              const splitPath = resourcePath.split('/')
              const assets = splitPath.indexOf('_assets')
              const path = splitPath.slice(assets + 1).join('/')
              return `/${path}`
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

const platform = process.env.PLATFORM

webpackConfig.entry = {
  platform: `./src/_assets/${platform}/js/${platform}.js`
}

module.exports = webpackConfig
