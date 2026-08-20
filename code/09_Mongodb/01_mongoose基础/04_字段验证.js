// 安装mongoose npm i mongoose


// 方式二：async/await
// 导入mongoose
const mongoose = require('mongoose');

// 设置回调

 // 设置集合中文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name: {
      type: String,
      required: true, // 表明该属性必须不为空
      unique: true// 设置为独一无二的
    },
    author: {
      type: String,
      default: '匿名'
    },
    //类型
    style: {
      type: String,
      //枚举
      enum: ['言情','城市','志怪','恐怖']
    },
    price: Number
    })

// 创建模型对象 对文档操作的封装对象
const BookModel = mongoose.model('books',BookSchema)

async function main() {
    try {
        await mongoose.connect(
            // 连接mongodb服务
            'mongodb://127.0.0.1:27017/bilibili'
        );

        console.log('连接成功');

        const data = await BookModel.create({
            name: '西游记',
            // author: '吴承恩',
            price: 19.9,
            style: '志怪'
        });

        console.log('文档创建成功：', data);
    } catch (err) {
        console.log('操作失败：', err);
    } finally {
        await mongoose.disconnect();
        console.log('连接关闭');
    }
}

main();