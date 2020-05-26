"use strict"

const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    target: 'web',
    entry: [ './src/index.tsx' ],
    devtool: 'source-map',
    resolve: { 
        extensions: ['.ts', '.tsx', '.js', '.scss', '.css', '.json'] 
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
     },
     module: {
        rules:[
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader',
                include: [path.resolve(__dirname, "./src")],
                // presets: [''],
                exclude: [/node_modules/],
            },
            { 
                test: /\.s[c|a]ss?$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ] 
            },
            {
                test: /\.html/,
                loader: 'html-loader',
            }
        ],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            inject: true,
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css'
        })
    ]
}