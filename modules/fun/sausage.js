async function getSausage() {
    let sausagePics = [
        'https://i.kym-cdn.com/photos/images/original/001/876/456/67e.jpg',
        'https://barbecuebible.com/wp-content/uploads/2013/08/sausage630.jpg',
        'https://www.irishtimes.com/polopoly_fs/1.3879784.1556873201!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
        'https://www.goodfood.com.au/content/dam/images/4/a/r/a/y/image.related.articleLeadwide.620x349.gmur97.png/1466468156802.jpg',
        'https://static.hitek.fr/img/actualite/2016/08/23/fb_sausageparty.jpg',
        'https://img-3.journaldesfemmes.fr/RfBBp4A8htntkCp4QQQyf3Pz8pQ=/910x607/smart/b9ae277bf10e4c308b19a95f588b64c4/ccmcms-jdf/1604296.jpg',
        'https://www.johnsonville.com/.imaging/mte/johnsonville-retail/640-wide/dam/johnsonville/product-images/original-breakfast-links/jcr:content/original-breakfast-links.png',
        'https://www.thespruceeats.com/thmb/_Myz0lvufimfAjehD7EU24Qlziw=/948x533/smart/filters:no_upscale()/lamb-sausage-copy-56a6041b3df78cf7728aea60.jpg',
        'https://img.taste.com.au/VYcz0pA0/taste/2016/11/easy-sausage-rolls-28532-1.jpeg',
        'https://www.curiouscuisiniere.com/wp-content/uploads/2016/06/Homemade-Boerewors-South-African-Sausage-6540.450-320x240.jpg'
    ];

    return sausagePics[Math.floor(Math.random() * sausagePics.length)];
}

async function runDiscord() {
    msg = {
        useEmbed: false,
        content: await getSausage()
    }

    return msg;
}

module.exports = {
    name: "Saucisses",
    desc: "Envoie des photos de saucisses.",
    usage: "saucisse",
    getSausage,
    runDiscord
}