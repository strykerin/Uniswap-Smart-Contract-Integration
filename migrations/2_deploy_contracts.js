const FirstToken = artifacts.require("FirstToken");
const SecondToken = artifacts.require("SecondToken");


const json = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const contract = require('@truffle/contract');
const UniswapV2Factory = contract(json);

UniswapV2Factory.setProvider(this.web3._provider);

module.exports = async function(_deployer, network, accounts) {
    await _deployer.deploy(UniswapV2Factory, accounts[0], {from: accounts[0]})
    const uniswapV2Factory = await UniswapV2Factory.deployed()

    await _deployer.deploy(FirstToken);
    const firstToken = await FirstToken.deployed()

    await _deployer.deploy(SecondToken);
    const secondToken = await SecondToken.deployed()
};