// 导入express
const express = require('express');

// 创建应用对象
const app = express()

// 创建路由  路由./home前不需要. 因为拼接后的路径为127.0.0.1:9000/./home
app.get('/home',(req,res) =>{
    // 使用Express 封装的res.send() 可以自动根据内容类型设置 Content-Type
    // res.end('您好 Express')
    res.send('您好 Express')
})

// app.get('/',(req,res) =>{
//     res.send('Hello')
// })

// post
app.post('/login',(req,res) =>{
    res.send('login')
})

app.all('/test',(req,res) =>{
    res.send('test')
})

// 404响应
app.all('*',(req,res) =>{
    res.status(404).send('404 not Found')
})

// 监听端口
app.listen(9000,() =>{
    console.log('正在监听9000端口');
})
