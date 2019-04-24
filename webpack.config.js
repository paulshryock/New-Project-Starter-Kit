'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('@babel/register')

module.exports = {

  name: process.env.NODE_ENV == 'production' ? 'production' : 'development',
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

  entry: {
    app: './src/_assets/js/app.js',
    cms: './src/_assets/js/cms.js',
    development: './src/_assets/js/development.js'
  },

  output: {
    path: path.resolve(__dirname, 'src'),
    filename: './js/[name].js'
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
        include: path.resolve(__dirname, 'src/_assets/img'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[folder]/[name].[ext]',
              outputPath: 'img'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: path.resolve(__dirname, 'src/_assets/fonts'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: (url, resourcePath, context) => {
              const urlParts = url.split('-')

              const fontFamily = urlParts[0]

              const fontWeight = urlParts[1]
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
        filename: './css/[name].css',
        chunkFilename: './css/[id].css'
      }
    )
  ]

}
