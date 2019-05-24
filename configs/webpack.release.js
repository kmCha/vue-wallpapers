/*
 *  正式环境使用的配置
 */
const paramConfig = require('./webpack.params');
const path = require('path');
const os = require("os");
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

//webpack 4.x 版本运行时，mode 为 production 即会启动压缩 JS 代码的插件

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = merge.smart(baseConfig, {
	output: {
		path: path.resolve(__dirname, '../release'),
		filename: 'js/[name]_[chunkhash:8].js',
		chunkFilename: 'js/[name]_[chunkhash:8].js',
		publicPath: paramConfig.cdn_path_release,
    jsonpFunction: 'leihuoJsonp'
	},
	plugins : [
		new webpack.HashedModuleIdsPlugin(),
		new MiniCssExtractPlugin({
	      filename: "css/[name]_[contenthash:8].css",
	      publicPath : "css"
	    }),
    new webpack.DefinePlugin({
      __DEBUG: JSON.stringify(false),
      __CDNPATH : JSON.stringify(paramConfig.cdn_path_release)
    }),
    new HappyPack({
      id : "less",
      threadPool: happyThreadPool,
      loaders : [
        {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        },
        'sprites-loader',
        'less-loader'
      ]
    })
	],
	module: {
		rules: [
			//构建 CSS
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			//CSS 预处理器
			{
				test: /\.less$/,
				// 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
        use: [
          MiniCssExtractPlugin.loader,
          //'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'sprites-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },
        ]
			}
		]
	}
})
module.exports = config
