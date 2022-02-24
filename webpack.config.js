const HtmlWebpackPlugin = require("html-webpack-plugin");
const path= require("path");

module.exports = {
    entry: { index: path.resolve(__dirname,'src','index.js')},
    output: {
        path: path.resolve(__dirname,'build'), //Default was dist but I change it to build dir
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html')
        })
    ],
}