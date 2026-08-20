const db = require('./db/db');
const mongoose = require('mongoose');
const MovieModel = require('./models/MovieModel');

// 旧版，不支持
// MovieModel.create(data, (err, result) => {});


async function main() {
    try {
        const data = await MovieModel.create({
            title: '飞驰人生',
            director: 'audio'
        });

        console.log('插入成功：', data);
    } catch (err) {
        console.log('插入失败：', err);
    } finally {
        await mongoose.disconnect();
    }
}

db(main);