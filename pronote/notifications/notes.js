async function getMarks() {
    // MARKS
    // Regular notes (e.g. 14.62)    
    let { session } = require('../../config');
    const allMarks = await session.marks();

    return allMarks;
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
    allMarks = await getMarks();
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

    allMarks.subjects.forEach(function(item) {
        if (item.averages.studentClass == '') {
            msg.embed.fields.push({
                name: `**${item.name}**`,
                value: `Aucune note`
            });
        } else {
            msg.embed.fields.push({
                name: `**${item.name}**`,
                value: `Moyenne de la classe : **${item.averages.studentClass}**\nMoyenne max : **${item.averages.max}**\nMoyenne min : **${item.averages.min}**`
            });
        }
    });

    return msg;
}

async function autoFetch() {
    let allMarks = await getMarks();
    const marks_db_util = require('../../database/utils/marks');

    for (let subject of allMarks.subjects) {
        for (let mark of subject.marks) {
            mark.subject = subject.name
            if (await marks_db_util.isMarkRegistered(mark) == false) {
                if (await marks_db_util.registerNewMark(mark)) {
                    if (mark.title.trim() == '') {
                        mark.title = '*Aucun titre*'
                    }
        
                    msg = {
                        useEmbed: true,
                        embed: {
                            author: {
                                name: mark.subject,
                            },
                            title: mark.title,
                            fields: [
                                {
                                    name: '**Moyenne**',
                                    value: `${mark.average} / ${mark.scale}`,
                                    inline: true
                                },
                                {
                                    name: '**Coefficient**',
                                    value: `${mark.coefficient}`,
                                    inline: true
                                },
                                {
                                    name: '**Note maximale**',
                                    value: `${mark.max} / ${mark.scale}`,
                                    inline: true
                                },
                                {
                                    name: '**Note minimale**',
                                    value: `${mark.min} / ${mark.scale}`,
                                    inline: true
                                }
                            ],
                            timestamp: Date.parse(mark.date),
                            color: subject.color
                        }
                    }
        
                    const { enable_discord } = require('../../config');
        
                    if (enable_discord == 'true') {
                        const { chan_notes } = require('../../clients/discord');
                        const { sendMessage } = require('../../clients/discord/messages');
                        await sendMessage(chan_notes, msg);
                    }
                }
            }      
        }
    }

    const fetch_db = require('../../database/utils/fetch');
    await fetch_db.setLastFetch('notes', new Date().getTime());
}

module.exports = {
    name: "Notes",
    desc: "Module lié aux notes",
    usage: "note",
    runDiscord,
    autoFetch
}