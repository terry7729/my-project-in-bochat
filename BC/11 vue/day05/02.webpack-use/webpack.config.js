// 导入path模块
const path = require('path');

module.exports = {
  // 入口 告诉webpack 照着哪个文件去打包
  entry: './src/index.js',
  // 出口 打包之后 到哪里去
  output: {
    // 文件名
    filename: 'bundle.js',
    // 路径 文件夹
    path: path.resolve(__dirname, 'dist')
  },
  // 开发服务器
  devServer: {
    // 网站根目录 www类似
    contentBase: './dist'
  },
  // 模块
  module: {
    // 规则
    rules: [{
        // 正则表达式 所有 .css 结尾的文件
        test: /\.css$/,
        // 使用 style-loader 和css-loader 去解析
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // .scss 结尾的文件
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  }
};