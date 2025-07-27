import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobilePortfolio from './components/MobilePortfolio';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  // Detect if it's a mobile device
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || window.innerWidth < 768;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isMobile() ? <MobilePortfolio /> : <Portfolio />}
          />
          <Route path="/mobile" element={<MobilePortfolio />} />
          <Route path="/desktop" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;