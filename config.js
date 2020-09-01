const dotenv = require('dotenv');
dotenv.config();
module.exports = {
	bot_prefix: process.env.BOT_PREFIX,
	pronote_url: process.env.PRONOTE_URL,
	pronote_id: process.env.PRONOTE_ID,
	pronote_mdp: process.env.PRONOTE_MDP,
	pronote_cas: process.env.PRONOTE_CAS,
	enable_discord: process.env.ENABLE_DISCORD,
	discord_bot_token: process.env.DISCORD_BOT_TOKEN
};
