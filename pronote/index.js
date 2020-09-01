const pronote = require('pronote-api');

const { pronote_url, pronote_id, pronote_mdp, pronote_cas } = require('../config');

async function logIn() {
    const session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas);
}

module.exports = {
    logIn
}