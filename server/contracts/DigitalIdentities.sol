// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract DigitalIdentities {
    address private contractOwner;
    uint256 private identityId = 0;
    address[] private verificationRequests;
    address[] public verified;
    uint256 private verificationAmount;

    struct Individual {
        uint256 id;
        string fullName;
        bytes32 hashedIdentity;
        address wallet;
    }

    mapping(address => Individual) private identity;
    // not sure if this variable is necessary
    mapping(address => bytes32) private digitalIdentities;
    mapping(address => bool) private isVerified;

    event identityEstablished(uint256 identityID, address walletAddress);

    constructor(string memory fullName, bytes32 hashedIdentity) {
        contractOwner = msg.sender;
        isVerified[msg.sender] = true; 
        Individual memory owner = Individual(identityId, fullName, hashedIdentity, msg.sender);
        identity[msg.sender] = owner;
        identityId += 1;

        // add the owner to the identity mappting
        // Contract owner is verified by default
    }

    modifier onlyOwner() {
        require(msg.sender == contractOwner, "Only the smart contract owner can perform this action");
        _;
    }

    modifier onlyVerified() {
        require(isVerified[msg.sender], "Only verified users can perform this action");
        _;
    }

    function establishIdentity(
        string memory fullName,
        bytes32 hashedIdentity
    ) public {
        require(identity[msg.sender].id == 0, "Identity already exists");
        Individual memory newIdentity = Individual(identityId, fullName, hashedIdentity, msg.sender);
        identityId += 1;
        identity[msg.sender] = newIdentity;
        digitalIdentities[msg.sender] = hashedIdentity;
    }

    function updateIdentity(
        address updatedAddress,
        string memory updatedName,
        bytes32 updatedHash
    ) public {
        Individual storage updateIndividual = identity[updatedAddress];
        updateIndividual.fullName = updatedName;
        updateIndividual.hashedIdentity = updatedHash;
    }

    function assignVerification(address userAddress) public onlyVerified {
        require(!isVerified[userAddress], "User is already verified");
        isVerified[userAddress] = true;
    }

    function requestVerification() public{
        require(digitalIdentities[msg.sender] == 0, "You do not have a registered account");
        require(isVerified[msg.sender] == true, "You are already verified");
        verificationRequests.push(msg.sender);
    }

    function revokeVerification(address revokedAddress) public onlyOwner {
        isVerified[revokedAddress] = false;
    }

    function getDigitalIdentity(address userAddress) public view returns (bytes32) {
        return digitalIdentities[userAddress];
    }

    function isUserVerified(address userAddress) public view returns (bool) {
        return isVerified[userAddress];
    }

    // a function to allow a user to pay for verification
    function verificationPayment() public payable{
        require(msg.value >= verificationAmount, "Insufficient funds");
        isVerified[msg.sender] = true;
    }

    function updateVerificationAmount(uint256 newAmount) public onlyOwner{
        verificationAmount = newAmount;
    }

    // a function that allows the contract owner to withdraw funds
    function withdrawContractFunds() public onlyOwner{

    }
}
