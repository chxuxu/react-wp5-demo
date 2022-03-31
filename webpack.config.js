const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
//__webpack_public_path__ = myRuntimePublicPath;
module.exports = {
  mode: "development",
  entry: {
    page1: "./src/page1/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    clean:true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[hash:8].[ext]',
            esModule: false  //不使用es6的模块语法
          }
        }
      ],
      type: 'javascript/auto' //默认使用自定义的
    },{
      test: /\.css$/i,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          url: true
        }
      }]
    }, {
      test: /\.less$/i,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader'
      }]

    }, {
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".td", ".ts", ".tsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: "./src/page1/index.html",
      inject: "body"
    }),
    new WebpackManifestPlugin()
  ],
  devServer: {
    static: './dist',
  },
}