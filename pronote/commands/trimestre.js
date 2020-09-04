const { session } = require('../../config');

async function main() {
    const marks = await session.marks();
    msg = {
        useEmbed: false,
        content: `${marks.averages.studentClass}`
    }
    
    return msg;
}

async function runDiscord(message) {
    return await main();
}

module.exports = {
    name: "Trimestre",
    desc: "Envoie les moyennes générales des trimestres de la classe.",
    usage: "trimestre",
    main,
    runDiscord
}