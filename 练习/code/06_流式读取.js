//1.引入fs 模块
const fs = require('fs');

//2.创建读取流对象
const rs = fs.createReadStream('../../课件/video.mp4');

// 3.绑定data事件 
rs.on('data',chunk => {
    console.log(chunk.length);
});

// 4.end可选事件
rs.on('end',() => {
console.log('读取完成');
});