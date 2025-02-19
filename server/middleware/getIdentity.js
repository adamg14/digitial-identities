const { ethers } = require("hardhat");
const DigitalIdentitiesABI = require("../artifacts/contracts/DigitalIdentities.sol/DigitalIdentities.json");
require("dotenv").config({ path: "../.env" });

// CA: 0xe2Fd012b9cE54d47796aEb1902A96B61774D2260

async function getIdentity(request, response){
    try {
        if (request.method !== "GET"){
            return response.status(405).json({ message: "Method Not Allowed"});
        }

        console.log("this should be the network url: " + process.env.NETWORK_URL);
        const { userAddress } = request.query;
        if (!userAddress){
            return response.status(400).json({ error: "Missing userAddress query paramter"});
        }

        const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL);

        const contractAddress = "0xe2Fd012b9cE54d47796aEb1902A96B61774D2260";

        // read-only instance of the contract
        const digitialIdentitiesContract = new ethers.Contract(
            contractAddress,
            DigitalIdentitiesABI.abi,
            provider
        );

        // call the getUserDetails functions
        const userDetails = await digitialIdentitiesContract.getUserDetails({ from: userAddress });

        // the function returns a tuple: (fullName, hashedIdentity, wallet)
        const result = {
            fullName: userDetails[0],
            hashedIdentity: userDetails[1],
            wallet: userDetails[2]
        }


        console.log(userDetails[0]);
        
        return response.status(200).json(result);

    } catch (error) {
        console.error("Error fetching user details: " + error);
        return response.status(500).json({ error: "Internal Server Error"});
    }
}

module.exports = getIdentity;