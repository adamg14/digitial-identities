// adding an individual to the system
const { ethers } = require("hardhat");
const { getContract } = require("./getContract");

async function establishIdentity(signer, fullName, identity){
    const DigitalIdentities = await getContract().connect(signer);

    const hashedIdentity = ethers.encodeBytes32String(identity);

    const transaction = await DigitalIdentities.establishIdentity(fullName, hashedIdentity);

    console.log("Establishing identity...");

    await transaction.wait();
    console.log("Identity established successfully");
}

module.exports = establishIdentity;