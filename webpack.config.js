const config = require('config')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('@babel/register')

const webpackConfig = {

  name: config.get('eleventy.environment') || 'development',
  mode: config.get('eleventy.environment') || 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './[name]/js/[name].js'
  },

  entry: {},

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

const platform = config.get('eleventy.platform')

switch (platform) {
  case 'app':
    webpackConfig.entry.app = `./src/_assets/${platform}/js/${platform}.js`
    break
  case 'cms':
    webpackConfig.entry.cms = `./src/_assets/${platform}/js/${platform}.js`
    break
  case 'email':
    webpackConfig.entry.email = `./src/_assets/${platform}/js/${platform}.js`
    break
  case 'site':
    webpackConfig.entry.site = `./src/_assets/${platform}/js/${platform}.js`
    break
}

module.exports = webpackConfig
