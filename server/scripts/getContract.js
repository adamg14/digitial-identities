const { ethers } = require("hardhat");

async function getContract(contractAddress){
    const DigitalIdentites = await ethers.getContractFactory("DigitalIdentities");
    const attachAddress = DigitalIdentites.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

    return attachAddress;
}

module.exports = getContract;