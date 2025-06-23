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
const prefix = "18 多页面打包";
module.exports = {
    devtool: process.env.NODE_ENV === 'development' ? "inline-source-map" : false,
    entry: {
        "login": path.resolve(__dirname, prefix + "/src/login/index.js"),
        "content": path.resolve(__dirname, prefix + "/src/content/index.js")
    },
    output: {
        filename: "./[name]/bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, prefix + "/src/login/login.html"),
            filename: path.resolve(__dirname, "./dist/login/index.html"),
            useCdn: process.env.NODE_ENV === 'production',
            chunks: ['login']        //引入哪些导包后的模块（和entry的key一致）
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, prefix + "/src/content/index.html"),
            filename: path.resolve(__dirname, "./dist/content/index.html"),
            useCdn: process.env.NODE_ENV === 'production',
            chunks: ['content']        //引入哪些导包后的模块（和entry的key一致）
        }),
        new MiniCssExtractPlugin({
            filename: "./[name]]/style.css"
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
    },
    externals: process.env.NODE_ENV === 'development' ? {} : {
        "bootstrap/dist/css/bootstrap.min.css": "bootstrap",
        "axios": "axios"
    },
}