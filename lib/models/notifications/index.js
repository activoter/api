// Dependencies
let restful = require('node-restful')
let mongoose = restful.mongoose

// Schema
let notificationSchema = new mongoose.Schema({
	name: String
})

// Model
module.exports = restful.model('Notifications', notificationSchema)

console.log('Notifications registered')