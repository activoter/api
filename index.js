let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let db = mongoose.connection
let api = require('./lib/routes/api')

// Dev DB
mongoose.connect('mongodb://localhost:27017/activoter')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('DB connected')
})

// Prod DB
// let mongodbUri = '',
// mongoose.connect(mongodbUri);

// Config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use('/', api)

// Root
/*
app.get('/', (req, res) => {
	res.sendfile(path.join(__dirname + '/index.html'))
})
*/

// Startup
let port = 9999
app.listen(port, () => {
	console.log('Listening on Port ' + port)	
})