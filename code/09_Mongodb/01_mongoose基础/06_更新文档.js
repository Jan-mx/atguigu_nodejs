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

        //单条更新
        // const result = await BookModel.updateOne(
        //     {name:'红楼梦'},
        //     {price:9.9}
        // )
        // if (result.modifiedCount  > 0) {
        //     console.log('更新成功');
        // } else {
        //     console.log('没有找到符合条件的文档');
        // }

        // 批量更新
        const result = await BookModel.updateMany(
            {author:'余华'},
            {is_hot:false}
        )
        if (result.modifiedCount  > 0) {
            console.log('更新成功');
        } else {
            console.log('没有找到符合条件的文档');
        }
        
        console.log(result);
        
    } catch (err) {
        console.log('操作失败：', err);
    } finally {
        await mongoose.disconnect();
        console.log('连接关闭');
    }
}

main();