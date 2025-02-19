const { ethers } = require("hardhat");
const DigitalIdentitiesABI = require("../artifacts/contracts/DigitalIdentities.sol/DigitalIdentities.json");
require("dotenv").config({ path: "../.env" });

async function authoriseUser(request, response){
    try {
        if (request.method !== "GET") {
          return response.status(405).json({ message: "Method Not Allowed" });
        }
        const { userAddress } = request.query;
        if (!userAddress) {
          return response.status(400).json({ error: "Missing userAddress query parameter" });
        }
    
        // Set up provider and signer (using your private key)
        const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL);
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
        const contractAddress = "0xe2Fd012b9cE54d47796aEb1902A96B61774D2260";
        const digitalIdentitiesContract = new ethers.Contract(
          contractAddress,
          DigitalIdentitiesABI.abi,
          signer
        );
    
        // Call the smart contract function assignVerification
        const tx = await digitalIdentitiesContract.assignVerification(userAddress);
        await tx.wait();
    
        return response.status(200).json({ message: "User authorized successfully", txHash: tx.hash });
      } catch (error) {
        console.error("Error authorizing user:", error);
        return response.status(500).json({ error: "Internal Server Error" });
      }
}

export default authoriseUser;