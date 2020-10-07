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
    homeworks.forEach(async function (homework) {
        if (await hw_db_util.isHomeworkRegistered(homework) == false) {
            await hw_db_util.registerNewHomework(homework);

            // TODO: - Add files support
            //       - Handle HTML in homework content
            const TurndownService = require('turndown');
            const turndownService = new TurndownService();

            msg = {
                useEmbed: true,
                embed: {
                    author: {
                        name: homework.subject,
                    },
                    footer: {
                        text: homework.teachers[0],
                    },
                    title: homework.title,
                    description: turndownService.turndown(homework.description),
                    timestamp: Date.parse(homework.to),
                    color: homework.color
                }
            }

            const { enable_discord } = require('../../config');
            if (enable_discord == 'true') {
                const { chan_devoirs } = require('../../clients/discord');
                const { sendMessage } = require('../../clients/discord/messages');
                sendMessage(chan_devoirs, msg);
            }
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