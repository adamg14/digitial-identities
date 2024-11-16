// src/components/ConnectWalletButton.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

function ConnectWalletButton() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.WebSocketProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setAccount(await signer.getAddress());
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={connectWallet}
        style={{
          backgroundColor: "#00BFFF",
          color: "white",
          fontSize: "1.1rem",
        }}
      >
        {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
      </Button>
    </motion.div>
  );
}

export default ConnectWalletButton;