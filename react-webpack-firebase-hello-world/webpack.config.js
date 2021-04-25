const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

console.log(path.join(__dirname, "public/js"))

module.exports = {
  entry: {
    app: "./src/main.jsx"
  },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      inject: true,
      template: path.join(__dirname, "public/index.html"),
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /(\.js|.jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules",
        options: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      }
    ]
  }
}
