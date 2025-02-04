// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract DigitalIdentities {
    address private contractOwner;
    address[] private verificationRequests;
    address[] public verified;
    uint256 private verificationAmount;

    struct Individual {
        string fullName;
        bytes32 hashedIdentity;
        address wallet;
    }

    mapping(address => Individual) private identity;
    // not sure if this variable is necessary
    mapping(address => bytes32) private digitalIdentities;
    mapping(address => bool) public isVerified;
    mapping(address => mapping(address => bool )) private viewPermissions;
    mapping(address => address[]) private viewRequests;
    mapping(address => address[]) private grantedPermissions;
    event IdentityEstablished(address indexed walletAddress);
    event IdentityUpdated(address indexed userAddress);
    event UserVerified(address indexed userAddress);
    event VerificationRequested(address indexed userAddress);
    event VerificationRevoked(address indexed userAddress);
    event VerificationPaymentMade(address indexed userAddress, uint256 amount);
    event FundsWithdrawn(address indexed owner, uint256 amount);
    event verificationAmountUpdate(uint256 newAmount);
    event ViewPermissionGranted(address indexed owner, address indexed viewer);
    event ViewPermissionRevoked(address indexed owner, address indexed viewer);
    event ViewPermissionRequested(address indexed requester, address indexed owner);
    event ViewPermissionRequestCancelled(address indexed requester, address indexed owner);

    constructor(string memory fullName, bytes32 hashedIdentity) {
        contractOwner = msg.sender;
        isVerified[msg.sender] = true;
        Individual memory owner = Individual( fullName, hashedIdentity, msg.sender);
        identity[msg.sender] = owner;

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
        require(digitalIdentities[msg.sender] == 0, "Identity already exists");
        Individual memory newIdentity = Individual(fullName, hashedIdentity, msg.sender);
        identity[msg.sender] = newIdentity;
        digitalIdentities[msg.sender] = hashedIdentity;

        emit IdentityEstablished(msg.sender);
    }

    function updateIdentity(
        string memory updatedName,
        bytes32 updatedHash
    ) public {
        Individual storage updateIndividual = identity[msg.sender];
        updateIndividual.fullName = updatedName;
        updateIndividual.hashedIdentity = updatedHash;

        emit IdentityUpdated(msg.sender);
    }

    function assignVerification(address userAddress) public onlyVerified {
        require(!isVerified[userAddress], "User is already verified");
        isVerified[userAddress] = true;

        emit UserVerified(userAddress);
    }

    function requestVerification() public{
        require(digitalIdentities[msg.sender] != 0, "You do not have a registered account");
        require(isVerified[msg.sender] == true, "You are already verified");
        verificationRequests.push(msg.sender);

        emit VerificationRequested(msg.sender);
    }

    function revokeVerification(address revokedAddress) public onlyOwner {
        isVerified[revokedAddress] = false;

        emit VerificationRevoked(revokedAddress);
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

        emit VerificationPaymentMade(msg.sender, verificationAmount);
    }

    function updateVerificationAmount(uint256 newAmount) public onlyOwner{
        verificationAmount = newAmount;
        emit verificationAmountUpdate(newAmount);
    }

    // get the balance of smart contracts coming from paid verification
    function getBalance() external view returns (uint256){
        return address(this).balance;
    }

    // a function that allows the contract owner to withdraw funds
    function withdrawContractFunds(uint256 amount) public onlyOwner{
        require(amount <= address(this).balance, "Insufficient balance in this smart contract");
        payable(contractOwner).transfer(amount);
    }

    function grantViewPermission(address viewer) public {
        require(identity[msg.sender].wallet != address(0), "Identity not found");
        require(viewer != msg.sender, "You cannot grant permissions to yourself");

        viewPermissions[msg.sender][viewer] = true;
        grantedPermissions[msg.sender].push(viewer);

        emit ViewPermissionGranted(msg.sender, viewer);
    }

    function revokeViewPermission(address viewer) public{
        require(identity[msg.sender].wallet != address(0), "Identity not found");
        require(viewer != msg.sender, "You cannot grant permission to yourself");
        
        viewPermissions[msg.sender][viewer] = false;

        emit ViewPermissionRevoked(msg.sender, viewer);
    }

    function viewIdentityPermission(address owner, address viewer) public view returns(bool){
        return viewPermissions[owner][viewer];
    }

    function viewMyPermssions() public view returns (address[] memory){
        return grantedPermissions[msg.sender];
    }

    function viewIdentityHash(address owner) public view returns (bytes32){
        require(viewPermissions[owner][msg.sender] == true, "Permission not granted.");
        return identity[owner].hashedIdentity;
    }

    function requestViewPermission(address owner) public{
        require(identity[owner].wallet != address(0), "Owner does not exist");
        require(msg.sender != owner, "You cannot request permission for yourself");
        
        viewRequests[owner].push(msg.sender);

        emit ViewPermissionRequested(msg.sender, owner);

    }

    function cancelViewPermissionRequest(address owner) public {
    // Remove the requester from the list
    for (uint256 i = 0; i < viewRequests[owner].length; i++) {
        if (viewRequests[owner][i] == msg.sender) {
            viewRequests[owner][i] = viewRequests[owner][viewRequests[owner].length - 1];
            viewRequests[owner].pop();
            emit ViewPermissionRequestCancelled(msg.sender, owner);
        }
    }
}

    function getViewRequests(address owner) public view returns (address[] memory){
        require(msg.sender == owner, "You can only view your own requests");

        return viewRequests[msg.sender];
    }
}
