import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DeliProntoLaunch from './components/DeliProntoLaunch';
import Services from './components/Services';
import DeliProntoService from './components/DeliProntoService';
import About from './components/About';
import CEOSection from './components/CEOSection';
import CEOOpportunityBanner from './components/CEOOpportunityBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpanishContent from './i18n/SpanishContent';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <DeliProntoLaunch />
      <Services />
      <DeliProntoService />
      <About />
      <CEOSection />
      <Contact />
      <CEOOpportunityBanner />
      <Footer />
      <SpanishContent />
    </div>
  );
}

export default App;
