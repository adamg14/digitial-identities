import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';

function App() {
  const [account, setAccount] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage account={account} />} />
      </Routes>
    </Router>
  );
}

export default App;