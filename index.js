let childProcess = require('child_process');

const { enable_discord } = require('./config');

if (enable_discord == 'true') {
    var process = childProcess.fork("./clients/discord/index.js");
}