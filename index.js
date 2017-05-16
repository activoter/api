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

// API Config
app.use(allowCrossDomain)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/', api)

// Root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})

// Startup
let port = process.env.PORT || 9999
app.listen(port, () => {
	console.log('App running on: Port ' + port)	
})