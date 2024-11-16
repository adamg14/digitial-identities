import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { SECTION_COLOUR } from '../styles/colours';

function Navbar() {
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: SECTION_COLOUR, // Use the shared color variable
        color: '#ffffff',
        boxShadow: 'none',
        borderBottom: 'none',
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 600 }}>
          Digital Identities
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Security</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;