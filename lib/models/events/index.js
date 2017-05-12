// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let eventSchema = new mongoose.Schema({
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
	hosts: Array,
	attendees: Array
})

// Model
module.exports = restful.model('Events', eventSchema)

console.log('Events registered')