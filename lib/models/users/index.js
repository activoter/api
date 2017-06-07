// Dependencies
let restful = require('node-restful')
let bcrypt = require('bcrypt')
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

// Methods
let callback = (err, res) => {
	if (err) { console.log(err) }
	else { console.log(res) }
}

userSchema.methods.generateHash = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5))
}

userSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password)
}

// Model
module.exports = restful.model('Users', userSchema)

console.log('Users registered')