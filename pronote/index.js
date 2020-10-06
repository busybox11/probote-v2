const pronote = require('pronote-api');
const prn_modules = require('./modules');

const { pronote_url, pronote_id, pronote_mdp, pronote_cas } = require('../config');

let session;

async function logIn() {
    session = await pronote.login(pronote_url, pronote_id, pronote_mdp, pronote_cas);

    return session;
}

async function fetchData() {
    await prn_modules.commands.moyenne.autoFetch();
    await prn_modules.commands.menu.autoFetch();

    await prn_modules.notifications.homeworks.autoFetch();
}

function startFetch() {
    function checkReady() {
        let { areClientsReady } = require('../config');
        if (!areClientsReady) {
            console.log('[FETCH] Clients not ready, retrying in 5 seconds...')
        } else {
            clearInterval(wait);
            setInterval(fetchData, 15 * 60 * 1000); // Fetch every 15 minutes
            fetchData();
        }
    }
    
    let wait = setInterval(checkReady, 5 * 1000);
    checkReady();
}

module.exports = {
    logIn,
    startFetch,
    session
}