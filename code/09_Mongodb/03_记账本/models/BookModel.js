// 安装mongoose npm i mongoose


// 导入mongoose
const mongoose = require('mongoose');

// 设置回调

 // 设置集合中文档的属性以及属性值的类型
    const BookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:String,
        is_hot:Boolean,
        tags:Array,
        pub_time:Date,
        test:mongoose.Schema.Types.Mixed
    })

// 创建模型对象 对文档操作的封装对象
const BookModel = mongoose.model('books',BookSchema)

module.exports = BookModel





