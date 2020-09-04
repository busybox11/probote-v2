const modules = require('../../modules');

function consolePing() {
    console.log('Pong !');
}

function main() {
    msg = {
        useEmbed: false,
        content: "Pong !"
    }

    return msg;
}

function runDiscord(message) {
    modules.logs.cli.log('PING', `${message.author.tag} in #${message.channel.name}`);
    return main();
}

module.exports = {
    name: "Ping",
    desc: "Ping command",
    usage: "ping",
    consolePing,
    main,
    runDiscord
}