// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let organizationSchema = new mongoose.Schema({
	name: String,
	type: String,
	description: String,
	members: Array
})

// Model
module.exports = restful.model('Organizations', organizationSchema)

console.log('Organizations registered')