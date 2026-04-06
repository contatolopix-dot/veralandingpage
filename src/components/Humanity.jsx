import React from 'react';
import { Heart, Plane, Home } from 'lucide-react';

const Humanity = () => {
  const whatsappLink = "https://wa.me/351926058910?text=Ol%C3%A1%20Vera%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria%20para%20vender%2Fcomprar%20o%20meu%20im%C3%B3vel%21";

  return (
    <section id="humanity" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute inset-0 bg-vera-gold transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="/vera-feliz.jpg" 
              alt="Vera Ferreira num momento feliz" 
              className="relative z-10 w-full object-cover rounded-2xl shadow-xl aspect-[4/5]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 z-20 bg-vera-bordeaux text-white p-6 rounded-2xl shadow-xl max-w-xs transform hover:-translate-y-2 transition-transform">
              <Heart className="text-vera-gold mb-2" size={32} />
              <p className="font-serif italic text-lg leading-snug">
                "Abdico do tempo em família para garantir que a sua família tenha o melhor porto seguro."
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 mt-16 lg:mt-0 lg:pl-8 xl:pl-16">
            <div className="inline-flex items-center space-x-2 text-vera-gold font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-vera-gold"></span>
              <span>A Vera Ferreira</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-vera-bordeaux leading-tight">
              Compromisso e Dedicação Exclusiva
            </h2>
            
            <div className="space-y-6 text-lg text-[#1a1a1a] font-light">
              <p>
                Acredito que o processo de comprar ou vender uma casa não se resume apenas a tijolos e contratos. Trata-se de vidas, de sonhos e da segurança que procuramos para quem mais amamos.
              </p>
              <p>
                Como consultora e mãe de dois, entendo perfeitamente o peso de cada decisão e os desafios que o mercado apresenta. Atuo junto do cliente de forma frontal e isolada — em mim encontra um atendimento exclusivo e concentrado, não um serviço disperso.
              </p>
              <p>
                Coloco o meu coração em cada angariação. Entrego a minha dedicação total a cada processo imobiliário individualmente, para que tenha os melhores resultados, em tempo recorde, e com o máximo rigor legal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-vera-pearl rounded-full text-vera-bordeaux">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visão Global</h4>
                  <p className="text-sm text-gray-500">Inspiração pelo mundo</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-vera-pearl rounded-full text-vera-bordeaux">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Valor Humano</h4>
                  <p className="text-sm text-gray-500">O seu lar no foco da estratégia</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-2 border-vera-bordeaux text-vera-bordeaux hover:bg-vera-bordeaux hover:text-white px-8 py-3 rounded-full font-bold transition-colors"
                >
                Conheça melhor o meu trabalho
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Humanity;
