const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "assets"),
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, "assets/dist")
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'assets/dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].min.css"}),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCSSAssetsPlugin({}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "assets/src/templates/pages/index.pug"),
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: path.resolve(__dirname, "assets/src/templates/pages/nosotros.pug"),
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        }),
        new CopyPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, "assets/src/img"),
                  to: path.resolve(__dirname, "assets/dist/img") 
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                  self: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.s[ac]ss/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}