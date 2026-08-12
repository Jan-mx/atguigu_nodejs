// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((req,res) =>{
    // res.end('Hello HTTP ')// 设置响应体

    //设置响应头防止中文响应内容乱码
    //Node.js 底层默认会将这个包含中文的字符串以 UTF-8 编码转换成二进制字节发给浏览器
    res.setHeader('content-type','text/html;charset=utf-8')

    res.end('您好 HTTP ')// 设置响应体

})

// 3.监听端口9000 启动服务
server.listen(9000,() =>{
    console.log('服务已经启动');
})