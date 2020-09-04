const Discord = require('discord.js');
const client = new Discord.Client();

const { session, discord_bot_token } = require('../../config');
const config = require('../../config');

chan_devoirs = client.channels.cache.get(config.d_chan_devoirs);
chan_notes = client.channels.cache.get(config.d_chan_notes);
chan_infos = client.channels.cache.get(config.d_chan_infos);
chan_edt = client.channels.cache.get(config.d_chan_edt);
chan_logs = client.channels.cache.get(config.d_chan_logs);

client.on('ready', () => {
    console.log("[DISCORD] Logged in as " + client.user.tag)
    client.user.setActivity(session.user.establishment, { type: 'WATCHING' });
});

module.exports = { 
    client,
    chan_devoirs,
    chan_notes,
    chan_infos,
    chan_edt,
    chan_logs
}

require('./messages');

client.login(discord_bot_token);