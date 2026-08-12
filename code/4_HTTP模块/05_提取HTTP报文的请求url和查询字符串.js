
// 导入http模块
const http = require('http');

// 导入url模块
const url = require('url')

const server = http.createServer((req,res) => {
    // 2.解析req.url
    // console.log(req.url);
    let rs = url.parse(req.url,true)
    // console.log(rs);
    // 路径
    let pathname = rs.pathname

    // 查询字符串
    let keyword = rs.query.keyword
    console.log(keyword);

    // console.log(pathname);
    res.end('url');
})

// 3.监听端口 启动服务
server.listen(9000,() =>{
    console.log('服务已启动');
})
