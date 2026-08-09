// 1.导入fs模块
const fs = require('fs');


// // 2.调用unlink方法 删除单个文件 unlinkSync 
// fs.unlink('./观书有感.txt',(err) => {
//     if(err){
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })


// 3.调用rm方法 删除文件夹或文件 rmSync
fs.unlink('./论语.txt',(err) => {
    if(err){
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})
