// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose
let Schema = mongoose.Schema

// Schema
let notificationSchema = new Schema({
	name: String,
	description: String,
	about: {
		_id: Schema.Types.ObjectId,
		collection: String
	},
	date: {
		type: Date,
		default: Date.now
	}
})

// Model
module.exports = restful.model('Notifications', notificationSchema)

console.log('Notifications registered')