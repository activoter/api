// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let causeSchema = new Schema({
	name: String,
	description: String,
	organizations: [{
		type: Schema.Types.ObjectId,
		ref: 'Organizations'
	}],
	followers: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}]
})

// Model
module.exports = restful.model('Causes', causeSchema)

console.log('Causes registered')