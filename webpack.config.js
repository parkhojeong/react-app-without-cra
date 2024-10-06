const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ]
};
