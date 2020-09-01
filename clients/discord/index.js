const Discord = require('discord.js');
const client = new Discord.Client();

const { discord_bot_token } = require('../../config');

client.on('ready', () => {
    console.log("[DISCORD] Logged in as " + client.user.tag)
});

client.login(discord_bot_token);