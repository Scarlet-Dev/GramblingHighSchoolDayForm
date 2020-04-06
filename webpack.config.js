"use strict"

const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [path.resolve(__dirname) + '/src/index.tsx', ],
    output: {
        filename: './dist/bundle.js'
     },
    devtool: 'inline-source-map',
    module: {
        rules:[
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader' ,
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre'
            },
            { 
                test: /\.s(c|a)ss?$/, 
                loader: 'sass',
                options: {
                    modules: true,
                    sourceMap: isDevelopment
                }
            },
            {
                test: /\.s(c|a)ss?$/,
                exclude: /\.module.(s(c|s)ss)$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            }
        ],
    },
    resolve: { 
        extensions: ['.ts', '.tsx', '.js', '.scss'] 
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css'
        })
    ]
}