const METHODS = require('./api-methods.js')

// Methods
let c = METHODS.cr
let r = METHODS.re
let u = METHODS.up
let d = METHODS.de

module.exports = [
	{name: 'ballots', methods: [c,r,u,d]},
	{name: 'causes', methods: [c,r,u,d]},
	{name: 'events', methods: [c,r,u,d]},
	{name: 'issues', methods: [c,r,u,d]},
	{name: 'measures', methods: [c,r,u,d]},
	{name: 'notifications', methods: [c,r,u,d]},
	{name: 'organizations', methods: [c,r,u,d]},
	{name: 'petitions', methods: [c,r,u,d]},
	{name: 'users', methods: [c,r,u,d]}
]