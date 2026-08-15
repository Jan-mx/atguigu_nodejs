/**
 * 按照要求搭建 HTTP 服务
 * 
 * GET   /login  显示表单网页
 * POST  /login  获取表单中的『用户名』和『密码』
 */
//导入 express
const bodyParser = require('body-parser');
const express = require('express');

// 创建应用对象
const app = express()

// 解析Json格式的请求体的中间件
const jsonParser = bodyParser.json()

// 解析querystring格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({
  extended:false
})

// 创建路由规划
app.get('/login',(req,res) =>{
  // res.send('表单页面')
  // 响应HTML文件内容
  res.sendFile(__dirname + '/11_form.html')
})


app.post('/login',urlencodedParser,(req,res) =>{
  // 获取用户名和密码
  console.log(req.body);
  res.send('获取用户的数据')
})

app.listen(9000,() =>{
  console.log('正在监听9000端口');
})