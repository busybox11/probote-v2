async function getMarks() {
    // MARKS
    // Regular notes (e.g. 14.62)    
    let { session } = require('../../config');
    const marks = await session.marks();

    return marks;
}

/*
 * async function getEvaluations() {
 *     // EVALUATIONS
 *     // Level-based notes (e.g. expert - aka Green +)
 *     let { session } = require('../../config');
 *     const evaluations = await session.evaluations();
 * 
 *     return evaluations;
 * }
 */

async function runDiscord() {
    marks = await getMarks();
    // evaluations = await getEvaluations();

    // console.log(marks);
    // console.log(evaluations);

    msg = {
        useEmbed: true,
        embed: {
            title: 'Notes du trimestre actuel',
            fields: []
        }
    }

    marks.subjects.forEach(function(item) {
        msg.embed.fields.push({
            name: `**${item.name}**`,
            value: `Moyenne de la classe : **${item.averages.studentClass}**\nMoyenne max : **${item.averages.max}**\nMoyenne min : **${item.averages.min}**`
        });
    });

    return msg;
}

async function autoFetch() {
    console.log('[NOTES] Nothing to send');
}

module.exports = {
    name: "Notes",
    desc: "Module lié aux notes",
    usage: "note",
    runDiscord,
    autoFetch
}