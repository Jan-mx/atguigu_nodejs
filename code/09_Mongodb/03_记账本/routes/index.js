var express = require('express');
var router = express.Router();
//导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json');
//获取 db 对象
const db = low(adapter);
//导入 shortid
const shortid = require('shortid');
// 导入moment
const moment = require('moment');
const AccountModel = require('../models/AccountModel');

// 测试
// console.log(moment('2026-08-22').toDate());
// 格式化日期对象
// console.log(moment(new Date()).format('YYYY-MM-DD'));



// 记账本列表
router.get('/account', async (req, res, next) => {
  try {
    // 按时间降序读取账单
    const data = await AccountModel
      .find()
      .sort({ time: -1 })
      .exec();

    // 渲染列表页面
    res.render('list', {
      accounts: data,
      moment: moment
    });
  } catch (err) {
    next(err)
  }
});

//添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录
// router.post('/account', async (req, res) => {
  // 查看表单数据
  // 2026-08-21 => moment => new Date()
  // console.log(req.body);
  // 生成 id
  // let id = shortid.generate();
  // //写入文件  
  // db.get('accounts').push(req.body).write()

  // db.get('accounts').unshift({id:id, ...req.body}).write();

  // 插入数据库


// promise
router.post('/account', (req, res) => {
  return AccountModel.create({
    ...req.body,

    // 将日期字符串转换为 Date
    time: moment(req.body.time).toDate()
  })
    .then(data => {
      console.log('插入成功：', data);

      return res.render('success', {
        msg: '添加成功哦~~~',
        url: '/account'
      });
    })
    .catch(err => {
      console.log('插入失败：', err);

      return res.status(500).send('插入失败~');
    });
});

  // async/await
//   try{
//     const data = await AccountModel.create({
//       ...req.body,
//       time:moment(req.body.time).toDate()
//     })
//     console.log('插入成功',data);
//      //成功提醒
//     res.render('success', {
//       msg: '添加成功哦~~~', 
//       url: '/account'});
//   }catch(err){
//     console.log('插入失败',err);

//     res.status(500).send('插入失败~')
//   }
//  });

//删除记录
router.get('/account/:id', async (req, res) => {
 
  // //删除
  // db.get('accounts').remove({id:id}).write();

  try{

    //获取 params 的 id 参数
    let id = req.params.id

    const data = await AccountModel.deleteOne({
      _id:id
    })

    if (data.deletedCount === 0) {
      return res
      .status(404)
      .send('没有找到需要删除的账单');
    }

    //成功提醒
    res.render('success', {
      msg: '删除成功~~~', 
      url: '/account'});
 
  }catch(err){
   
    console.log('删除失败');

    res.status(500).send('删除失败~')

  }


});

module.exports = router;
