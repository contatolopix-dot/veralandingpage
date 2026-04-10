import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Humanity from './components/Humanity';
import Authority from './components/Authority';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-[#1a1a1a] bg-vera-pearl min-h-screen">
      {/* Removemos o TrackingScripts daqui pois já está no index.html */}
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Humanity />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;