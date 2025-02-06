const { expect } = require("chai");
const { ethers } = require("hardhat");

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

    })
});
