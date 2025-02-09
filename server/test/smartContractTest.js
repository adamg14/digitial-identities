const { expect } = require("chai");
const { ethers } = require("hardhat");
const { web3 } = require("web3");

describe("DigitalIdentities", function () {
    let DigitalIdentities, smartContract;
    let owner, address1;

    before(async function () {
        [owner, address1] = await ethers.getSigners();
        
        console.log("address 1: ", address1.address); 
        console.log("Owner Address:", owner.address);

        // Get ContractFactory
        DigitalIdentities = await ethers.getContractFactory("DigitalIdentities");

        // Deploy contract with constructor parameters
        smartContract = await DigitalIdentities.deploy(
            "Adam Worede",
            ethers.keccak256(ethers.toUtf8Bytes("123456789"))
        );

        await smartContract.waitForDeployment();

        console.log("Contract deployed at:", smartContract.target); 
    });

    it("✅ Should validate that the contract is deployed", async function () {
        const contractAddr = await smartContract.getAddress();
        console.log("Contract Address:", contractAddr);
        expect(contractAddr).to.properAddress;
    });

    it("✅ The deployer (contract owner) should be automatically verified", async function () {
      const isVerified = await smartContract.isUserVerified(owner.address);
      console.log("Is contract owner verified?", isVerified);
      expect(isVerified).to.equal(true);
    });

    it("✅ When an unverified address is checked, it should return false", async function () {
      const unverifiedAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
      const isVerified = await smartContract.isUserVerified(unverifiedAddress);
      console.log(`Is ${unverifiedAddress} verified?`, isVerified);
      expect(isVerified).to.equal(false);
    });

    it("When a valid signer alongside valid credentials is passed into the establishIdentity function, the function should establish an identity.", async function(){
      const nameTest = "Bobby Smith";
      const identityTest = ethers.keccak256(ethers.toUtf8Bytes("987654321"));

      // connect the smart contract with another valid address
      const newContractConnection = smartContract.connect(address1);

      // call the establishIdentity function on the new address
      const transaction = await newContractConnection.establishIdentity(nameTest, identityTest);

      // wait for the transaction confirmation
      const validTransactionReceipt = await transaction.wait();

      // checking the transaction hash for a valid transaction
      expect(validTransactionReceipt.status).to.equal(1); 
    });

    // test the updateIdentity function - could test it by looking for the event that was emitted
    it("Testing the updateIdentity function - a valid address matching the sender should be able to update their details", async function(){
      const updateName = "Matthew Worede";
      const updateIdentityHash = ethers.keccak256(ethers.toUtf8Bytes("1234"));
      
      const transaction = await smartContract.updateIdentity(updateName, updateIdentityHash);

      const transactionReceipt = await transaction.wait();

      expect(transactionReceipt.status).to.equal(1);
      // check that the identity has updated using the getIdentity function - to make sure that the update has gone through.
    });

    it("Testing assignVerification function - assigning a verification to an account that is already verified should result in the transaction being reverted", async function(){
      await expect(smartContract.assignVerification(owner.address)).to.be.revertedWith("User is already verified");
    });


    it("Testing the requestVerification function - a non-assigned wallet address should not be able to request a verification", async function(){
      const newContractConnection = smartContract.connect(address1);
      expect(newContractConnection.requestVerification()).to.be.revertedWith("You do not have a registered account");
    });

    // it("Testing the requestVerification function - calling this function while passing the owner address should revert the function as the owner address is automatically verified on deployment", async function(){
    //   expect(await smartContract.revokeVerification(owner.address).to.be.reveredWith("You are already verified"));
    // });

    it("revokeVerification - A wallet address that is not the owner of the contract should not be able to call this function.", async function(){
      const newContractConnection = smartContract.connect(address1);

      // the transaction status should be failed
      expect(newContractConnection.revokeVerification(owner.address)).to.be.revertedWith("You do not have a registered account");

    });

    it("updateVerificationAmount - This function should allow the owner to set a new verification amount", async function(){
      const newVerificationAmount = ethers.parseEther('0.5');
      const updateVerificationAmount = await smartContract.updateVerificationAmount(newVerificationAmount);
      console.log(updateVerificationAmount.logs)
      expect(updateVerificationAmount.logs).to.not.equals(null);
    });

    it("getBalance - this function should return an integer that corresponds with the amount in the smart contract", async function(){
      const smartContractBalance = await smartContract.getBalance();
      expect(smartContractBalance).to.be.a("number");
    });

    it("withdrawContractFunds - allow only the owner of the smart contract to withdraw funds from the transaction", async function(){
      // check the funds of the owner wallet

      // this transaction should withdraw funds from the smart contract
      const withdrawFundsAmount = ethers.parseEther('0.1');
      const withdrawFundsCall = await smartContract.withdrawContractFunds();
      
      // the transaction should be valid
      const transactionReceipt = await withdrawFundsCall.wait();

      expect(transactionReceipt.status).to.equal(1);
      // check that the identity has updated using the
      // the owners wallet should increase by the withdrawFundsAmount
      
    });

    it("grantViewPermission function - a contract address should be able to to grant access to another contract address", async function(){
      // test if this function works with a string address
      const newContractConnection = smartContract.connect(address1);
      const grantPermission = await newContractConnection.grantViewPermission(owner.address);
      // expect an the event to be emitting showing that the view permission has been added
       
      expect(grantPermission.logs).to.not.equals(null);
      // add additional check to see if the address has been added to the list of viewer permissions
    });

    it("grantViewPermission function - The transaction is reverted if the wallet granted the access tries to grant access to itself", async function(){
      const newContractConnection = smartContract.connect(address1);
      const invalidGrantPermissions = await newContractConnection.grantViewPermission(address1.address);

      expect(invalidGrantPermissions).to.be.revertedWith("You cannot revoke permission to yourself");
    });

    it("grantViewPermission - the transaction is reverted if an invalid address is passed into the function", async function(){
      const invalidGrantPermission = smartContract.grantViewPermission("0x12312423");

      expect(invalidGrantPermission.to.be.revertedWith("Identity not found"));
    });

    it("revokeViewPermission function - a contract address should be able to revoke acess to ", async function(){
      const newContractConnection = smartContract.connect(address1);
      const revokePermission = await newContractConnection.revokeViewPermission(owner.address);

      // expect the transaction to emit an event - saying that the permission has been revoked
      expect(revokePermission.logs).to.not.equals(null);
    });

    it("revokeViewPermission - if a contract address tries to revoke its own address from its view permissions the transaction will be reverted", async function(){
      const revokeOwnPermission = await smartContract.revokeViewPermission(owner.address);

      expect(revokeOwnPermission.to.be.revertedWith("You cannot revoke permission to yourself"));
    });

    it("viewIdentityPermission - specifically see the permission rights between two addresses, this should return true or false depending on the view permissions", async function(){
      const viewPermissions = smartContract.viewIdentityPermission(owner.address, address1.address);
      expect(viewPermissions).to.be.a("bool");
    });

    it("viewIdentityHash - allows the owner wallet and the wallets which has permissions to view the hash of the owners identity", async function(){
      const viewIdentityHash = smartContract.viewIdentityHash(address1.address);
      expect(viewIdentityHash).to.be.a("array");
    });

    it("viewIdentityHash - if this function is called by a address that does not have viewing permissions this transaction is reverted", async function(){
      const newContractConnection = smartContract.connect(address1);
      const invalidView = newContractConnection.viewIdentityHash(owner.address);
      expect(invalidView).to.be.revertedWith("Permission not granted");
    });

    it("viewMyPermissions - this function allows a wallet address to view which addresses have access to their hashed identity", async function(){
      const newContractConnection = smartContract.connect(address1);
      const viewPermissions = newContractConnection.viewMyPermissions();
      expect(viewPermissions).to.be.not.null;
    });
});
