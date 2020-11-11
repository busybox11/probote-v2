const pronote = require('pronote-api')
const prn_modules = require('./modules')

const { pronote_url, pronote_id, pronote_mdp, pronote_cas } = require('../config')

let session

async function logIn() {
	session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas)
	session.setKeepAlive(true)

	return session
}

async function fetchData() {
   // TODO
   //   - Use config to enable modules or not
	await prn_modules.commands.moyenne.autoFetch()
	await prn_modules.commands.menu.autoFetch()

	await prn_modules.notifications.homeworks.autoFetch()
	await prn_modules.notifications.notes.autoFetch()
}

function startFetch() {
<<<<<<< HEAD
    function checkReady() {
        let { areClientsReady } = require('../config');
        if (areClientsReady) {
            clearInterval(wait);
            setInterval(fetchData, 15 * 60 * 1000); // Fetch every 15 minutes
            fetchData();
        }
    }
=======
	function checkReady() {
		let { areClientsReady } = require('../config')
		if (areClientsReady) {
			clearInterval(wait)
			setInterval(fetchData, 15 * 60 * 1000) // Fetch every 15 minutes
			fetchData()
		}
	}
>>>>>>> a6153eb371f3831cf11fffe4813fb4ef05010002
    
	let wait = setInterval(checkReady, 5 * 1000)
	checkReady()
}

module.exports = {
<<<<<<< HEAD
    logIn,
    startFetch,
    session
=======
	logIn,
	startFetch,
	session
>>>>>>> a6153eb371f3831cf11fffe4813fb4ef05010002
}
