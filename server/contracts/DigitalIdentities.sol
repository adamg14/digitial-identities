// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;


contract DigitialIdentities {

    address private contractOwner;
    string private fullName;
    bytes32 private hashedIdentity;
    address[] private verificationRequests;
    address[] verified;

    struct individual {
        string fullName;
        bytes32 hashedIdentity;
    }


    mapping (address => bytes32) private digitalIdentities;
    mapping (address => individual) private identity;
    mapping (address => mapping (address => bool)) private thirdPartyVerification;
    mapping (address => uint256) private verifcationVote;
    mapping (address => bool) private isVerified;

    constructor(){
        contractOwner = msg.sender; 
        isVerified[msg.sender] = true;
        verified.push(msg.sender);
    }

    modifier onlyOwner(){
        require(msg.sender == contractOwner, "Only the smart contract owner can perform this action");
        _;
    }

    modifier onlyVerified(){
        require(isVerified[msg.sender] == true, "Only verified users can perform this action");
        _;
    }

    function establishIdentity(string memory name, bytes32 identityHash) public{
        require(digitalIdentities[msg.sender] == bytes32(0), "Identity already exists");
        individual memory newIdentity = individual(name, identityHash);

    }

    function removeIdentity(address userAddress) public{
        delete digitalIdentities[userAddress];
        delete identity[userAddress];
        //  dont need to delete the third-party verification of the address as the hashed identity will be deleted, leaving the third-party to access nothing
        delete verifcationVote[userAddress];
        delete isVerified[userAddress];
    }

    function assignVerification(address userAddress) public onlyVerified{
        require(!isVerified[userAddress], "User is already verified");
        isVerified[userAddress] == true;
    }

    function revokeThirdParyVerification(address userAddress, address thirdPartyAddress) public{
        thirdPartyVerification[userAddress][thirdPartyAddress] = false;
    }
    
    function approveThirdPartyVerification(address userAddress, address thirdParyAdddress) public{
        thirdPartyVerification[userAddress][thirdParyAdddress] = true;
    }

    function updateIdentity(address updatedAdress, string memory updatedName, bytes32 updatedHash) public{
        individual storage updateIndividual = identity[msg.sender];
        updateIndividual.fullName = fullName;
        updateIndividual.hashedIdentity = hashedIdentity;
    }


    function getDigitalIdentity(address userAddress) view public returns(bytes32){
        // returns the hash of the off-chain identification the user attached to the address has stored
        return digitalIdentities[userAddress];
    }

    function getIndividual(address userAddress) public view returns(individual memory){
        return identity[userAddress];
    }

    function revokeVerification(address revokedAddress) public onlyOwner{
        // the owner of the contract is able to revoke the verification of an identity if they identify malicious actions
        // SHOULD CHANGE THIS FUNCTION TO A REQUIREMENT
        isVerified[revokedAddress] = false;
    }

    function requestVerification() public{
        verificationRequests.push(msg.sender);
    }

    function isUserVerfied() public view returns(bool){
        // returns true if the user is veried, else false
        return isVerified[msg.sender];
    }

    function getVerifiedUsersList() public view returns(address[] memory){
        return verified;
    }
}
