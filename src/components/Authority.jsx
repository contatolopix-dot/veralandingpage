import React from 'react';
import { Award, Users, MapPin, CheckCircle2, TrendingUp, Megaphone, Target } from 'lucide-react';

const Authority = () => {
  const whatsappLink = "https://wa.me/351926058910?text=Ol%C3%A1%20Vera%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria%20para%20vender%2Fcomprar%20o%20meu%20im%C3%B3vel%21";

  return (
    <section id="authority" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 text-vera-gold font-bold tracking-widest uppercase text-sm">
            <span className="w-12 h-px bg-vera-gold"></span>
            <span>Especialista Local</span>
            <span className="w-12 h-px bg-vera-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-vera-bordeaux leading-tight">
            Posicionamento no Porto.
          </h2>
          <p className="text-xl text-[#1a1a1a] font-light">
            Anos de dedicação converteram-se em autoridade, confiança e no domínio absoluto do mercado imobiliário local.
          </p>
        </div>

        {/* Advantages Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-vera-pearl p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-vera-gold/10 text-center space-y-4">
            <div className="inline-flex p-4 rounded-full bg-vera-gold/20 text-vera-bordeaux">
              <TrendingUp size={36} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-vera-bordeaux">Avaliação Gratuita</h3>
            <p className="text-[#1a1a1a] font-light">
              Determinamos o valor real e competitivo do seu imóvel no mercado atual, garantindo que não perde dinheiro.
            </p>
          </div>
          <div className="bg-vera-pearl p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-vera-gold/10 text-center space-y-4 transform md:-translate-y-4">
            <div className="inline-flex p-4 rounded-full bg-vera-gold/20 text-vera-bordeaux">
              <Megaphone size={36} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-vera-bordeaux">Marketing de Alto Impacto</h3>
            <p className="text-[#1a1a1a] font-light">
              Investimos em imagem, publicidade digital e exposição Premium nos maiores portais, valorizando o que é seu.
            </p>
          </div>
          <div className="bg-vera-pearl p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-vera-gold/10 text-center space-y-4">
            <div className="inline-flex p-4 rounded-full bg-vera-gold/20 text-vera-bordeaux">
              <Target size={36} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-vera-bordeaux">Compradores Qualificados</h3>
            <p className="text-[#1a1a1a] font-light">
              Ativamos a nossa vasta carteira de clientes, selecionando e filtrando potenciais compradores sérios e aprovados.
            </p>
          </div>
        </div>

        {/* Core Authority Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text & Stats */}
          <div className="space-y-10 order-2 lg:order-1">
            <p className="text-lg text-[#1a1a1a] font-light leading-relaxed">
              Vender um imóvel vai além de pendurar uma placa.
              Nós utilizamos táticas de elevada eficácia para converter visitas num negócio fechado, enquanto os seus interesses estão legalmente protegidos em cada etapa.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-[#1a1a1a]">
                <CheckCircle2 className="text-vera-gold" size={24} />
                <span className="font-medium text-lg">Acompanhamento de A a Z em todas as etapas burocráticas</span>
              </li>
              <li className="flex items-center space-x-3 text-[#1a1a1a]">
                <CheckCircle2 className="text-vera-gold" size={24} />
                <span className="font-medium text-lg">Qualificação financeira prévia das propostas recebidas</span>
              </li>
              <li className="flex items-center space-x-3 text-[#1a1a1a]">
                <CheckCircle2 className="text-vera-gold" size={24} />
                <span className="font-medium text-lg">Consultoria dedicada em fecho de contratos vitais</span>
              </li>
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center space-y-2">
                <div className="flex justify-center text-vera-bordeaux mb-4">
                  <Award size={40} />
                </div>
                <h4 className="text-3xl font-bold font-serif text-[#1a1a1a]">8+</h4>
                <p className="text-sm font-medium text-[#1a1a1a] uppercase">Experiência de Mercado</p>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center text-vera-bordeaux mb-4">
                  <Users size={40} />
                </div>
                <h4 className="text-3xl font-bold font-serif text-[#1a1a1a]">+460</h4>
                <p className="text-sm font-medium text-[#1a1a1a] uppercase">Famílias Felizes</p>
              </div>
              <div className="text-center space-y-2 col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-6 sm:pt-0">
                <div className="flex justify-center text-vera-bordeaux mb-4">
                  <MapPin size={40} />
                </div>
                <h4 className="text-xl font-bold font-serif text-[#1a1a1a] leading-tight">Planeamento<br />Exclusivo</h4>
                <p className="text-sm font-medium text-[#1a1a1a] uppercase mt-2">Dedicado a Si</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vera-bordeaux text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors w-full sm:w-auto inline-block text-center"
              >
                Peça a sua avaliação gratuita
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-vera-gold/20 rounded-full blur-3xl transform -translate-y-10"></div>
            <img
              src="/vera-autoridade.jpg"
              alt="Vera Ferreira numa posição de especialista e autoridade local"
              className="relative z-10 w-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl aspect-[3/4]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;
