// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let organizationSchema = new Schema({
	name: String,
	type: String,
	description: String,
	supports: [{
		type: Schema.Types.ObjectId,
		ref: 'Causes'
	}],
	members: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}]
})

// Model
module.exports = restful.model('Organizations', organizationSchema)

console.log('Organizations registered')