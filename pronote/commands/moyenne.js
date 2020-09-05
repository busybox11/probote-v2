const { session } = require('../../config');

async function main() {
    const marks = await session.marks();
    msg = {
        useEmbed: true,
        embed: {
            title: 'Moyenne du trimestre actuel',
            description: marks.averages.studentClass.toString()
        }
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