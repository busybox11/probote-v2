const { enable_discord } = require('./config');

if (enable_discord == 'true') {
    const discord = require('./clients/discord/index');
}