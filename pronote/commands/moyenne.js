async function getMarks() {
    let { session } = require('../../config');
    const marks = await session.marks();

    return marks;
}

async function runDiscord() {
    marks = await getMarks();

    msg = {
        useEmbed: true,
        embed: {
            title: 'Moyenne générale du trimestre actuel',
            description: marks.averages.studentClass.toString()
        }
    }

    await updateDesc();

    return msg;
}

async function updateDesc() {
    marks = await getMarks();

    let { chan_notes } = require('../../clients/discord');
    chan_notes.setTopic(`Moyenne générale du trimestre actuel : **${marks.averages.studentClass.toString()}**`);
}

async function autoFetch() {
    updateDesc();

    const fetch_db = require('../../database/utils/fetch');
    fetch_db.setLastFetch('moyenne', new Date().getTime());
}

module.exports = {
    name: "Trimestre",
    desc: "Envoie les moyennes générales des trimestres de la classe.",
    usage: "trimestre",
    runDiscord,
    updateDesc,
    autoFetch
}