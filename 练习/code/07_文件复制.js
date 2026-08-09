/**
 * 需求：
 * 复制课件下的video.map4
 */

const fs = require('fs')
const process = require('process')

// // 方式一：readFile
// // 读取文件内容
// let data = fs.readFileSync('../../课件/video.mp4')
// //写入文件
// fs.writeFileSync('../../课件/video_2.mp4',data)
// console.log(process.memoryUsage());//rss 28995584字节 27MB


// // 方式二：流式操作
// // 创建读取流对象
const rs = fs.createReadStream('../../课件/video.mp4')

const ws = fs.createWriteStream('../../课件/video_3.mp4')

// 绑定data事件
rs.on('data',chunk => {
    ws.write(chunk)
})

rs.on('end',() => {
    console.log(process.memoryUsage());
})

rs.pipe(ws)