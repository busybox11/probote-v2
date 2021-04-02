const dotenv = require('dotenv')
dotenv.config()

let session
let clients = []
let activeClients = []
let areClientsReady = false
let timeToRefresh = (process.env.TIME_TO_REFRESH || 30)
console.log(timeToRefresh)

if (process.env.ENABLE_DISCORD == 'true') {
	clients.push('Discord')
}

function setSession(value) {
	session = value
	module.exports.session = value
}

function setActiveClient(value) {
	activeClients.push(value)
	console.log(`[CLIENTS] ${value} is ready`)

	if (activeClients.length == clients.length) {
		areClientsReady = true
		module.exports.areClientsReady = areClientsReady
	}
}

const fetch = {
	average: JSON.parse(process.env.FETCH_AVERAGE || true),
	menu: JSON.parse(process.env.FETCH_MENU || true),
	homeworks: JSON.parse(process.env.FETCH_HOMEWORKS || true),
	notes: JSON.parse(process.env.FETCH_NOTES || true),
	informations: JSON.parse(process.env.FETCH_INFORMATIONS || true)
}

module.exports = {
	bot_prefix: process.env.BOT_PREFIX,
	pronote_url: process.env.PRONOTE_URL,
	pronote_id: process.env.PRONOTE_ID,
	pronote_mdp: process.env.PRONOTE_MDP,
	pronote_cas: process.env.PRONOTE_CAS,
	enable_discord: process.env.ENABLE_DISCORD,
	discord_bot_token: process.env.DISCORD_BOT_TOKEN,
	d_chan_devoirs: process.env.D_CHAN_DEVOIRS,
	d_chan_notes: process.env.D_CHAN_NOTES,
	d_chan_infos: process.env.D_CHAN_INFOS,
	d_chan_edt: process.env.D_CHAN_EDT,
	d_chan_menu: process.env.D_CHAN_MENU,
	d_chan_logs: process.env.D_CHAN_LOGS,
	d_role_admin: process.env.D_ROLE_ADMIN,
	d_global_invite: process.env.D_GLOBAL_INVITE,
	fetch,
	session,
	areClientsReady,
	timeToRefresh,
	setActiveClient,
	setSession
}
