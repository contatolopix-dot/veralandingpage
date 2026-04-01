import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/351926058910?text=Ol%C3%A1%20Vera%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria%20para%20vender%2Fcomprar%20o%20meu%20im%C3%B3vel%21";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1EBE5D] transition-all transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center animate-bounce"
      aria-label="Contact by WhatsApp"
    >
      <MessageSquare size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
