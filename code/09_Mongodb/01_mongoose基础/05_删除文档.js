const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
});

const BookModel = mongoose.model('novel', BookSchema);

async function main() {
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/bilibili'
        );

        console.log('连接成功');
        // 删除单条数据
        // const result = await BookModel.deleteOne({
        //     _id: '6a81e0de24f7a3737081f3fd'
        // });
        // if (result.deletedCount === 1) {
        //     console.log('删除成功');
        // } else {
        //     console.log('没有找到符合条件的文档');
        // }

        // 批量删除数据
        const result = await BookModel.deleteMany({
          is_hot:false
        })
        if (result.deletedCount > 0) {
            console.log('删除成功');
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