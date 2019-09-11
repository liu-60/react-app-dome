const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === 'development';
const APP_CONFIG = require('../env-config.json');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        verdor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'verdors',
          chunks: 'all',
          priority: -10,
        },
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          priority: -20,
        }
      }
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
          cache: true,
          formatter: require("eslint-friendly-formatter"),
        }
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=js',
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },

          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }


        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.resolve(__dirname, '..', 'dist', 'dll', "react_antd-manifest.json"))
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      APP_CONFIG: JSON.stringify(APP_CONFIG)
    }),
    new webpack.ProvidePlugin({

      React: 'react',

    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '..', 'dist/index.html'),
      template: path.resolve(__dirname, '..', 'dist/dll/index.html'),
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [['@babel/preset-env', {
            "useBuiltIns": "usage",
            "corejs": 3
          }], "@babel/preset-react"],
          plugins: ['@babel/transform-runtime',
            "@babel/plugin-proposal-class-properties", [
              "import",
              {
                "libraryName": "antd",
                "style": true
              }
            ]
          ]
        }
      }]
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
      common: path.resolve(__dirname, '..', 'common'),
      react$: path.resolve(__dirname, '..', 'node_modules/react'),
    },
    extensions: ['.js', '.json'],
    modules: [path.resolve(__dirname, '..', "src"), "node_modules"]
  }
}