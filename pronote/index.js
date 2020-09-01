const pronote = require('pronote-api');

const { pronote_url, pronote_id, pronote_mdp, pronote_cas } = require('../config');

let session;

async function logIn() {
    session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas);

    return session;
}

module.exports = {
    logIn,
    session
}