async function getHomeworks() {
    // MARKS
    // Regular notes (e.g. 14.62)    
    let { session } = require('../../config');
    const homeworks = await session.homeworks();

    return homeworks;
}

async function autoFetch() {
    homeworks = await getHomeworks();

    const hw_db_util = require('../../database/utils/homeworks');
    homeworks.forEach(async function (element) {
        if (await hw_db_util.isHomeworkRegistered(element) == false) {
            await hw_db_util.registerNewHomework(element);
        }
    });

    const fetch_db = require('../../database/utils/fetch');
    await fetch_db.setLastFetch('homeworks', new Date().getTime());
}

module.exports = {
    name: "Devoirs",
    desc: "Envoie les devoirs à faire.",
    usage: "homeworks",
    autoFetch
}