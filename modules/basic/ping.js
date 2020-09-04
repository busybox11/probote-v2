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

function runDiscord() {
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