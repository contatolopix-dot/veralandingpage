import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Humanity from './components/Humanity';
import Authority from './components/Authority';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

// ============================================
// TRACKING SCRIPTS (META PIXEL & GTM)
// ============================================
// Estas tags devem ser idealmente injetadas dentro do `<head>` no ficheiro `index.html`. 
// Caso prefira inserir via React, coloque livremente aqui.
const TrackingScripts = () => {
    return (
      <>
        {/*
          1. Substitua 'SEU_ID_AQUI' abaixo pelos seus IDs reais.
          2. Remova o comentário React '{ /* ... * / }' para ativar.
          
          <!-- Google Tag Manager -->
          <script dangerouslySetInnerHTML={{ __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}} />

          <!-- Meta Pixel Code -->
          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'PIXEL-ID-AQUI');
            fbq('track', 'PageView');
          `}} />
        */}
      </>
    );
}

function App() {
  return (
    <div className="font-sans text-[#1a1a1a] bg-vera-pearl min-h-screen">
      <TrackingScripts />
      <Navbar />
      <main>
        <Hero />
        <Authority />  {/* Swapped order if 'Angariação focus' prefers Authority first, but will keep as before unless specified. Kept Authority after Humanity usually, or we can use the order the user wants. */}
        <Humanity />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
