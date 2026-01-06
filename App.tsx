
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Transformations from './components/Transformations';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Advanced Reveal Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initial trigger for elements already in view or rendered late
    const refreshObserver = () => {
      const revealElements = document.querySelectorAll('[data-reveal]');
      revealElements.forEach(el => observer.observe(el));
    };

    // Run on mount and after a small delay to catch all components
    refreshObserver();
    const timeoutId = setTimeout(refreshObserver, 500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919039722747?text=Hi House of Gains, I'm interested in joining!", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919039722747";
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500 selection:text-black relative">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Transformations />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />

      {/* PERSISTENT FLOATING CONTACT CONTROLS */}
      <div className={`fixed bottom-8 right-6 md:right-10 z-[200] flex flex-col space-y-4 transition-all duration-700 transform ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        
        {/* PREMIUM CALL BUTTON */}
        <div className="relative group">
          <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20 scale-150"></div>
          <button 
            onClick={handleCall}
            aria-label="Call Now"
            className="relative w-14 h-14 md:w-16 md:h-16 gold-gradient rounded-full shadow-[0_15px_45px_rgba(191,149,63,0.4)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-500 ring-4 ring-white/10 group-hover:shadow-[0_20px_60px_rgba(191,149,63,0.5)]"
          >
            <Phone className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>

        {/* WHATSAPP BUTTON */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 scale-150"></div>
          <button 
            onClick={handleWhatsApp}
            aria-label="Chat on WhatsApp"
            className="relative w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-[0_15px_45px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-500 ring-4 ring-white/10 group-hover:shadow-[0_20px_60px_rgba(37,211,102,0.6)]"
          >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute top-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full border-2 border-white text-[8px] md:text-[10px] flex items-center justify-center font-bold text-white shadow-lg">1</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
