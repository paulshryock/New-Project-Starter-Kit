"use strict";

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('@babel/register');

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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: (url, resourcePath, context) => {
                // `resourcePath` is original absolute path to asset
                // `context` is directory where stored asset (`rootContext`) or `context` option

                // To get relative path you can use
                // const relativePath = path.relative(context, resourcePath);

                const urlParts = url.split( '-' ),
                      fontFamily = urlParts[0],
                      fontWeight = urlParts[1];

                // if (/my-custom-image\.png/.test(resourcePath)) {
                //   return `other_output_path/${url}`;
                // }

                // if (/images/.test(context)) {
                //   return `image_output_path/${url}`;
                // }

                return `/fonts/${fontFamily}/${fontWeight}/${url}`;
              },
            }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: "./css/[name].css",
        chunkFilename: "./css/[id].css"
      }
    )
  ]

};