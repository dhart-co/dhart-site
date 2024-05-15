import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import NavBar from './components/NavBar and Footer/NavBar';
import Footer from './components/NavBar and Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;