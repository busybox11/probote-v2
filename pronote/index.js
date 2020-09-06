const pronote = require('pronote-api');
const prn_modules = require('./modules');

const { pronote_url, pronote_id, pronote_mdp, pronote_cas } = require('../config');

let session;

async function logIn() {
    session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas);

    return session;
}

async function fetchData() {
    await prn_modules.commands.moyenne.updateDesc();
}

function startFetch() {
    setInterval(fetchData, 15 * 60 * 1000); // Fetch every 15 minutes
    fetchData();
}

module.exports = {
    logIn,
    startFetch,
    session
}