/**
 * 需求：当前删除了code文件夹的第二个文件 要求按顺序重排序 如1_文件写入、3_流式写入=>1_文件写入、2_流式写入
 */


const fs = require('fs');

// 读取code文件夹
const files = fs.readdirSync('./code')

// console.log(files);

let i = 1
 
// 遍历数组
files.forEach((item) => {
    // console.log(item);
    
    // 拆分文件名
    let data = item.split('_')
    // console.log(data);
    let [num,name] = data


    if(Number(i) < 10){
        i = '0' + i
    }

    // 创建新的文件名
    let newName = i + '_' + name;
    // 重命名
    fs.renameSync(`./code/${item}`,`./code/${newName}`)

    i++
})

