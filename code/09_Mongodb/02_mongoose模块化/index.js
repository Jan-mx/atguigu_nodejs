// 导入db文件
const db = require('./db/db');

const mongoose = require('mongoose');

const BookModel = require('./models/BookModel');



async function main() {
    try {

        console.log('连接成功');

        const data = await BookModel.create({
            name: '西游记',
            author: '吴承恩',
            price: 19.9,
            is_hot:true,
            tags:['鬼怪','励志','社会'],
            pub_time:new Date(),
            test:new Date()
        });

        console.log('文档创建成功：', data);
    } catch (err) {
        console.log('操作失败：', err);
    } finally {
        await mongoose.disconnect();
        console.log('连接关闭');
    }
}


// 调用函数

db(
    main,
    err => {
    console.log('数据库连接失败');
})
 


