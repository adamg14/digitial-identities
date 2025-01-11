const { ethers } = require("hardhat");
require("dotenv").config({ })

async function deploy(){
    const digitialIdentites = await ethers.deployContract("DigitalIdentites");

    await digitialIdentites.waitForDeployment();

    const contractAddress = await digitialIdentites.getAddress();

    console.log("Smart contract deployed at address: " + contractAddress);
}

deploy().catch((error) => {
    console.log(error);
});