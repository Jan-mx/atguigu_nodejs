//导入 express
const express = require('express');

//创建应用对象
const app = express();

const path = require('path');

//声明中间件
app.use((req, res, next) => {
  //检测请求头中的 referer 是否为 127.0.0.1
  //获取 referer
  let referer = req.get('referer');
  if(referer){
    //实例化
    let url = new URL(referer);
    //获取 hostname
    let hostname = url.hostname;
    //判断
    if(hostname !== '127.0.0.1'){
      //响应 404 
      res.status(404).send('<h1>404 Not Found</h1>');
      return;
    }
  }
  next();
});

//静态资源中间件设置
const publicPath = path.join(__dirname + './public')
app.use(express.static(publicPath));
// console.log(publicPath);

//监听端口, 启动服务
app.listen(9000, () => {
  console.log('服务已经启动, 端口 9000 正在监听中....')
})