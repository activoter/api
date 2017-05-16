const METHODS = require('./api-methods.js')

// Methods
let c = METHODS.post
let r = METHODS.get
let u = METHODS.put
let m = METHODS.patch
let d = METHODS.delete

module.exports = [
	{name: 'ballots', methods: [c,r,u,m,d]},
	{name: 'causes', methods: [c,r,u,m,d]},
	{name: 'events', methods: [c,r,u,m,d]},
	{name: 'issues', methods: [c,r,u,m,d]},
	{name: 'measures', methods: [c,r,u,m,d]},
	{name: 'notifications', methods: [c,r,u,m,d]},
	{name: 'organizations', methods: [c,r,u,m,d]},
	{name: 'petitions', methods: [c,r,u,m,d]},
	{name: 'users', methods: [c,r,u,m,d]},
	{name: 'votes', methods: [c,r,u,m,d]}
]