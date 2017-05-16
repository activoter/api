// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let issueSchema = new Schema({
	name: String,
	description: String,
	causes: [{
		type: Schema.Types.ObjectId,
		ref: 'Causes'
	}]
})

// Model
module.exports = restful.model('Issues', issueSchema)

console.log('Issues registered')