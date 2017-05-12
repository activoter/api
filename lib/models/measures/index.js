// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let measureSchema = new mongoose.Schema({
	name: String,
	description: String,
	choices: Array,
	location: {
		name: String,
		type: String // Precinct, City, State, Country
	},
	ballot_id: String
})

// Model
module.exports = restful.model('Measures', measureSchema)

console.log('Measures registered')