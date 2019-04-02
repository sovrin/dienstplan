const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {parsed} = require('dotenv').config();

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 24.02.2019
 * Time: 19:00
 */
module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify(parsed),
        }),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/../src/index.html',
            title: 'New Force - Dienstplan',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
    },
};
