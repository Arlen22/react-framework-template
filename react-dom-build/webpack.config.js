const path = require('path');
const webpack = require('webpack');
const jsonc = require("json5");
const { readFileSync } = require('fs');
function requireJSON(file) {
  return jsonc.parse(readFileSync(require.resolve(file)))
}
// A couple useful plugins which can be enabled
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = webpack;
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** 
 * @type {import("webpack").Configuration}
 */
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "assign",
    library: "render"
  },
  mode: "production",
  optimization: {
    minimize: true,
    nodeEnv: "production"
  },
  target: "web",

};