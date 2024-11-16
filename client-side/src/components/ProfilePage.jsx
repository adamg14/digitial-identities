import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Container, Typography, Box } from '@mui/material';

function ProfilePage({ account }) {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (account) {
      const fetchBalance = async () => {
        const provider = new ethers.WebSocketProvider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.formatEther(balance));
      };
      fetchBalance();
    }
  }, [account]);

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
      <Typography variant="h4" gutterBottom>Your Profile</Typography>
      {account && (
        <Box>
          <Typography variant="body1" style={{ color: '#00BFFF' }}>Account: {account}</Typography>
          <Typography variant="body1" style={{ color: '#b0b0b0' }}>Balance: {balance} ETH</Typography>
        </Box>
      )}
    </Container>
  );
}

export default ProfilePage;