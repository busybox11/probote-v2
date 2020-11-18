/* eslint-disable no-unused-vars */
const pronote = require('./pronote/index')
const pronote_api = require('pronote-api')

let db = require('./database')

pronote.logIn(function() {
	const { session } = require('./config')
	
	console.log('[PRONOTE] Logged in as ' + session.user.name + ', ' + session.user.studentClass.name)        
			
	require('./clientsHandler')

	pronote.startFetch()
})