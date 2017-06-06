// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let cors = require('../../config/cors')

// Express config
app.use(cors)

// Methods
module.exports = (app, passport) => {

	// Home
	app.get('/', (req, res) => {
		console.log('Home', req.body)
	})

	// Signup
	app.post('/signup', passport.authenticate('local-signup'), (req, res) => {
		console.log(`Request: ${req.user.email} | ${req.user.password}`)
		if (!res) {
			console.log(`Error: ${res}`)
		} else {
			console.log(`Success: ${req.user}`)			
			return req.user
		}

	})

	// Login
	app.post('/login', passport.authenticate('local-login'), (req, res) => {
		console.log(`Request: ${req.user.email} | ${req.user.password}`)
		if (!res) {
			console.log(`Error: ${res}`)
		} else {
			console.log(`Success: ${req.user}`)			
			return req.user
		}
	})

	app.get('/logout', (req, res) => {
		req.logout()
	})

}