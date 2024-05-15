import React from 'react';
import LandingPage from './pages/LandingPage';

import NavBar from './components/NavBar and Footer/NavBar';
import Footer from './components/NavBar and Footer/Footer';

const url =  window.location.href;

const App: React.FC = () => {
  console.log(url);
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;