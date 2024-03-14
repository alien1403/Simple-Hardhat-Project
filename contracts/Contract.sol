// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    mapping(address => bool) public members;

    function addMember(address _address) external {
        members[_address] = true;
    }

    function callAttempt(address contractWinner) external {
        bytes memory payload = abi.encodeWithSignature("attempt()");
        (bool success, ) = contractWinner.call(payload);
        require(success);
    }
}
