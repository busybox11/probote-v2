const dotenv = require('dotenv');
dotenv.config();

let session;

function setSession(value, callback) {
	session = value;
	module.exports.session = value;

	callback();
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
	session,
	setSession
};
