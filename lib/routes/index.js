// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let cors = require('../../config/cors')

// Express config
app.use(cors)

// Callback
let callback = (req, res) => {
	let user = req.user
	console.log(`Form input - email: ${user.email} | password: ${user.password}`)
	if (!res) {
		console.log(`Error!`)
		return res.status(500).json(err)
	} else {
		console.log(`Success: ${user}`)
		return res.status(200).json(user)
	}
}

// Methods
module.exports = (app, passport) => {

	// Home
	app.get('/', (req, res) => console.log('Home', req.body))

	// Signup
	app.post('/signup', passport.authenticate('local-signup'), callback)

	// Login
	app.post('/login', passport.authenticate('local-login'), callback)

	// Logout
	app.get('/logout', (req, res) => req.logout())

}