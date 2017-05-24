// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let passport = require('passport')
let cookieSession = require('cookie-session')
let cookieParser = require('cookie-parser')
let LocalStrategy = require('passport-local').Strategy
let mongoose = require('mongoose')
let db = mongoose.connection
let api = require('./lib/routes/api')

// DB Config
const TEST_DB = 'mongodb://localhost:27017/activoter'
let dbUri = process.env.MONGODB_URI || process.env.MONGOHQ_URL || TEST_DB

mongoose.connect(dbUri, (err, data) => {
	if (err) console.log (`Error connecting to: ${dbUri}. ${err}`)
	console.log (`Succeeded connected to: ${dbUri}`);
})

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

// App config
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

passport.use(new LocalStrategy((email, password, done) => {
	User.findOne({ email: email }, (err, user) => {
		if (err) return done(err)
		if (!user) {
			return done(null, false, { message: 'Incorrect email.' })
		}
		if (!user.validPassword(password)) {
			return done(null, false, { message: 'Incorrect password.' })
		}
		return done(null, user)
	})
}))

passport.serializeUser(function(user, done) {
	done(null, user._id)
})

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user)
	})
})

// Home route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})

// Login
app.post(
	'/login',
	passport.authenticate(
		'local',
		{
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: false
		}
	)
)

// Startup
let port = process.env.PORT || 9999
app.listen(port, () => {
	console.log('App running on: Port ' + port)	
})