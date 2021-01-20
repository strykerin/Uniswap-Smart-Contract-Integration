# Uniswap-Smart-Contract-Integration

## Deploy `UniswapV2Factory` contract
In order to deploy the `UniswapV2Factory` contract, follow the steps by this [article](https://ethereum.stackexchange.com/questions/87523/deploy-pre-compiled-bytecode-using-truffle-migrations-deployer-api):
```javascript
const json = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const contract = require('@truffle/contract');
const UniswapV2Factory = contract(json);

UniswapV2Factory.setProvider(this.web3._provider);

module.exports = function(_deployer, network, accounts) {
    _deployer.deploy(UniswapV2Factory, accounts[0], {from: accounts[0]})
};
```
## Fork Ethereum mainnet
```powershell
ganache-cli --fork NODE_URL
```
