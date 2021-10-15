const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash].bundle.js',
        clean: true
    },
    module: {
        rules: [ 
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            title: '{{ cookiecutter.project_name }}'
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].[contenthash].css",
            chunkFilename: "[id].css"
        })
    ]
};
