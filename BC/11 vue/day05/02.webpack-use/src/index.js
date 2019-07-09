// 引入依赖的模块
import _ from 'lodash';

// 引入依赖的模块 类似于 let $ = require('jquery');
import $ from 'jquery'

// 导入样式 导入的资源如果不需要在代码中使用 不需要通过变量保存
import './base.css'
import './index.scss'

// 下载 导入axios 使用

function component() {
  // 创建div
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // 把 字符串数组 合并
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // jQuery变色
  $(element).css('backgroundColor','hotpink');

  $(element).html('修改的内容');
  $(element).html('修改的内容123213');
  return element;
}

// 添加到body中
document.body.appendChild(component());