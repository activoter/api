// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let voteSchema = new Schema({
	choice: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: 'Users'
	},
	date: {
		type: Date,
		default: Date.now
	}
})

// Model
module.exports = restful.model('Votes', voteSchema)

console.log('Votes registered')