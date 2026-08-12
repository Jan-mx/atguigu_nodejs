/**
 * 需求：
 * 复制课件下的video.map4
 */

const fs = require('fs')
const process = require('process')

// // 方式一：readFile 
// 内存占用	极高（与文件大小成正比）
// 文件大小限制	无法处理大于 2 GB 的文件 (V8 内存限制)
// 响应速度 (首包时间)	慢（必须等待整个文件全部读入内存）
// 适用场景：配置文件、小型 JSON、微型 TXT 文本

// // 读取文件内容
// let data = fs.readFileSync('../../课件/video.mp4')
// //写入文件
// fs.writeFileSync('../../课件/video_2.mp4',data)
// console.log(process.memoryUsage());//rss 28995584字节 27MB


// // 方式二：流式操作 
// 内存占用极低且固定（通常每次默认只有 64 KB）
// 文件大小限制无上限 
// 响应速度 (首包时间)极快（拿到第一块数据就能立刻开始处理）
// 适用场景：视频/音频播放、文件上传/下载、大文件复制

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