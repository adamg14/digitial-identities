const { ethers } = require("ethers");
const { getContract } = require("./getContract");


async function verificationPayment(signer){
    const DigitalIdentities = await getContract().connect(signer);

    const verificationAmount = ethers.parseEther("0.1");

    const transaction = await DigitalIdentities.verificationPayment({ value: verificationAmount });
    console.log(signer.address + " making verification payment...");

    await transaction.wait();

    console.log("Verification payment made successfully.");
}


module.exports = verificationPayment;