// 导入fs
const fs = require('fs');
const path = require('path');
// 写入文件
// fs.writeFileSync(__dirname + '/index.html','love')
// console.log(__dirname + '/index.html'); 
// // 输出F:\node_demo\atguigu_nodejs\code\3_path模块/index.html

// console.log(path.resolve(__dirname + '/index.html'));
// // 输出F:\node_demo\atguigu_nodejs\code\3_path模块\index.html

// sep分隔符
// console.log(path.sep);// windows \  Linux /

// parse方法 __dirname '全局变量'
// console.log(__filename);// 文件绝对路径
let str = 'F:\\ode_demo\\atguigu_nodejs\\code\\3_path模块\\path.js'
// 需要用 \ 自己来转义自己，即：\\ $\rightarrow$ 代表一个真正的文本字符 \ 
// \a / \c / \3 / \p：如果 \ 后面跟着普通字母，
// JS 会尝试寻找对应的特殊转义（比如 \t 是制表符 Tab，\b 是退格，\n是换行)

console.log(path.parse(str));
/**
 * 路径结构化
 * {
  root: 'F:\\',
  dir: 'F:\\ode_demo\\atguigu_nodejs\\code\\3_path模块',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
 */


// basename
// console.log(path.dirname(str));

// extname 获取拓展名
// console.log(path.extname(str));