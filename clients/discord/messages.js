const Discord = require('discord.js');
const { client } = require('./index');
const modules = require('../../modules');
const config = require('../../config');
const pronote_module = require('../../pronote/modules');

function sendMessage(receivedMessage, msg) {
    // TODO: Add embed support
    receivedMessage.channel.startTyping();
    if (msg.useEmbed == false) {
        receivedMessage.channel.send(msg.content);
    }
    receivedMessage.channel.stopTyping(true);
}

client.on('message', async receivedMessage => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    else if (receivedMessage.content.toLowerCase().substring(0, config.bot_prefix.length) == config.bot_prefix) {
        // TODO: use modules to determine which function needs to be loaded
        if (receivedMessage.content.toLowerCase() == `${config.bot_prefix}ping`) {
            sendMessage(receivedMessage, modules.basic.ping.runDiscord(receivedMessage));
        }

        else if (receivedMessage.content.toLowerCase() == `${config.bot_prefix}trimestre`) {
            sendMessage(receivedMessage, await pronote_module.commands.trimestre.runDiscord(receivedMessage));
        }
    }
})