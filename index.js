/* eslint-disable no-unused-vars */
const pronote = require('./pronote/index')
const pronote_api = require('pronote-api')

let db = require('./database')

pronote.logIn(function() {
	const { session, fetch } = require('./config')
	
	console.log('[PRONOTE] Logged in as ' + session.user.name + ', ' + session.user.studentClass.name)       

	let fetch_log = ''

	function add_elem(elem) {
		if (fetch_log.length == 0) {
			fetch_log += `Enabled ${elem}`
		} else {
			fetch_log += `, ${elem}`
		}
	}

	if (fetch.average)
		add_elem('average')
	if (fetch.menu)
		add_elem('menu')
	if (fetch.homeworks)
		add_elem('homeworks')
	if (fetch.notes)
		add_elem('grades')
	if (fetch.informations)
		add_elem('informations')
	console.log(`[CONFIG] ${fetch_log}`)

	require('./clientsHandler')

	pronote.startFetch()
})