const { ethers } = require("hardhat");
const DigitalIdentitiesABI = require("../artifacts/contracts/DigitalIdentities.sol/DigitalIdentities.json");
require("dotenv").config({ path: "../.env" });

async function registerIdentity(request, response){
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
      }
      try {
        const { fullName, documentId, walletAddress } = req.body;
        if (!fullName || !documentId || !walletAddress) {
          return res.status(400).json({ error: "Missing required fields" });
        }
    
        // Convert the documentId to a bytes32 value.
        // If documentId is short enough, use formatBytes32String, otherwise fall back to keccak256.
        let hashedIdentity;
        try {
          hashedIdentity = ethers.utils.formatBytes32String(documentId);
        } catch (e) {
          hashedIdentity = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(documentId));
        }
    
        // Set up a provider and signer using your environment variables.
        const provider = new ethers.providers.JsonRpcProvider(process.env.NETWORK_URL);
        // PRIVATE_KEY should be set in your .env file
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
        const contractAddress = "0xe2Fd012b9cE54d47796aEb1902A96B61774D2260";
        const contract = new ethers.Contract(
          contractAddress,
          DigitalIdentitiesABI.abi,
          signer
        );
    
        // Call the establishIdentity function on the contract.
        const tx = await contract.establishIdentity(fullName, hashedIdentity);
        await tx.wait();
    
        return res.status(200).json({
          message: "Identity registered successfully",
          txHash: tx.hash,
        });
      } catch (error) {
        console.error("Error registering identity:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
}

export default registerIdentity;