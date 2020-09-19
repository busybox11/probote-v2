const fs = require('fs');

let general, homework, grades, infos, timetable;

function getDB(dbname) {
    let dbcontent;
    try {
        dbcontent = JSON.parse(fs.readFileSync(`database/files/${dbname}.json`));
    } catch (error) {
        console.error("[DATABASE] Error while reading data\n", err);
    }
    return dbcontent;
}

function setDB(dbname, dbvar) {
    try {
        fs.writeFileSync(`database/files/${dbname}.json`, JSON.stringify(dbvar));
    } catch (error) {
        console.error("[DATABASE] Error while saving data\n", err);
    }
}

module.exports = {
    getDB,
    setDB
}