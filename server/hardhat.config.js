require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");


console.log("NETWORK_URL: ", process.env.NETWORK_URL);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    'sepolia': {
      url: process.env.NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000
    }
  }
};
