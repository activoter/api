// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let petitionSchema = new Schema({
	name: String,
	description: String,
	date: {
		created: Date,
		expires: Date
	},
	authors: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}],
	supporters: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}]
})

// Model
module.exports = restful.model('Petitions', petitionSchema)

console.log('Petitions registered')