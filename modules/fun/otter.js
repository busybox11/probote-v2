async function getOtter() {
	let otterPics = [
		'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/group/otters/north-american-river-otter-2411766.jpg',
		'https://www.marylandzoo.org/wp-content/uploads/2017/10/river_otter_web.jpg',
		'https://www.seaotters.com/wp-content/uploads/2018/11/seaottersdotcom-happy-otter-1080x675.jpg',
		'https://www.rsb.org.uk/images/1_Biology_Week_2019/poll/Otter.png',
		'https://www.hakaimagazine.com/wp-content/uploads/header-sea-otter-reintroduction-1.jpg',
		'https://images.unsplash.com/photo-1530701594694-da628544d738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
		'https://www.sciencenews.org/wp-content/uploads/2020/05/050520_SM_otter-juggler_feat.jpg',
		'https://www.thelocal.no/userdata/images/article/ab4bee994b2d669468516bc593787d72be9e0a01948c0394b1cfc71897b5a9c1.jpg',
		'https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Mammals/mammal_north-american-river-otter_600x300.ashx',
		'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Sea-Otter-photo.jpg'
	]

	return otterPics[Math.floor(Math.random() * otterPics.length)]
}

async function runDiscord() {
	let msg = {
		useEmbed: false,
		content: await getOtter()
	}

	return msg
}

module.exports = {
	name: 'Loutre',
	desc: 'Envoie des photos de loutres.',
	usage: 'loutre',
	getOtter,
	runDiscord
}