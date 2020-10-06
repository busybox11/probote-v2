const db = require('../index');

async function isHomeworkRegistered(homework) {
    let db_homeworks = await db.getDB('homeworks');

    return db_homeworks.includes(homework);
}

async function registerNewHomework(homework) {
    let db_homeworks = await db.getDB('homeworks');
    db_homeworks.push(homeworks);
    await db.setDB('homeworks', db_homeworks);

    return true;
}

module.exports = {
    isHomeworkRegistered,
    registerNewHomework
}