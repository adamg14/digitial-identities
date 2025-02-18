const { ethers } = require("hardhat");


async function getAuthorisedUsers(){
    try {
        if (request.method !== "GET") {
          return res.status(405).json({ message: "Method Not Allowed" });
        }
        const provider = new ethers.JsonRpcProvider(process.env.NETWORK_URL);
        const contractAddress = "0xe2Fd012b9cE54d47796aEb1902A96B61774D2260";
        const contract = new ethers.Contract(contractAddress, DigitalIdentitiesABI.abi, provider);
    
        // Call our contract functions to get the arrays.
        const verifiedAddresses = await contract.getVerified();
        const pendingAddresses = await contract.getVerificationRequests();
    
        return response.status(200).json({
          verified: verifiedAddresses,
          pending: pendingAddresses,
        });
      } catch (error) {
        console.error("Error fetching authorized users:", error);
        return response.status(500).json({ error: "Internal Server Error" });
      }
}

export default getAuthorisedUsers;