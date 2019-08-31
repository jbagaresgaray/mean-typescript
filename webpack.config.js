const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackShellPlugin = require("webpack-shell-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const bundleOutputDir = path.resolve(__dirname, "build");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV,
  target: "node",
  output: {
    path: bundleOutputDir,
    filename: "api.min.js"
  },
  devServer: {
    contentBase: bundleOutputDir
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["npm run watch"]
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        },
        minify: {},
        compress: {
          booleans: true,
          unused: false
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }
    ]
  }
};
