// Dependencies
let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
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
app.use('/', api)

// Home route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})

// Startup
let port = process.env.PORT || 9999
app.listen(port, () => {
	console.log('App running on: Port ' + port)	
})