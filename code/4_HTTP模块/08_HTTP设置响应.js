const http = require('http');

const server = http.createServer((request,response) =>{
    // 1.设置状态码
    // Response.statusCode = 203
    // Response.statusCode = 404

    // 2.响应状态描述
    // response.statusMessage = 'love'

    // 3.响应头
    // response.setHeader('content-type','text/html;charset=utf-8')
    // response.setHeader('server','Nodejs')
    // response.setHeader('MyServer','test test')
    response.setHeader('test',['test','test'])

    // 4.响应体设置
    response.write('love') //write可重复 end只能有一个且不能缺少 
    response.write('love') 
    response.end('')
})

// 监听端口 启动服务
server.listen(9000,() =>{
    console.log('正在监听9000端口');
})

