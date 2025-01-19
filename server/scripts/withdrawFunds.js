const { ethers } = require("hardhat");
const { getContract } = require("./getContract");
require("../.env").config({ path: "../.env"});


async function withdrawFunds(owner, withdrawAmount){
    if (owner.address == process.env.PUBLIC_KEY){
        const DigitalIdentities = await getContract().connect();

        const withdrawETH = ethers.parseEthers(withdrawAmount);

        const transaction = await DigitalIdentities.withdrawContractFunds(withdrawAmount);
        console.log("Funds are being withdrawn...");

        await transaction.wait();
        console.log("Funds withdrawn successfully");
    }else{

    }
}

module.exports = withdrawFunds;