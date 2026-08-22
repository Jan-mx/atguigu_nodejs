/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */
module.exports = async function (success, error) {
  //判断 error 为其设置默认值
  if(typeof error !== 'function'){
    error = () => {
      console.log('连接失败~~~');
    }
  }
  //1. 安装 mongoose
  //2. 导入 mongoose
  const mongoose = require('mongoose');
  //导入 配置文件
  const {DBHOST, DBPORT, DBNAME} = require('../config/config.js');

  //设置 strictQuery 为 true
  mongoose.set('strictQuery', true);

  //设置连接关闭的回调
  mongoose.connection.on('close', () => {
    console.log('连接关闭');
  });

  //3. 连接 mongodb 服务                        数据库的名称
  try {
    await mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
    // await mongoose.connect(
    //         // 连接mongodb服务
    //         'mongodb://127.0.0.1:27017/bilibili'
    //     );
  } catch (err) {
    return error(err);
  }

  //4. 数据库连接成功后执行回调
  return success();
};
