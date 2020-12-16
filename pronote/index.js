const pronote = require('pronote-api')
const prn_modules = require('./modules')

const { pronote_url, pronote_id, pronote_mdp, pronote_cas, setSession, fetch } = require('../config')

let session

async function connect() {
	session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas)
	session.setKeepAlive(false)

	return session
}

async function logIn(callback) {
	await connect().catch(err => {
		if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
			console.error('Mauvais identifiants')    
		} else {
			console.error(err)
		}
		process.exit(1)
	}).then(loginSession => {
		setSession(loginSession)
	})
	
	if (callback && typeof callback === 'function') {
		callback()
	}
}

async function fetchData() {
	// TODO
	//   - Use config to enable modules or not
	await logIn(async function() {
		if (fetch.average)
			await prn_modules.commands.moyenne.autoFetch()
		if (fetch.menu)
			await prn_modules.commands.menu.autoFetch()
		if (fetch.homeworks)
			await prn_modules.notifications.homeworks.autoFetch()
		if (fetch.notes)
			await prn_modules.notifications.notes.autoFetch()
		// if (fetch.informations)
		// 	await prn_modules.informations.notes.autoFetch()
	})
}

function startFetch() {
	function checkReady() {
		let { areClientsReady } = require('../config')
		if (areClientsReady) {
			clearInterval(wait)
			setInterval(fetchData, 30 * 60 * 1000) // Fetch every 30 minutes
			fetchData()
		}
	}
    
	let wait = setInterval(checkReady, 5 * 1000)
	checkReady()
}

module.exports = {
	logIn,
	startFetch,
	session
}
