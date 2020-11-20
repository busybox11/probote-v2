async function getHomeworks() {
	// MARKS
	// Regular notes (e.g. 14.62)    
	let { session } = require('../../config')
	const homeworks = await session.homeworks(Date.now(), new Date().setDate(new Date().getDate() + 14))

	return homeworks
}

async function autoFetch() {
	let homeworks = await getHomeworks()

	const hw_db_util = require('../../database/utils/homeworks')
	for (const homework of homeworks) {
		if (await hw_db_util.isHomeworkRegistered(homework) == false) {
			if (await hw_db_util.registerNewHomework(homework)) {
				// TODO: - Add files support
				const TurndownService = require('turndown')
				const turndownService = new TurndownService()
                
				let msg = {
					useEmbed: true,
					embed: {
						author: {
							name: homework.subject,
						},
						title: homework.title,
						description: turndownService.turndown(homework.description),
						timestamp: Date.parse(homework.to),
						for: homework.for,
						color: homework.color
					}
				}

				const { enable_discord } = require('../../config')

				if (enable_discord == 'true') {
					const { chan_devoirs } = require('../../clients/discord')
					const { sendMessage } = require('../../clients/discord/messages')
					await sendMessage(chan_devoirs, msg)
				}
			}
		}
	}

	const fetch_db = require('../../database/utils/fetch')
	await fetch_db.setLastFetch('homeworks', new Date().getTime())
}

module.exports = {
	name: 'Devoirs',
	desc: 'Envoie les devoirs à faire.',
	usage: 'homeworks',
	autoFetch
}
