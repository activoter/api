// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let ballotSchema = new mongoose.Schema({
	name: String,
	description: String,
	date: Date,
	location: {
		name: String,
		type: String // Precinct, City, State, Country
	},
	measures: Array
})

// Model
module.exports = restful.model('Ballots', ballotSchema)

console.log('Ballots registered')