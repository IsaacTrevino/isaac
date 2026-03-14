const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_, { mode }) => ({
  entry: path.resolve(__dirname, "client/src/main.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: mode === "production" ? "static/js/[name].[contenthash:8].js" : "static/js/bundle.js",
    chunkFilename: mode === "production" ? "static/js/[name].[contenthash:8].chunk.js" : "static/js/[name].chunk.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/media/[name].[hash:8][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/index.html"),
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "client/public"), to: ".", noErrorOnMissing: true },
      ],
    }),
  ],
  devServer: {
    static: { directory: path.join(__dirname, "client/public") },
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  devtool: mode === "production" ? "source-map" : "eval-cheap-module-source-map",
});
