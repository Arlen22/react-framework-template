
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

function copyFile(from) {
  from = require.resolve(from);
  return { from, to: path.basename(from) }
}

require("./package.json");

// const entry = 
// entry.files
// jsonc.parse(readFileSync(require.resolve("./tsconfig"), "ascii")).files.map((e) => {
//   entry[path.basename(e).split(".")[0]] = require.resolve(e);
// });
// const ClosurePlugin = require('closure-webpack-plugin');
/** 
 * @type {import("webpack").Configuration}
 */
module.exports = {
  watch: true,
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "react-native": require.resolve("react-native-web"),
      "src": path.join(__dirname, "src")
    }
  },
  externals: {
    'utf-8-validate': 'commonjs utf-8-validate',
    'bufferutil': 'commonjs bufferutil',
    "uws": "root uws",
    "react-dom": "root ReactDOM",
    "react": "root React"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", options: { transpileOnly: true, configFile: "tsconfig.json" } },
      { test: /\.(png|svg|jpg|gif|ico|html)$/, use: ['file-loader'] }
    ]
  },
  entry: requireJSON("./tsconfig.json").files,
  output: {
    filename: '[name]-lib.js',
    path: path.resolve(__dirname, './build'),
    library: "",
    libraryTarget: "var",
    // globalObject: "__window__"
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    //clean the build directory
    new CleanPlugin(),
    // define global variables
    new DefinePlugin({}),
    // compress assets into gzip files
    // new CompressionPlugin({
    //   algorithm: "gzip",
    //   minRatio: 0.75
    // }),
    // copy raw assets to the output (such as an asset directory)
    new CopyPlugin([
      // { from: 'relative/to/this/file', to: 'relative/to/build/folder' },
      copyFile('./src/index.html'),
      copyFile("react/umd/react.production.min.js"),
      copyFile("react-dom/umd/react-dom.production.min.js"),

    ])
  ],
  mode: false ? "development" : "production",
  target: 'web',
  node: {
    // global: true,
    //false uses default node behaviour
    __dirname: false,
    //false uses default node behaviour
    __filename: false
  },

};
