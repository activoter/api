// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let cookieSession = require('cookie-session')
let cookieParser = require('cookie-parser')
let api = require('./lib/routes/api')

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

// CORS settings
let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
	if (req.method == 'OPTIONS') {
		res.send(200)
	} else {
		next()
    }
}

// Express config
app.use(allowCrossDomain)
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
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})
require('./lib/routes')(app, passport)

// Startup
let port = process.env.PORT || 9999
app.listen(port, () => {
	console.log('App running on: Port ' + port)	
})