// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((req,res) =>{
    // 获取请求方法
    // console.log(req.method);

    // 获取请求url
    // console.log(req.url);

    // 获取HTTP版本
    // console.log(req.httpVersion);

    // 获取请求头
    console.log(req.headers);

    res.end('Hello HTTP ')// 设置响应体

})

// 3.监听端口9000 启动服务
server.listen(9000,() =>{
    console.log('服务已经启动');
})