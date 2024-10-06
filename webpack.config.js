const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");
const buildMode = process.env.NODE_ENV === "dev" ? "development" : "production";

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modeuls/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: buildMode,
  plugins: [
    new CleanWebpackPlugin(), // plugin 인자 순서가 실행 순서와 같음
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new DotenvWebpack({
      path: `./.env.${process.env.NODE_ENV || 'dev'}`,
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    open: true,
  }
};
