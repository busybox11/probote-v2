let { getDB, setDB } = require('../../database');

function setLastFetch(type, date) {
    general = getDB('general');
    eval(`general.lastFetch.${type} = ${date}`);
    setDB('general', general);
}

module.exports = {
    setLastFetch
}