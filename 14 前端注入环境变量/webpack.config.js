/**
 * @version v1.0
 * @ClassNmae: webpack.config.js
 * @Description: desc
 * @Author: SYANNPE
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "14 前端注入环境变量/src/login/index.js"),
    output: {
        filename: "./login/bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "14 前端注入环境变量/src/login/login.html"),
            filename: path.resolve(__dirname, "./dist/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "./login/style.css"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                type: 'javascript/auto',
                parser: {
                    sourceType: 'module'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
        ]
    },
    optimization: {
        minimizer: [
            "...",
            new CssMinimizerPlugin()
        ]
    }
}