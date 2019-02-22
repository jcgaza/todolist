"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: __dirname + "/../src/app.js",
  },
  output: {
    path: __dirname + "/../dist",
    publicPath: "/",
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
      filename: __dirname + "/../dist/index.html",
      template: __dirname + "/../src/index.html",
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
