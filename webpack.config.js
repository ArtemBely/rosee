const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var browserConfig = {
      entry: ['babel-regenerator-runtime', './src/browser/index.js'],
      output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
      },
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.(js)$/,
            use: 'babel-loader'
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.(jpe?g|jpg|png|gif|svg|ico)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(woff(2)?|ttf|eot)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]"
              }
            }
         }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          __isBrowser__: "true"
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
      ]
}

var serverConfig = {
  entry: ['babel-regenerator-runtime', './src/server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  mode: 'production',
  module: {
    rules: [
      {
         test: /\.(js)$/,
         use: 'babel-loader'
      },
      {
         test: /\.css$/,
         exclude: /node_modules/,
         use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
         test: /\.(jpe?g|jpg|png|gif|svg|ico)$/i,
         use: [
           {
             loader: 'file-loader',
             options: {
               name: 'images/[name].[ext]'
             }
           }
         ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: {
            loader: "file-loader",
            options: {
                name: "fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}

module.exports = [browserConfig, serverConfig]
