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
    mapping (address => uint256) private verifcationVote;
    mapping (address => bool) private isVerified;

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

    function removeIdentity(address userAddress) public{
        delete digitalIdentities[userAddress];
        delete identity[userAddress];
        //  dont need to delete the third-party verification of the address as the hashed identity will be deleted, leaving the third-party to access nothing
        delete verifcationVote[userAddress];
        delete isVerified[userAddress];
    }


    function revokeThirdParyVerification(address userAddress, address thirdPartyAddress) public{
        thirdPartyVerification[userAddress][thirdPartyAddress] = false;
    }
    
    function approveThirdPartyVerification(address userAddress, address thirdParyAdddress) public{
        thirdPartyVerification[userAddress][thirdParyAdddress] = true;
    }

    function updateIdentity(address userAddress, string memory fullName, string memory emailAddress, bytes32 hashedIdentity, uint256 dateOfBirth) public{
        individual storage updateIndividual = identity[msg.sender];
        updateIndividual.fullName = fullName;
        updateIndividual.emailAddress = emailAddress;
        updateIndividual.hashedIdentity = hashedIdentity;
        updateIndividual.dateOfBirth = dateOfBirth;
    }


    function getDigitalIdentity(address userAddress) public returns(bytes32){
        // returns the hash of the off-chain identification the user attached to the address has stored
        return digitalIdentities[userAddress];
    }

    function getIndividual(address userAddress) public returns(individual memory){
        return identity[userAddress];
    }

    function requestVerification() public{
        // this function is called by the user when they want to get verified, they can do this when a verified address has verified them
        // but maybe when a verified address has verified them it will be done automatically
    }

    function revokeVerification(address revokedAddress) public {
        // the owner of the contract is able to revoke the verification of an identity if they identify malicious actions
        // SHOULD CHANGE THIS FUNCTION TO A REQUIREMENT
        require(isOwner() == true);
        isVerified[revokedAddress] = false;
    }

    function isOwner() public returns(bool){
        if(contractOwner == msg.sender){
            return true;
        }else{
            return false;
        }
    }
    function isUserVerfied() public returns(bool){
        // returns true if the user is veried, else false
        return true;
    }

    function getVerifiedList() public{

    }
}
