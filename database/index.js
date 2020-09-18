const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/probote.db',
    logging: false
});

try {
    db.authenticate();
    console.log('[DATABASE] Succesfully initialized database connection');
} catch (error) {
    console.error('[DATABASE] Couldn\'t initialize database connection\n', error);
}

module.exports = {
    db
}