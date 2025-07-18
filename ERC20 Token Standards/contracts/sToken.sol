// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract sToken is ERC20, Ownable, ERC20Burnable {
    address public vault;

    modifier onlyVault() {
        require(msg.sender == vault, "Only vault can call");
        _;
    }

    constructor(string memory name_, string memory symbol_, address vault_) ERC20(name_, symbol_) {
        require(vault_ != address(0), "Vault address cannot be zero");
        vault = vault_;
    }

    function mint(address to, uint256 amount) external onlyVault {
        require(to != address(0), "Mint to zero address");
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyVault override {
        require(from != address(0), "Burn from zero address");
        _burn(from, amount);
    }
}
