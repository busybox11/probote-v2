const request = require('request');

async function getJoke() {
    request('http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris', { json: true }, function (error, response, body) {
        if (error) { console.error('error:', error); }
        console.log(body);
    });
}

module.exports = {
    getJoke
}