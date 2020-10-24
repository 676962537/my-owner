/**
 * Created by mahenan on 2017/10/20.
 */
// nodejs 中的path模块

let path = require('path');
let webpack = require('webpack');
let glob = require("glob")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        "app":"./src/app.ts",
        // "app2":"./src/entry2.ts"
    },
    // 输出配置
    output: {
        path: path.resolve('dist'),
        // path: 'output/static/[name]/',
        publicPath: '/',
        //上线时的使用  ex:可写http://cdn.com/取到的资源文件路径就是相对于这个地址的
    },
    resolve: {
        extensions: ['.css','.js', '.vue','.ts'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '../src')
        }
    },
    module: {
        rules: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.es6$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif|mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.jpg|\.png|\.jpeg/,
                use: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
                // 需要给vue组件后面拼接ts后缀供ts-loader编译使用，
                // 否则vue文件里面使用ts语法就会报错
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
