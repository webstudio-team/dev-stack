// Imports: Dependencies
const path = require("path")
require("@babel/register")
// Webpack Configuration
const config = {
  // Entry
  entry: "./assets/js/app.js",
  // Output
  output: {
    path: path.resolve(__dirname, "./dist/js/"),
    filename: "app.js"
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // Plugins
  plugins: [],
  // Reload On File Change
  watch: true,
  devtool: "source-map"
}

// Exports
module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.watch = true
  } else {
    config.watch = false
  }
  return config
}
