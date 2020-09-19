let { getDB, setDB } = require('../../database');

function setLastFetch(type, date) {
    general = getDB('general');
    eval(`general.lastFetch.${type} = ${date}`);
    setDB('general', general);
}

function getLastFetch(type) {
    general = getDB('general');
    
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