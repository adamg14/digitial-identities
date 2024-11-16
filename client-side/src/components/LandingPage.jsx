import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import ConnectWalletButton from './ConnectWalletButton';
import { motion } from 'framer-motion';
import { SECTION_COLOUR, FEATURES_COLOUR, SECURITY_COLOUR } from '../styles/colours';


function LandingPage() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: SECTION_COLOUR,
          padding: '4rem',
          margin: 0,
          width: '100%',
          borderRadius: '0',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h1" className="raleway-bold" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>
          On-chain verification of real world identies
        </Typography>
        <Typography variant="body1" className="raleway-regular" style={{ color: '#b0b0b0', fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.6 }}>
          Link your wallet address to your real-world identification, while keeping the identification private. Connect your wallet to start.
        </Typography>
        <Box mt={4}>
          <ConnectWalletButton />
        </Box>
      </motion.div>

      <Grid container spacing={0} style={{ width: '100%', margin: 0, padding: 0 }}>
        {/* About Section */}
        <Grid item xs={12} md={6} style={{
          backgroundColor: 'lightgrey',
          padding: '4rem',
          borderRadius: '0',
          width: '100%',
          margin: 0
        }}>
          <Typography variant="h3" className="raleway-bold" style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#333' }}>
            About the dApp
          </Typography>
          <Typography variant="body1" className="raleway-regular" style={{ color: '#333', fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.8 }}>
            Allow third-parties to verify your real world identification without their access to it.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{
          backgroundColor: 'lightgrey',
          padding: '4rem',
          borderRadius: '0',
          width: '100%',
          margin: 0
        }}>
          <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="App preview" style={{ width: '100%', borderRadius: '0' }} />
        </Grid>

        {/* Features Section */}
        <Grid item xs={12} md={6} style={{
          backgroundColor: FEATURES_COLOUR,
          padding: '4rem',
          borderRadius: '0',
          width: '100%',
          margin: 0
        }}>
          <img src="https://png.pngtree.com/png-vector/20220715/ourmid/pngtree-drivers-license-driver-card-id-png-image_5978667.png" alt="Features graphic" style={{ width: '100%', borderRadius: '0' }} />
        </Grid>
        <Grid item xs={12} md={6} style={{
          backgroundColor: FEATURES_COLOUR,
          padding: '4rem',
          borderRadius: '0',
          width: '100%',
          margin: 0
        }}>
          <Typography variant="h3" className="raleway-bold" style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>
            Key Features
          </Typography>
          <Typography variant="body1" className="raleway-regular" style={{ color: '#b0b0b0', fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.8 }}>
            The verification of real world identities made simple. Your identification, while being able to give proof 
          </Typography>
        </Grid>

        {/* Security Section */}
        <Grid item xs={12} md={6} style={{
          backgroundColor: 'lightgrey',
          padding: '4rem',
          borderRadius: '0',
          width: '100%',
          margin: 0
        }}>
          <Typography variant="h3" className="raleway-bold" style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: '#333' }}>
            Enhanced Security
          </Typography>
          <Typography variant="body1" className="raleway-regular" style={{ color: '#333', fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.8 }}>
            The hash of your real-world identification is stored on chain, preventing anyone to have access to it. While being able to verify yourself to anyone. Democratic voting rights enabled so that verifcation is unflawed and foul play is punished.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{
          backgroundColor: 'lightgrey',
          padding: '4rem',
          borderRadius: '0',
          width: '100%',
          margin: 0
        }}>
          <img src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png" alt="Security image" style={{ width: '100%', borderRadius: '0' }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
