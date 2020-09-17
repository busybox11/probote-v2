async function getMenu() {
    let { session } = require('../../config');
    const menu = await session.menu();

    return menu;
}

async function runDiscord() {
    menu = await getMenu();
    console.log(menu);
}

module.exports = {
    name: "Menu",
    desc: "Envoie le menu de la cantine du jour.",
    usage: "menu",
    runDiscord
}