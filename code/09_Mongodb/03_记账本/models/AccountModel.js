// 安装mongoose npm i mongoose


// 导入mongoose
const mongoose = require('mongoose');


 // 设置集合中文档的属性以及属性值的类型
    const AccountSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        time:Date,
        type:{
            type:Number,
            default:-1
        },
        account:{
            type:Number,
            default:-1
        },
        remarks:{
            type:String
        }
    })

// 创建模型对象 对文档操作的封装对象
const AccountModel = mongoose.model('accounts',AccountSchema)

module.exports = AccountModel





