// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let issueSchema = new mongoose.Schema({
	name: String,
	causes: Array
})

// Model
module.exports = restful.model('Issues', issueSchema)

console.log('Issues registered')