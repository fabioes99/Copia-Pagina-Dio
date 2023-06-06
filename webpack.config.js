const HtmlWebPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader"}
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader"}]
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader"]
      },
     /* {
        test: /\.(.png|jpe?g|gif)$/i,
        use: [ "file-loader" ]
      } */
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebPlugin({
      template: './public/index.html'
    })
  ]
}