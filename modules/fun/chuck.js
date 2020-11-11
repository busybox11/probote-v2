const request = require('request')

async function getJoke() {
	return new Promise(function(resolve){
		request('http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris', { json: true }, function (error, response, body) {
			if (error) { console.error('error:', error) }
			try {
				resolve(body['value']['joke'].replace(/&quot;/g,'"'))
			} catch (err) {
				resolve('Une erreur est survenue lors de la connexion au serveur.')
			}
		})
	})
}

async function runDiscord() {
	let msg = {
		useEmbed: false,
		content: await getJoke()
	}

	return msg
}

module.exports = {
	name: 'Chuck Norris',
	desc: 'Envoie une blague de Chuck Norris (anglais uniquement).',
	usage: 'chuck',
	getJoke,
	runDiscord
}