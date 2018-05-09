// Dependencies
let chain = require('./chain').Chain
let block = require('./block').Block

// Init
let votes = new chain()

// Test
console.log('Mining block 1...')
votes.addBlock(new block(1, '01/02/2018', { vote: true }))
console.log('Mining block 2...')
votes.addBlock(new block(2, '01/03/2018', { vote: false }))

// Validation
if(votes.validateChain()){
	console.log('Blockchain is valid')
	console.log(JSON.stringify(votes, null, 4))
} else {
	console.log('Blockchain is not valid')
}