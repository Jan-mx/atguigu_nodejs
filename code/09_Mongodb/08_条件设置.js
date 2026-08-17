// 安装mongoose npm i mongoose

// 导入mongoose
const mongoose = require('mongoose');

// 设置回调

 // 设置集合中文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    })

// 创建模型对象 对文档操作的封装对象
const BookModel = mongoose.model('novel',BookSchema)

async function main() {
    try {
        await mongoose.connect(
            // 连接mongodb服务
            'mongodb://127.0.0.1:27017/bilibili'
        );

        console.log('连接成功');
        // 价格小于20的书籍
        // const result = await BookModel.find(
        //     {price:{$lt:20}}
        // )
        // if (result.length > 0) {
        //     console.log('查询成功：', result);
        // } else {
        //     console.log('没有找到符合条件的书籍');
        // }

        // 曹雪芹或余华的书
        // const result = await BookModel.find(
        //     {$or:[{author:'曹雪芹'},{author:'余华'}]}
        // )
        // if (result.length > 0) {
        //     console.log('查询成功：', result);
        // } else {
        //     console.log('没有找到符合条件的文档');
        // }

        // // 价格大于20且小于70
        // const result = await BookModel.find(
        //     {price:{
        //         $lt:70,
        //         $gt:20
            
        //     }}
        // )
        // if (result.length > 0) {
        //     console.log('查询成功：', result);
        // } else {
        //     console.log('没有找到符合条件的书籍');
        // }

        // 正则表达式 检索书籍名称包含'三'
        const result = await BookModel.find(
            {name:{
                $regex:/三/
            
            }}
        )
        if (result.length > 0) {
            console.log('查询成功：', result);
        } else {
            console.log('没有找到符合条件的书籍');
        }
        
        
        

        
    } catch (err) {
        console.log('操作失败：', err);
    } finally {
        await mongoose.disconnect();
        console.log('连接关闭');
    }
}

main();