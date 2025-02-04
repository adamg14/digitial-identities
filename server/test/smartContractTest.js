const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DigitalIdentities", function () {
  let DigitalIdentities, smartContract;
  let owner, addr1, addr2;

  before(async function () {
    // This gives you a few test signers (accounts)
    [owner, addr1, addr2] = await ethers.getSigners();

    // Get ContractFactory
    DigitalIdentities = await ethers.getContractFactory("DigitalIdentities");

    // Deploy a fresh contract each time
    // Pass in the constructor arguments:
    // constructor(string memory fullName, bytes32 hashedIdentity)
    smartContract = await DigitalIdentities.deploy(
      "Adam Worede",
      ethers.keccak256(ethers.toUtf8Bytes("123456789"))
    );
    await smartContract.waitForDeployment();

    console.log("Deployed contract at:", smartContract.target); // or .address in older Ethers
  });

  it("Should validate the contract is deployed", async function() {
    // The contract's deployed address is automatically known:
    const contractAddr = await smartContract.getAddress();
    console.log("Contract address:", contractAddr);

    // Just check it's not the zero address
    expect(contractAddr).to.properAddress; 
  });

  describe("Testing isUserVerified", function () {
    it("The deployer (contract owner) should be automatically verified", async function () {
      const isVerified = await smartContract.isUserVerified(owner.address);
      console.log("Is contract owner verified?", isVerified);
      expect(isVerified).to.equal(true);
    });

    it("When a random address/an unverified address is passed into this function, false is returned.", async function(){

        const isVerified = await smartContract.isUserVerified("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
        expect(isVerified).to.equal(false);
    })
  });
});
