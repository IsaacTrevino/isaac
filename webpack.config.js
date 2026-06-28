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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/index.html"),
      filename: "the-way/privacy/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/index.html"),
      filename: "the-way/terms/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client/index.html"),
      filename: "the-way/support/index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "client/public"), to: ".", noErrorOnMissing: true },
      ],
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "client/public"),
      watch: { usePolling: true, interval: 1000 },
      staticOptions: {
        fallthrough: true,
      },
    },
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/the-way\/(support|privacy|terms)\/?$/, to: "/index.html" },
        { from: /^\/the-way(\/.*)?$/, to: (context) => context.parsedUrl.pathname },
      ],
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) return middlewares;

      middlewares.unshift({
        name: "the-way-support",
        middleware: (req, _res, next) => {
          if (/^\/the-way\/(support|privacy|terms)\/?$/.test(req.path)) {
            req.url = "/index.html";
          }
          next();
        },
      });

      devServer.app.get(/\.wasm$/, (_req, res, next) => {
        res.setHeader("Content-Type", "application/wasm");
        next();
      });
      devServer.app.get(/\.pck$/, (_req, res, next) => {
        res.setHeader("Content-Type", "application/octet-stream");
        next();
      });
      return middlewares;
    },
    hot: true,
    watchFiles: {
      paths: ["client/**/*"],
      options: { usePolling: true, interval: 1000 },
    },
  },
  devtool: mode === "production" ? "source-map" : "eval-cheap-module-source-map",
});
