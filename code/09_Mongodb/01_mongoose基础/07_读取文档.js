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

        // 通过name参数查找单条数据
        // const result = await BookModel.findOne(
        //     {name:'狂飙'}
        // )
        // if (result) {
        // console.log('查询成功：', result);
        // } else {
        // console.log('没有找到符合条件的文档');
        // }

        // // 通过id参数查找单条数据
        // const result = await BookModel.findById(
        //     '6a81e0de24f7a3737081f402'
        // )
        // if (result) {
        // console.log('查询成功：', result);
        // } else {
        // console.log('没有找到符合条件的文档');
        // }

        // 批量获取
        // const result = await BookModel.find(
        //     {author:'余华'}
        // )
        // if (result) {
        // console.log('查询成功：', result);
        // } else {
        // console.log('没有找到符合条件的文档');
        // }

        // 读取所有
        const result = await BookModel.find(
            
        )
        if (result) {
        console.log('查询成功：', result);
        } else {
        console.log('没有找到符合条件的文档');
        }

        

        
    } catch (err) {
        console.log('操作失败：', err);
    } finally {
        await mongoose.disconnect();
        console.log('连接关闭');
    }
}

main();