// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let userSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: Number,
	location: {
		address: {
			street: String,
			unit: String,
			city: String,
			county: String,
			state: String,
			country: String,
			zip: Number
		},
		precinct: Number
	},
	identification: {
		dob: Date,
		ssn: Number,
		photo_id: String
	},
	portrait: String,
	memberships: Array,
	following: Array,
	followers: Array
})

// Model
module.exports = restful.model('Users', userSchema)

console.log('Users registered')