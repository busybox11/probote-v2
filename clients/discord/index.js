const Discord = require('discord.js');
const client = new Discord.Client();

const { session, discord_bot_token } = require('../../config');
const config = require('../../config');

let chan_devoirs, chan_notes, chan_infos, chan_edt, chan_menu, chan_logs;

client.on('ready', () => {
    console.log("[DISCORD] Logged in as " + client.user.tag)
    client.user.setActivity(session.user.establishment, { type: 'WATCHING' });

    chan_devoirs = client.channels.cache.get(config.d_chan_devoirs);
	chan_notes = client.channels.cache.get(config.d_chan_notes);
	chan_infos = client.channels.cache.get(config.d_chan_infos);
	chan_edt = client.channels.cache.get(config.d_chan_edt);
	chan_menu = client.channels.cache.get(config.d_chan_menu);
	chan_logs = client.channels.cache.get(config.d_chan_logs);

	module.exports.chan_devoirs = chan_devoirs;
	module.exports.chan_notes = chan_notes;
	module.exports.chan_infos = chan_infos;
	module.exports.chan_edt = chan_edt;
	module.exports.chan_menu = chan_menu;
	module.exports.chan_logs = chan_logs;
});

module.exports = { 
    client,
    chan_devoirs,
    chan_notes,
    chan_infos,
    chan_edt,
    chan_menu,
    chan_logs
}

const messages = require('./messages');

client.login(discord_bot_token);