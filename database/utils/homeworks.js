const db = require('../index')

async function isHomeworkRegistered(homework) {
	// Empty files array since it is constantly changing due to URLs
	// This would have caused duplicate entries and events in DB
	homework.files = []

	let db_homeworks = await db.getDB('homeworks')

	const _ = require('lodash')
	return _.some(db_homeworks, JSON.parse(JSON.stringify(homework)))
	// Yes, this is ugly, but we have to do it anyway since the objects contained in the database are stringified then parsed.
}

async function registerNewHomework(homework) {
	// Empty files array since it is constantly changing due to URLs
	// This would have caused duplicate entries and events in DB
	homework.files = []

	let db_homeworks = await db.getDB('homeworks')
	db_homeworks.push(homework)
	await db.setDB('homeworks', db_homeworks)

	console.log('[DABATASE] Registered new homework')

	return true
}

module.exports = {
	isHomeworkRegistered,
	registerNewHomework
}