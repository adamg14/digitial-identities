// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;


contract DigitialIdentities {

    address private contractOwner;
    string private fullName;
    string private emailAddress;
    bytes32 private hashedIdentity;
    uint256 private dateOfBirth;

    struct individual {
        string fullName;
        string emailAddress;
        bytes32 hashedIdentity;
        uint256 dateOfBirth;
    }


    mapping (address => bytes32) private digitalIdentities;
    mapping (address => individual) private identity;
    mapping (address => mapping (address => bool)) private thirdPartyVerification;


    constructor(){
        contractOwner = msg.sender; 
    }

    function establishIdentity(address userAddress, string memory userName, string memory userEmail, bytes32 userHash, uint256 userDOB) public{
        // check if the identity already exists

        // the person who sends the transaction is the one who's identity is being verified
        individual memory newInstance = individual(userName, userEmail, userHash, userDOB);

        digitalIdentities[userAddress] = hashedIdentity;
        identity[userAddress] = newInstance;
    }
}
