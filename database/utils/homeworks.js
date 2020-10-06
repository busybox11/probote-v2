const db = require('../index');

async function isHomeworkRegistered(homework) {
    let db_homeworks = await db.getDB('homeworks');

    return db_homeworks.includes(JSON.parse(JSON.stringify(homework))); // Yes, this is ugly, but since the objects in the database have been stringified, we have to do it.
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