const Discord = require('discord.js');
const { client } = require('./index');

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
});

