const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: { publicPath: "/" },
    module: {
        rules: [
            { // TSX 파일을 JS 파일로 변환하고 이를 로드합니다.
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
        alias: {
            react: path.resolve(__dirname, 'node_modules/react'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}