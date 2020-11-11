const request = require('request')

async function getQuote() {
	return new Promise(function(resolve){
		request('https://inspirobot.me/api?generate=true', function (error, response, body) {
			if (error) { console.error('error:', error) }
			try {
				resolve(body)
			} catch (err) {
				resolve('Une erreur est survenue lors de la connexion au serveur.')
			}
		})
	})
}

async function runDiscord() {
	let msg = {
		useEmbed: false,
		content: await getQuote()
	}

	return msg
}

module.exports = {
	name: 'inspirobot',
	desc: 'Envoie une citation du site inspirobot.me',
	usage: 'quote',
	getQuote,
	runDiscord
}