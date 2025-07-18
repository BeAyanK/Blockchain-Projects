// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TemplateERC20 is ERC20 {
    uint256 public currentSupply;

    constructor(string memory _name, string memory _symbol, uint256 _initialSupply)
        ERC20(_name, _symbol)
    {
        require(_initialSupply > 0, "Initial supply must be positive");
        _mint(msg.sender, _initialSupply);
        currentSupply = totalSupply(); // Reflect supply after mint
    }
}
