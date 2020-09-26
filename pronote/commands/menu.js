async function getMenu() {
    let { session } = require('../../config');
    const menu = await session.menu();
    console.log(menu);

    return menu;
}

async function runDiscord() {
    menu = await getMenu();

    if (menu[0] !== undefined) {
        msg = {
            useEmbed: true,
            embed: {
                title: 'Menu de la cantine',
                timestamp: menu[0].date,
                fields: []
            }
        }
    
        menu[0].meals[0].forEach(function(item) {
            let listItems = '';
            item.forEach(function(mealItem){
                listItems += mealItem.name + '\n';
            }
        );
    
            msg.embed.fields.push({
                name: '** **',
                value: listItems
            });
        });

        return msg;
    }

    else {
        return {
            useEmbed: false,
            content: 'Aucun menu pour cette journée.'
        }
    }
}

async function autoFetch() {
    const { enable_discord } = require('../../config');
    const fetch_db = require('../../database/utils/fetch');
    if ((Math.abs(new Date().getTime() - fetch_db.getLastFetch('menu')) / 3600000) < 24) {
        if (enable_discord == 'true') {
            dmenu = await runDiscord();
            let { chan_menu } = require('../../clients/discord');
            let { sendMessage } = require('../../clients/discord/messages');
            sendMessage(chan_menu, dmenu);
        }

        fetch_db.setLastFetch('menu', new Date().getTime());
    }
}

module.exports = {
    name: "Menu",
    desc: "Envoie le menu de la cantine du jour.",
    usage: "menu",
    runDiscord,
    autoFetch
}