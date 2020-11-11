const db = require('../index')

async function isMarkRegistered(mark) {
	let db_marks = await db.getDB('notes')

	const _ = require('lodash')
	// TODO: Use marks ID from objects
	return _.some(db_marks, JSON.parse(JSON.stringify(mark)))
	// Yes, this is ugly, but we have to do it anyway since the objects contained in the database are stringified then parsed.
}

async function registerNewMark(mark) {
	let db_marks = await db.getDB('notes')
	db_marks.push(mark)
	await db.setDB('notes', db_marks)

	console.log('[DABATASE] Registered new mark')

	return true
}

module.exports = {
	isMarkRegistered,
	registerNewMark
}