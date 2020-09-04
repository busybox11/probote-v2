const Discord = require('discord.js');
const { client } = require('./index');
const modules = require('../../modules');
const config = require('../../config');
const pronote_module = require('../../pronote/modules');

function sendMessage(channel, msg) {
    // TODO: Add embed support
    channel.startTyping();
    if (msg.useEmbed == false) {
        channel.send(msg.content);
    }
    channel.stopTyping(true);
}

client.on('message', async receivedMessage => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    else if (receivedMessage.content.toLowerCase().substring(0, config.bot_prefix.length) == config.bot_prefix) {
        // TODO: use modules to determine which function needs to be loaded
        if (receivedMessage.content.toLowerCase() == `${config.bot_prefix}ping`) {
            sendMessage(receivedMessage.channel, modules.basic.ping.runDiscord(receivedMessage));
        }

        else if (receivedMessage.content.toLowerCase() == `${config.bot_prefix}moy`) {
            sendMessage(receivedMessage.channel, await pronote_module.commands.moyenne.runDiscord(receivedMessage));
        }
    }
})

module.exports = {
    sendMessage
}