const { ethers } = require("hardhat");
const { getContract } = require("./getContract");


async function requestVerification(signer){
    const DigitalIdentites = getContract();

    const transaction = await DigitalIdentites.requestVerification();
    console.log("Requesting verification...");

    await transaction.wait()
    console.log("Verification complete");
}


module.exports = requestVerification;