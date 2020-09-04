const Discord = require('discord.js');
const { client } = require('./index');
const modules = require('../../modules');

function sendMessage(receivedMessage, msg) {
    // TODO: Add embed support
    if (msg.useEmbed == false) {
        receivedMessage.channel.send(msg.content);
    }
}

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    else if (receivedMessage.content.toLowerCase().substring(0,4) == "pro ") {
        // TODO: use modules to determine which function needs to be loaded
        if (receivedMessage.content.toLowerCase() == "pro ping") {
            sendMessage(receivedMessage, modules.basic.ping.runDiscord());
        }
    }
})