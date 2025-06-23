/**
 * @version v1.0
 * @ClassNmae: webpack.config.js
 * @Description: desc
 * @Author: SYANNPE
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "6 提取css代码/src/login/index.js"),
    output: {
        filename: "./login/bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "6 提取css代码/public/login.html"),
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
            }
        ]
    }
}