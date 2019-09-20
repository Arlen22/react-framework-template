
const path = require('path');
const webpack = require('webpack');
const jsonc = require("json5");
const { readFileSync } = require('fs');

// A couple useful plugins which can be enabled
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = webpack;

const entry = {};
jsonc.parse(readFileSync(require.resolve("./tsconfig"), "ascii")).files.map((e) => {
  entry[path.basename(e).split(".")[0]] = require.resolve(e);
});
// const ClosurePlugin = require('closure-webpack-plugin');
/** 
 * @type {import("webpack").Configuration}
 */
module.exports = {
  watch: true,
  devtool: "source-map",
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", options: { transpileOnly: false } },
      { test: /\.(png|svg|jpg|gif|ico)$/, use: ['file-loader'] }
    ]
  },
  entry,
  output: {
    filename: '[name]-lib.js',
    path: path.resolve(__dirname, './build'),
    library: "",
    libraryTarget: "var",
    // globalObject: "__window__"
  },
  optimization: {
    // minimize: false,
  },
  plugins: [
    //clean the build directory
    new CleanPlugin(),
    // define global variables
    new DefinePlugin({}),
    // compress assets into gzip files
    new CompressionPlugin({
      algorithm: "gzip",
      minRatio: 0.75
    }),
    // copy raw assets to the output (such as an asset directory)
    new CopyPlugin([
      // { from: 'relative/to/this/file', to: 'relative/to/build/folder' },
    ])
  ],
  mode: "none", //false ? "development" : "production",
  target: 'web',
  node: {
    // global: true,
    //false uses default node behaviour
    __dirname: false,
    //false uses default node behaviour
    __filename: false
  },
  externals: {
    'utf-8-validate': 'commonjs utf-8-validate',
    'bufferutil': 'commonjs bufferutil',
    "uws": "root uws"
  }
};
