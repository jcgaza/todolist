"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../src/", "app.js"),
  },
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "[name].js",
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
      filename: path.join(".", "dist", "index.html"),
      template: path.resolve(".", "src", "index.html"),
      title: "To-do List",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new Dotenv(),
  ],
  devtool: "source-map",
};
