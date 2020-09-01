const pronote = require('./pronote/index');
const pronote_api = require('pronote-api');

pronote.logIn().catch(err => {
    if (err.code === pronote_api.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
    process.exit(1);
}).then(function () {
    const { enable_discord } = require('./config');

    if (enable_discord == 'true') {
        const discord = require('./clients/discord/index');
    }
})