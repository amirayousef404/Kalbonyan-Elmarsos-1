const path = require("path")

module.exports = {
  entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  devServer: {
    // contentBase
    static: {
      directory: path.join(__dirname, "public"),
    },
    // publicPath
    devMiddleware: {
      publicPath: "/scripts/",
    },
  },
  devtool: "source-map",
}
