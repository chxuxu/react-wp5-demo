const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const {
  WebpackManifestPlugin
} = require('webpack-manifest-plugin');
//__webpack_public_path__ = myRuntimePublicPath;
module.exports = {
  mode: "development",
  entry: {
    home: "./src/home/index.js",
    page1: "./src/page1/index.js",
    webapi: "./src/webapi/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name]/[contenthash].js",
    clean: true
  },
  optimization: {
    runtimeChunk: true,
    //runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[hash:8].[ext]',
          esModule: false //不使用es6的模块语法
        }
      }],
      type: 'javascript/auto' //默认使用自定义的
    }, {
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
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
            minimize: true,
            math: 'always'
          }
          
        }
      }]
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ["@babel/env", "@babel/preset-react"]
        }
      }]

    }, {
      test: /\.tsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".td", ".ts", ".tsx"],
    alias:{
      //避免本地link调试时，react版本不统一的错误
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: "/home/index.html",
      template: "./src/home/index.html",
      inject: "body",
      chunks: ['home'],
      scriptLoading: "blocking",
      publicPath: "/"
    }),
    new htmlWebpackPlugin({
      filename: "/page1/index.html",
      template: "./src/page1/index.html",
      inject: "body",
      chunks: ['page1'],
      scriptLoading: "blocking",
      publicPath: "/"
    }),
    new htmlWebpackPlugin({
      filename: "webapi/index.html",
      template: "./src/webapi/index.html",
      inject: "body",
      chunks: ['webapi'],
      scriptLoading: "blocking",
      publicPath: "/"
    }),
    new WebpackManifestPlugin()
  ],
  devServer: {
    static: [{
      publicPath: "/",
      directory: "./dist"
    }, {
      publicPath: "/",
      directory: "./static"
    }],
    //contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    //本地服务输出给用户的页面里，资源文件地址的前缀路径,只有在你想要提供静态文件时才需要
    historyApiFallback:{
      rewrites:[
        {from:/^\/home/,to:'/home/index.html'},
        {from:/^\/page1/,to:'/page1/index.html'},
        {from:/^\/webapi/,to:'/webapi/index.html'}
      ]
    }// true, //使得所有访问路径可以访问到首页
  },
}