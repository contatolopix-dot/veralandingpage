import React, { useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const whatsappLink = "https://wa.me/351926058910?text=Ol%C3%A1%20Vera%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria%20para%20vender%2Fcomprar%20o%20meu%20im%C3%B3vel%21";

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-vera-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-vera-bordeaux leading-tight">
              Venda o seu imóvel com quem <br />
              <span className="text-vera-gold italic font-light">
                domina o mercado de Valongo e arredores.
              </span>
            </h1>

            {/* Texto dividido em 3 parágrafos para melhor leitura */}
            <div className="space-y-4"> 
              <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-2xl font-light">
                Venda o seu imóvel com a segurança de quem conhece o mercado de Valongo e arredores.
              </p>
              
              <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-2xl font-light">
                Especialista em Angariação e Venda.
              </p>
              
              <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-2xl font-light">
                8 anos de experiência, compromisso e dedicação.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-vera-bordeaux rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 hover:shadow-xl group"
              >
                Peça a sua avaliação gratuita
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Video Mockup */}
          <div className="flex justify-center relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vera-gold opacity-10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl shadow-vera-bordeaux/20 z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-black">
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl w-40 mx-auto z-50 pointer-events-none shadow-md"></div>

                <video
                  ref={videoRef}
                  src="/Vera-reels.mov"
                  className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] z-10"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                >
                  O seu navegador não suporta vídeos HTML5.
                </video>

                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20"></div>

                <button
                  onClick={toggleMute}
                  className="absolute bottom-6 right-4 z-40 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-xl backdrop-blur-md"
                  aria-label="Toggle Audio"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;