// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let causeSchema = new mongoose.Schema({
	name: String,
	description: String,
	organizations: Array,
	followers: Array
})

// Model
module.exports = restful.model('Causes', causeSchema)

console.log('Causes registered')