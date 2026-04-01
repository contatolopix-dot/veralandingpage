import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/351926058910?text=Ol%C3%A1%20Vera%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria%20para%20vender%2Fcomprar%20o%20meu%20im%C3%B3vel%21";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-vera-bordeaux text-white shadow-lg py-4' : 'bg-transparent text-vera-bordeaux py-6'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="font-serif text-2xl font-bold uppercase tracking-widest flex items-center">
            Vera Ferreira
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#hero" className="hover:text-vera-gold transition-colors font-medium">Início</a>
            <a href="#humanity" className="hover:text-vera-gold transition-colors font-medium">Sobre Mim</a>
            <a href="#authority" className="hover:text-vera-gold transition-colors font-medium">Experiência</a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${
                isScrolled ? 'bg-vera-gold text-vera-bordeaux' : 'bg-vera-bordeaux text-white'
              }`}
            >
              Contactar
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-vera-bordeaux text-white absolute top-full left-0 w-full shadow-xl">
          <div className="flex flex-col space-y-4 px-4 py-8 items-center text-lg">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
            <a href="#humanity" onClick={() => setIsMobileMenuOpen(false)}>Sobre Mim</a>
            <a href="#authority" onClick={() => setIsMobileMenuOpen(false)}>Experiência</a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-vera-gold text-vera-bordeaux px-8 py-3 rounded-full font-bold mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
