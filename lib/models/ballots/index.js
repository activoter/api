// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let ballotSchema = new Schema({
	name: String,
	description: String,
	date: Date,
	image: String,
	location: {
		name: String,
		scope: String // Precinct, City, State, Country
	},
	measures: [{
		type: Schema.Types.ObjectId,
		ref: 'Measures'
	}]
})

// Model
module.exports = restful.model('Ballots', ballotSchema)

console.log('Ballots registered')