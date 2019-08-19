const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const appSrc = path.resolve(__dirname, '../src');
const output = path.resolve(__dirname, '../output');
const appIndex = path.resolve(appSrc, 'index.js');
const appHtml = path.resolve(appSrc, 'index.html');

module.exports = {
    entry: appIndex,
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'js/[name].[hash:8].js',
        path: output,
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: appHtml,
        }),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?cacheDirectory',
                include: [appSrc],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        localIdentName: '[local].[hash:8]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                },
                {
                    loader: 'scss-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }
                ]
            },
            {
                test: /\.(css|scss)$/,
                include: /node_modules/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                },
                {
                    loader: 'scss-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }
                ]
            },
            // 解析图片资源
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 解析 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 解析数据资源
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            // 解析数据资源
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            // 解析 MakeDown 文件
            {
                test: /\.md$/,
                use: [
                    'html-loader',
                    'markdown-loader'
                ]
            }

        ]
    },
    devServer: {
        contentBase: appSrc,
        hot: true,
        host: 'localhost',
        port: 8000,
        historyApiFallback: true,
        // 是否将错误展示在浏览器蒙层
        overlay: true,
        inline: true,
        // 打印信息
        stats: 'errors-only'
        // 设置代理
        // proxy: {
        //     '/api': {
        //         changeOrigin: true,
        //         target: 'https://easy-mock.com/mock/5c2dc9665cfaa5209116fa40/example',
        //         pathRewrite: {
        //             '^/api/': '/'
        //         }
        //     }
        // }
    },
    resolve: {
        alias: {
            Src: appSrc,
            Utils: path.resolve(__dirname, '../src/utils'),
            Modules: path.resolve(__dirname, '../src/modules'),
            Components: path.resolve(__dirname, '../src/components'),
            Routers: path.resolve(__dirname, '../src/routers'),
            Medias: path.resolve(__dirname, '../src/medias'),
        },
        modules: [path.resolve(__dirname, '../node_modules')],
    }


}    
