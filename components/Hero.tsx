
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppVisit = () => {
    window.open("https://wa.me/919039722747?text=Hi House of Gains, I want to book a visit!", "_blank");
  };

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden" id="top">
      {/* Background with zoom effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero Background"
          className="w-full h-full object-cover scale-105 animate-[zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl space-y-8 animate-[fadeInUp_1s_ease-out]">
          <div className="flex items-center space-x-4">
            <span className="h-[2px] w-12 bg-amber-500"></span>
            <span className="text-amber-500 uppercase tracking-[0.3em] font-bold text-sm">Indore's Elite Performance Club</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-heading leading-tight md:leading-[0.85]">
            HOUSE OF <br />
            <span className="text-gold">GAINS</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Experience the ultimate fusion of luxury and raw performance. House of Gains is Indore's premier sanctuary for the serious athlete.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <button 
              onClick={scrollToContact}
              className="gold-gradient text-black font-bold px-10 py-5 rounded-full uppercase tracking-widest text-sm gold-glow transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Start Your Evolution
            </button>
            <button 
              onClick={handleWhatsAppVisit}
              className="border border-white/20 hover:border-amber-500 text-white font-bold px-10 py-5 rounded-full uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span>Visit Us In Indore</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce opacity-50">
        <span className="uppercase text-[10px] tracking-widest font-bold">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>

      <style>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
