
// 导入http模块
const http = require('http');
const { url } = require('inspector');


const server = http.createServer((req,res) => {

    // let url = new URL('/search?a=1000&b=200','http://127.0.0.1:9000')
    let url = new URL(req.url,'http://127.0.0.1')
    // 输出路径
    console.log(url.pathname);
    // 输出keyword查询字符串
    // 需请求http://127.0.0.1:9000/search?keyword=h5&num=1
    console.log(url.searchParams.get('keyword'));
    res.end('url new');

})

// 3.监听端口 启动服务
server.listen(9000,() =>{
    console.log('服务已启动');
})
