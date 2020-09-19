const fs = require('fs');

let general, homework, grades, infos, timetable;

function getDB(dbname) {
    return eval(dbname);
}

function setDB(dbname, dbvar) {
    eval(dbname + " = dbvar;");
}

module.exports = {
    getDB,
    setDB
}