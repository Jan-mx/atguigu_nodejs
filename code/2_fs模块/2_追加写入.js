//使用场景：日志

//1.引入fs模块
const fs = require('fs') 

// fs.appendFile('./座右铭.txt','\n择其善者而从之 择其不善者而改之',err=>{
//     //判断
//     if(err){
//         console.log('写入失败..')
//         return
//     }
//     console.log('追加写入成功')
// })

// fs.appendFileSync('./座右铭.txt','\n温故而知新 可以为师矣')

//writeFile实现追加写入 
fs.writeFile('./座右铭.txt','\r\nlove love',{flag:'a'},err=>{
    if(err){
        console.log('写入失败~')
        return
    }
    console.log('写入成功')
})