const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  entry: "./dev/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "devdist"),
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
  ],
};
