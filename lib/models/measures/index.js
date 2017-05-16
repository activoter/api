// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let measureSchema = new Schema({
	name: String,
	type: String,
	description: String,
	location: {
		name: String,
		scope: String // Precinct, City, State, Country
	},
	issues: [{
		type: Schema.Types.ObjectId,
		ref: 'Issues'
	}],
	votes: [{
		type: Schema.Types.ObjectId,
		ref: 'Votes'
	}]
})

// Model
module.exports = restful.model('Measures', measureSchema)

console.log('Measures registered')