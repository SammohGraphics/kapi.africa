import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CSR from './components/CSR';
import Contact from './components/Contact';
import Footer from './components/Footer';
import KapiAfrica from './components/KapiAfrica';
import KapiEnergy from './components/KapiEnergy';
import KapiTech from './components/KapiTech';
import FinancialServices from './components/FinancialServices';
import Agribusiness from './components/Agribusiness';
import Directors from './components/Directors';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Directors />
    <Portfolio />
    <CSR />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kapi-africa" element={<KapiAfrica />} />
            <Route path="/kapi-energy" element={<KapiEnergy />} />
            <Route path="/kapi-tech" element={<KapiTech />} />
            <Route path="/financial" element={<FinancialServices />} />
            <Route path="/agribusiness" element={<Agribusiness />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;