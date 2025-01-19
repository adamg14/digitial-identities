const { ethers } = require("ethers");
const { getContract } = require("./getContract");


async function grantPermission(owner, viewer){
    // convert to try catch loop with error message
    const DigitalIdentities = await getContract().connect(owner);

    const viewerAddress = viewer.address;

    const transaction = await DigitalIdentities.grantPermission(viewerAddress);
    console.log("Granting view permissions...");

    await transaction.wait();
    console.log("Permission granted");
}

module.exports = grantPermission;