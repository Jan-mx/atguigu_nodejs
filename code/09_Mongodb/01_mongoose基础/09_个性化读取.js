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

        // 设置字段
        // const result = await BookModel.find().select({
        //     name:1,
        //     author:1,
        //     price:1     // 1 选择结果包含该字段 0 选择结果不包含该字段
        // })


        // if (result.length > 0) {
        //     console.log('查询成功：', result);
        // } else {
        //     console.log('没有找到符合条件的书籍');
        // }

        // 数据排序
        // const result = await BookModel.find()
        // .select({
        //     name:1,
        //     author:1,
        //     price:1     // 1 选择结果包含该字段 0 选择结果不包含该字段
        // })
        // .sort({
        //     price:-1    // 1 为升向排序 -1为降向排序
        // })

        // 数据的截取
         const result = await BookModel.find()
        .select({
            name:1,
            author:1,
            price:1     // 1 选择结果包含该字段 0 选择结果不包含该字段
        })
        .sort({
            price:-1    // 1 为升向排序 -1为降向排序
        })
        .skip(3)
        .limit(3)
        

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