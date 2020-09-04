const pronote = require('./pronote/index');
const pronote_api = require('pronote-api');

pronote.logIn().catch(err => {
    if (err.code === pronote_api.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
    process.exit(1);
}).then(loginSession => {
    const { enable_discord, setSession } = require('./config');
    
    setSession(loginSession);
    
    const { session } = require('./config');
    console.log('[PRONOTE] Logged in as ' + session.user.name + ', ' + session.user.studentClass.name);
    
    if (enable_discord == 'true') {
        const discord = require('./clients/discord/index');
    }
})