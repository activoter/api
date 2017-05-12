// Dependencies
let express = require('express')
let router = express.Router()
const API_ROUTES = require('./api-routes.js')

// Methods
let routeConstructor = (routes) => {
	console.log(routes)
	for (let i = 0; i < routes.length; i++) {
		let route = routes[i]
		let model = require(`../models/${route.name}`)
		model.methods(route.methods)
		model.register(router, '/${route.name}')
		console.log(`${route.name} route setup complete`)
	}
}

// Run
routeConstructor(API_ROUTES)

// Exports
module.exports = router