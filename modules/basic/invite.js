const { d_global_invite } = require('../../config');

// API Request: https://api.qrserver.com/v1/create-qr-code/?data=<URL>&margin=20

async function runDiscord() {
    let qr_url = `https://api.qrserver.com/v1/create-qr-code/?data=${d_global_invite}&margin=20`
    msg = {
        useEmbed: true,
        embed: {
            title: d_global_invite,
            url: qr_url,
            image: {
                url: qr_url
            }
        }
    }

    return msg;
}

module.exports = {
    name: "Invitation",
    desc: "Envoie un QR code ainsi que le lien d'invitation vers le serveur.",
    usage: "invite",
    runDiscord
}