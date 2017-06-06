// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let cookieSession = require('cookie-session')
let cookieParser = require('cookie-parser')
let api = require('./lib/routes/api')
let cors = require('./config/cors')

// Database
let mongoose = require('mongoose')
let db = mongoose.connection
let dbConfig = require('./config/database')
let dbURI = process.env.MONGODB_URI || process.env.MONGOHQ_URL || dbConfig.test

mongoose.connect(dbURI, (err, data) => {
	if (err) console.log (`Error connecting to: ${dbURI}. ${err}`)
	console.log (`Succeeded connected to: ${dbURI}`);
})

// Auth
let passport = require('passport')
require('./config/passport')(passport)

// Express config
app.use(cors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(cookieSession({
	name: 'session',
	keys: ['tricky'],
	maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
app.use('/', api)

// Routes
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})
require('./lib/routes')(app, passport)

// Startup
let port = process.env.PORT || 9999
app.listen(port, () => {
	console.log('App running on: Port ' + port)	
})