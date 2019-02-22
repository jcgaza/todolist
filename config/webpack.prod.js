"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
  entry: [
    require.resolve("webpack-dev-server/client"),
    require.resolve("webpack/hot/dev-server"),
    "./src/app.js",
  ],
  output: {
    path: __dirname + "/../dist",
    filename: "bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.scss$/,
            use: [
              require.resolve("style-loader"),
              MiniCssExtractPlugin.loader,
              { loader: "css-loader" },
              {
                loader: "sass-loader",
                options: {
                  outputStyle: "compressed",
                },
              },
            ],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.png$/, /\.jpe?g$/],
            loader: require.resolve("url-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      filename: "index.html",
      template: "./src/index.html",

      title: "To-do List",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new Dotenv(),
  ],
};