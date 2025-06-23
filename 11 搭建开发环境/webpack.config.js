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

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "11 搭建开发环境/src/login/index.js"),
    output: {
        filename: "./login/bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "11 搭建开发环境/src/login/login.html"),
            filename: path.resolve(__dirname, "./dist/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "./login/style.css"
        })
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
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
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