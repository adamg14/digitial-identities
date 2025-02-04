require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

console.log(process.env.NETWORK_URL);
console.log(process.env.PRIVATE_KEY);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    'base-mainnet': {
      url: 'http://mainnet.base.org',
      accounts: [],
      gasPrice: 1000000000
    },

    'sepolia': {
      url: process.env.NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000
    },
    
    'hardhat': {
      chainId: 31337
    },

    'localhost': {
      url: "http://127.0.0.1:8545",
      accounts: ["0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"]
    }
  }
};
