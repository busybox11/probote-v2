const dotenv = require('dotenv');
dotenv.config();
module.exports = {
	enable_discord: process.env.ENABLE_DISCORD,
	discord_bot_token: process.env.DISCORD_BOT_TOKEN
};
