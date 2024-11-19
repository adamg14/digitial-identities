import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Providers } from './wagmi';

function App() {
  const [account, setAccount] = useState(null);

  return (
    <Providers>
    <RainbowKitProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage account={account} />} />
      </Routes>
    </Router>
    </RainbowKitProvider>
    </Providers>
  );
}

export default App;