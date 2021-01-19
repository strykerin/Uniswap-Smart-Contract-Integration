pragma solidity ^0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SecondToken is ERC20 {
    constructor() public ERC20("SecondToken", "SCN"){
        _mint(msg.sender, 1000000);
    }
}