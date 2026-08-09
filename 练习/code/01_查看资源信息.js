// 1.引入fs模块
const fs = require('fs');


// 2.stat方法 status缩写状态
fs.stat('../../课件/video.mp4',(err,data) => {
    if (err) {
      console.log('操作失败');
      return;
    }
    // console.log(data);
    // isFile
    console.log(data.isFile());
    // isDirectory
    console.log(data.isDirectory());
})
