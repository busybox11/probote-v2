let { getDB, setDB } = require('../../database');

async function setLastFetch(type, date) {
    let general = await getDB('general');
    eval(`general.lastFetch.${type} = ${date}`);
    await setDB('general', general);
}

async function getLastFetch(type) {
    let general = await getDB('general');
    console.log('[DATABASE] Fetched date')
    
    fetch = eval(`general.lastFetch.${type}`);
    if (fetch == null) {
        return 0;
    } else {
        return fetch;
    }
}

module.exports = {
    setLastFetch,
    getLastFetch
}