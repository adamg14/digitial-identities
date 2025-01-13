require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    'base-mainnet': {
      url: 'http://mainnet.base.org',
      accounts: [],
      gasPrice: 1000000000
    },

    'base-sepolia': {
      url: process.env.NETWORK_URL,
      url: 'http://sepolia.base.org',
      accounts: [],
      gasPrice: 1000000000
    }
  }
};
