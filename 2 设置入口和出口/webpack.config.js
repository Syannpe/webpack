/**
 * @version v1.0
 * @ClassNmae: webpack.config.js
 * @Description: desc
 * @Author: SYANNPE
 */
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "2 设置入口和出口/login/index.js"),
    output: {
        filename: "./login/bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                type: 'javascript/auto',
                parser: {
                    sourceType: 'module'
                }
            }
        ]
    }
}