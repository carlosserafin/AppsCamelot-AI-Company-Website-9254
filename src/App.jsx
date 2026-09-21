import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CEOSection from './components/CEOSection';
import CEOOpportunityBanner from './components/CEOOpportunityBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <CEOSection />
      <Contact />
      <CEOOpportunityBanner />
      <Footer />
    </div>
  );
}

export default App;