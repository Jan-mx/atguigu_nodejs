const http = require('http');

const server = http.createServer((req,res) => {
    // 1.声明变量
    let body = ''
    // 2.绑定data事件
    req.on('data',chunk =>{
        body += chunk
    })
    // 3.绑定end事件
    req.on('end',() =>{
        console.log(body);
        // 响应
        res.end('Hello HTTP')
    })
})

// 3.监听端口 启动服务
server.listen(9000,() =>{
    console.log('服务已启动');
})
