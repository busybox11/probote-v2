const db = require('../index');

async function isHomeworkRegistered(homework) {
    let db_homeworks = await db.getDB('homeworks');

    var _ = require('lodash/core');
    return _.some(db_homeworks, homework)
}

async function registerNewHomework(homework) {
    let db_homeworks = await db.getDB('homeworks');
    db_homeworks.push(homework);
    await db.setDB('homeworks', db_homeworks);

    console.log('[DABATASE] Registered new homework');

    return true;
}

module.exports = {
    isHomeworkRegistered,
    registerNewHomework
}