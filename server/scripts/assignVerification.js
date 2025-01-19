const { ethers } = require("ethers");
const { getContract } = require("./getContract");


async function assignVerification(signer, verificationAddress){
    const DigitalIdentities = await getContract().connect(signer);

    const transaction = await DigitalIdentities.assignVerification(verificationAddress);
    console.log("Assigning verification to contract address: " + verificationAddress + "...");

    await transaction.wait();
    console.log("Address: " + verificationAddress + " verified.");

}

module.export = assignVerification;