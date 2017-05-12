// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let petitionSchema = new mongoose.Schema({
	name: String,
	question: String,
	choices: Array,
	authors: Array,
	supporters: Array
})

// Model
module.exports = restful.model('Petitions', petitionSchema)

console.log('Petitions registered')