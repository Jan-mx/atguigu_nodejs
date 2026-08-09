// 1.导入fs模块
const { log } = require('console');
const fs = require('fs');

// // 2.创建文件夹 mk make只做 dir directory操作
// fs.mkdir('./html',(err) => {
//     if(err){
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');   
// })


// 递归创建
// fs.mkdir('./a/b/c',{recursive:true},(err) => {
//     if(err){
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');
    
// })


// // 读取文件夹 read读取 dir directory文件夹
// fs.readdir('../../课件',(err,data) => {
//     if(err){
//         console.log('读取失败');
//         return
//     }
//     console.log(data);
    
// })

// fs.readdir('./',(err,data) => {
//     if(err){
//         console.log('读取失败');
//         return
//     }
//     console.log(data);
    
// })


// 删除文件夹 rm remove移除 只能删除无二级目录
// fs.rmdir('./html',(err) => {
//     if(err){
//         console.log('删除失败');
//     return
//     }
//     console.log('删除成功');
    
// })


//递归删除 
// In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
// 不建议使用
// fs.rmdir('./a',{recursive:true},(err) => {
//     if(err){
//         console.log('删除失败');
//     return
//     }
//     console.log('删除成功');
// })

// 建议使用
fs.rm('./a',{recursive:true},(err) => {
    if(err){
        console.log('删除失败');
    return
    }
    console.log('删除成功');
    
})

