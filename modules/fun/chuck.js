const request = require('request');

async function getJoke() {
    return new Promise(function(resolve, reject){
        request('http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris', { json: true }, function (error, response, body) {
            if (error) { console.error('error:', error); }
            resolve(body['value']['joke'].replace(/&quot;/g,'"'));
        });
    });
}

async function runDiscord() {
    msg = {
        useEmbed: false,
        content: await getJoke()
    }

    return msg;
}

module.exports = {
    getJoke,
    runDiscord
}