const FirstToken = artifacts.require("FirstToken");
const SecondToken = artifacts.require("SecondToken");

// const json = require('@uniswap/v2-core/build/UniswapV2Factory.json')
// const contract = require('@truffle/contract');
// const UniswapV2Factory = contract(json);

// UniswapV2Factory.setProvider(this.web3._provider);

module.exports = async function(callback) {
    var abi = [{ "inputs": [{ "internalType": "address", "name": "_feeToSetter", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "token0", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token1", "type": "address" }, { "indexed": false, "internalType": "address", "name": "pair", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }], "name": "PairCreated", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "allPairs", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "allPairsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }], "name": "createPair", "outputs": [{ "internalType": "address", "name": "pair", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "feeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "feeToSetter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "getPair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_feeTo", "type": "address" }], "name": "setFeeTo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_feeToSetter", "type": "address" }], "name": "setFeeToSetter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
    // this is the address where the UniswapV2Factory is deployed! You can deploy the UniswapV2Factory contract using migrations and then 
    // simply copy the smart contract address that appears in the console output to here
    var contractAddress = "0x91189BF0d6BD73925D1E4cdD752FBe710658CB35";
    console.log('hi')
    // web3.eth.contract(abi).at(contract_address) is the  magic line to get the contract object.
    // const uniswapV2Factory = new web3.eth.Contract(abi).at(contractAddress);
    const uniswapV2Factory = new web3.eth.Contract(abi, contractAddress);
    // const uniswapV2Factory = await UniswapV2Factory.deployed()
    console.log('hi')
    const firstToken = await FirstToken.deployed()
    const secondToken = await SecondToken.deployed()
    console.log(firstToken.address)

    const allPairsLength = await uniswapV2Factory.methods.allPairsLength().call()
    console.log('ola mundo')
    console.log(allPairsLength)
    const pair = await uniswapV2Factory.methods.createPair(firstToken.address, secondToken.address).send()
    console.log(pair)
    const allPairsLength2 = await uniswapV2Factory.methods.allPairsLength().call()
    console.log(allPairsLength2)
};