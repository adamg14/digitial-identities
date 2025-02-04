const { ethers } = require("hardhat");
require("dotenv").config({ });

async function deploy(){
    // constructor arguments
    const fullName = "Adam Worede";
    const hashedIdentity = ethers.keccak256(
        ethers.toUtf8Bytes("123456789")
    );

    const digitialIdentites = await ethers.deployContract("DigitalIdentities",
        [fullName, hashedIdentity]
    );

    await digitialIdentites.waitForDeployment();

    const contractAddress = await digitialIdentites.getAddress();

    console.log("Smart contract deployed at address: " + contractAddress);
}

deploy().catch((error) => {
    console.log(error);
});