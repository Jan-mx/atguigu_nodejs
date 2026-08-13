// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((request,response) =>{
    // 获取请求的方法
    let {method} = request
    // 获取请求的url路径
    // ！！！注意pathname需要{} 因为后面是一个对象 不是字符串
    let {pathname} = new URL(request.url,'http://127.0.0.1')
    // console.log(method);
    // console.log(pathname);

    response.setHeader('content-type','text/html;charset=utf-8')

    //判断
    if(method === 'GET' && pathname === '/login'){
        response.end('登录页面')
    }else if(method === 'GET' && pathname === '/reg'){
        response.end('注册页面')
    }else{
        response.end('NOT FOUND')
    }
    // response.end('practise')
});

// 3.监听端口 启动服务
server.listen(9000,() =>{
    console.log('服务已经启动 端口9000正在监听');
})