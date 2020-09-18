const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./database/probote.db', (err) => {
    if (err) {
        console.error('[SQLITE] Couldn\'t initialize database connection');
        console.error(err);
    }
    console.log('[SQLITE] Database connection initialized');
});

module.exports = {
    db
}