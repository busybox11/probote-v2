const Discord = require('discord.js');
const client = new Discord.Client();

const { session } = require('../../config');

const { discord_bot_token } = require('../../config');

client.on('ready', () => {
    console.log("[DISCORD] Logged in as " + client.user.tag)
    client.user.setActivity(session.user.establishment, { type: 'WATCHING' });
});

module.exports = { client }

require('./messages');

client.login(discord_bot_token);