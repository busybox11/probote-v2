function consolePing() {
    console.log('Pong');
}

function msgPing() {
    msg = {
        useEmbed: false,
        content: "Pong !"
    }

    return msg;
}
module.exports = {
    consolePing,
    msgPing
}