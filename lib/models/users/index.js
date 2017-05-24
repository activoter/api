// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let userSchema = new Schema({
	name: String,
	password: String,
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
	supports: [{
		type: Schema.Types.ObjectId,
		ref: 'Causes'
	}],
	memberships: [{
		type: Schema.Types.ObjectId,
		ref: 'Organizations'
	}],
	following: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}],
	followers: [{
		type: Schema.Types.ObjectId,
		ref: 'Users'
	}]
})

// Model
module.exports = restful.model('Users', userSchema)

console.log('Users registered')