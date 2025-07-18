// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {sToken} from "./sToken.sol";

contract StackupVault {
    mapping(address => IERC20) public tokens;
    mapping(address => sToken) public claimTokens;

    constructor(address uniAddr, address linkAddr) {
        require(uniAddr != address(0) && linkAddr != address(0), "Invalid token address");

        // Deploy claim tokens
        sToken sUni = new sToken("Claim Uni", "sUNI", address(this));
        sToken sLink = new sToken("Claim LINK", "sLINK", address(this));

        // Set token mappings
        tokens[uniAddr] = IERC20(uniAddr);
        tokens[linkAddr] = IERC20(linkAddr);

        claimTokens[uniAddr] = sUni;
        claimTokens[linkAddr] = sLink;
    }

    function deposit(address tokenAddr, uint256 amount) external {
        require(tokens[tokenAddr] != IERC20(address(0)), "Unsupported token");
        require(amount > 0, "Amount must be > 0");

        bool success = tokens[tokenAddr].transferFrom(msg.sender, address(this), amount);
        require(success, "Transfer failed");

        claimTokens[tokenAddr].mint(msg.sender, amount);
    }

    function withdraw(address tokenAddr, uint256 amount) external {
        require(tokens[tokenAddr] != IERC20(address(0)), "Unsupported token");
        require(amount > 0, "Amount must be > 0");

        claimTokens[tokenAddr].burn(msg.sender, amount);

        bool success = tokens[tokenAddr].transfer(msg.sender, amount);
        require(success, "Withdraw failed");
    }
}
