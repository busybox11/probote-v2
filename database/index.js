const fs = require('fs')

async function getDB(dbname) {
	let dbcontent
	try {
		dbcontent = JSON.parse(fs.readFileSync(`database/files/${dbname}.json`))
	} catch (error) {
		if (error.code === 'ENOENT') {
			// eslint-disable-next-line no-unused-vars
			const schemes = require('./utils').schemes
			if (typeof eval(`schemes.${dbname}`) === 'object') {
				console.log(`[DATABASE] New database with scheme ${dbname}`)
				setDB(dbname, eval(`schemes.${dbname}`))
			} else {
				console.log(`[DATABASE] Empty database created with example ${dbname}`)
				setDB(dbname, {})
			}
			dbcontent = JSON.parse(fs.readFileSync(`database/files/${dbname}.json`))
		} else {
			console.error('[DATABASE] Error while reading data\n', error)
			throw error
		}
	}
	return dbcontent
}

async function setDB(dbname, dbvar) {
	try {
		if (!fs.existsSync(`database/files/${dbname}.json`)) {
			console.log(`[DATABASE] New database ${dbname}`)
		}
	} catch(err) {
		console.error('[DATABASE] Couldn\'t check if database exists\n', err)
	}
	try {
		fs.writeFileSync(`database/files/${dbname}.json`, JSON.stringify(dbvar))
		return dbvar
	} catch (error) {
		console.error('[DATABASE] Error while saving data\n', error)
		throw error
	}
}

module.exports = {
	getDB,
	setDB
}

exports.utils = require('./utils')