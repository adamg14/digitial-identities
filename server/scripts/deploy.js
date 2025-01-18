require("dotenv").config({ path: "../.env"});
const { ethers } = require("hardhat");



async function deploy(){
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with account: ", deployer.address);

    const fullName = "Adam Worede"
    // just an example of an identity to show how the application works
    const hashedIdentity = ethers.encodeBytes32String("Passport Number: 123");

    const DigitalIdentities = await ethers.getContractFactory("DigitalIdentities")
    const smartContract = await DigitalIdentities.deploy(fullName, hashedIdentity);

    await smartContract.waitForDeployment();

    const smartContractAddress = await smartContract.getAddress();
    console.log("Digital Identities deployed to smart contract address: ", smartContractAddress);
}

deploy().then(() => {
    process.exit(0);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});