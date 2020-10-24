let webpack = require('webpack');
let webpackMerge = require("webpack-merge");
let base = require("./webpack.base.config");
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let TerserPlugin = require('terser-webpack-plugin');
let optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
const config = webpackMerge(base, {
  mode: "none",
  // mode: "production",
  // 输出配置
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: "js/[name].[chunkhash:4].js"
  },
  optimization: {
    minimize: true,
    removeAvailableModules: false,
    minimizer: [
      // // 压缩js文件，可以自定义配置
      // new TerserPlugin(),
      // // 压缩css文件，可以自定义配置
      // new optimizeCSSAssetsPlugin()
    ],
    // runtimeChunk: 'single',
    splitChunks: {
      // chunks:'all',
      // automaticNameDelimiter: '-',
      minSize: 0,
      // cacheGroups: {
      //   // 详细配置的优先级 比较高 相对比公用配置
      //   // 自定义vendor会将代码内部动态引入的所有第三方模块都打包进vendor而不生成独立的chunk
      //   vendor: {
      //     chunks: "all",
      //     test: /[\\/]node_modules[\\/]/
      //   },
      //   // 提取公共代码（非node_modules下），范围可以是所有主chunk和异步chunk
      //   common: {
      //     // minChunks数与按需加载有冲突，按需加载就是引入了一次，
      //     // minChunks设置1的时候，按需加载的模块不会单独生成chunk了而是会被打包进common
      //     name: "commons",
      //     // test: /[\\/]src[\\/]/,
      //     chunks: "async",
      //     // 最小的chunk引用数,大于 等于才会被抽离
      //     minChunks: 2,
      //     // 为了测试common打包，设置成0表示大于0的chunk就可以被创建，默认30000
      //     minSize: 0,
      //     priority:10
      //   }
      // }
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:path.resolve('public/index.html'),
      minify: {
        // 尽可能删除属性周围的引号
        removeAttributeQuotes:true,
        // 删除注释
        removeComments: true,
        // 删除空格
        collapseWhitespace: true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true
      }
    })
  ]
});

module.exports = config