// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let eventSchema = new Schema({
	name: String,
	description: String,
	date: Date,
	location: {
		address: {
			street: String,
			city: String,
			state: String,
			zip: Number
		}
	},
	hosts: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}],
	attendees: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}]
})

// Model
module.exports = restful.model('Events', eventSchema)

console.log('Events registered')