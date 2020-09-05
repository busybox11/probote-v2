const pronote = require('pronote-api');

const { pronote_url, pronote_id, pronote_mdp, pronote_cas } = require('../config');

let session;

async function logIn() {
    session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas);

    return session;
}

function fetchData() {
    // Call fetch functions here
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