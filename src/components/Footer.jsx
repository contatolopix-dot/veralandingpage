import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vera-bordeaux text-vera-pearl py-12 border-t-[8px] border-vera-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8">

        {/* Logo / Name */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-serif font-bold tracking-wider">
            Vera Ferreira
          </h2>
          <p className="text-vera-gold text-lg font-light tracking-widest uppercase">
            Excellence Service
          </p>
        </div>

        {/* Social Links - ATUALIZADOS COM OS LINKS DA VERA */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/veraferreiradiegues/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-vera-pearl/10 rounded-full hover:bg-vera-gold text-vera-pearl hover:text-vera-bordeaux transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/vera.diegues.1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-vera-pearl/10 rounded-full hover:bg-vera-gold text-vera-pearl hover:text-vera-bordeaux transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-vera-pearl/20 w-full text-center">
          <p className="text-sm font-light text-vera-pearl/80">
            &copy; 2026 Vera Ferreira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;