"use strict"

let block = require('./block')

class Chain {
	constructor(){
		this.chain = [this.createGenesisBlock()]
		this.difficulty = 4
	}
	createGenesisBlock(){
		return new block.Block(0, '01/01/2018', 'Genesis block', '0')
	}
	getLastBlock(){
		return this.chain[this.chain.length - 1]
	}
	addBlock(newBlock){
		newBlock.previousHash = this.getLastBlock().hash
		newBlock.mineBlock(this.difficulty)
		this.chain.push(newBlock)
	}
	validateChain(){
		for(let i = 1; i < this.chain.length; i++){
			const currentBlock = this.chain[i]
			const previousBlock = this.chain[i - 1]
			if(currentBlock.hash !== currentBlock.calculateHash()){
				return false
			}
			if(currentBlock.previousHash !== previousBlock.hash){
				return false
			}
			return true
		}
	}
}

module.exports.Chain = Chain