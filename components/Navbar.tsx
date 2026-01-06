
import React, { useState, useEffect, useCallback } from 'react';
import { Phone, MessageCircle, X, Menu, ChevronRight } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', targetId: 'top' },
    { name: 'Programs', targetId: 'programs' },
    { name: 'Trainers', targetId: 'trainers' },
    { name: 'Membership', targetId: 'membership' },
    { name: 'Gallery', targetId: 'gallery' },
    { name: 'Contact', targetId: 'contact' },
  ];

  const scrollToSection = useCallback((e: React.MouseEvent | React.TouchEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919039722747?text=Hi House of Gains, I'm interested in joining!", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919039722747";
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'glass py-2 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={(e) => scrollToSection(e, 'top')}
        >
          <div className="relative">
            <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:rotate-[360deg] transition-transform duration-1000">
              <span className="text-black font-heading text-2xl">H</span>
            </div>
            <div className="absolute -inset-1 rounded-full border border-amber-500/30 group-hover:scale-125 transition-transform duration-500"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-heading text-xl md:text-2xl tracking-tighter">
              HOUSE OF <span className="text-gold">GAINS</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Indore • Premium</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.targetId)}
              className="relative text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400 hover:text-white transition-all group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
          
          <div className="flex items-center space-x-3 border-l border-white/10 pl-10">
            <button 
              onClick={handleCall} 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-amber-500 transition-all border border-white/5"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'membership')}
              className="ml-2 gold-gradient text-black font-bold px-8 py-3 rounded-full text-[10px] uppercase tracking-widest shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all transform hover:-translate-y-1"
            >
              Join Club
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-[110] relative w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 focus:outline-none backdrop-blur-md"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-amber-500 animate-in spin-in duration-300" />
          ) : (
            <Menu className="w-6 h-6 text-amber-500 animate-in fade-in duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[90] lg:hidden transition-all duration-500 ease-expo transform-gpu ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <div className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 mb-12">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(e, link.targetId)}
                className={`flex items-center justify-between text-4xl font-heading text-white hover:text-amber-500 transition-all tracking-wider border-b border-white/5 py-4 group transform-gpu ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-8 h-8 opacity-30 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-amber-500" />
              </button>
            ))}
          </div>

          {/* Quick Contact Bar */}
          <div className={`mt-auto space-y-6 transition-all duration-700 delay-300 transform-gpu ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleCall}
                className="flex flex-col items-center justify-center space-y-3 bg-white/5 border border-white/10 py-6 rounded-3xl group active:scale-95 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-all">
                  <Phone className="w-5 h-5 text-amber-500 group-hover:text-black" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Call Support</span>
              </button>
              
              <button 
                onClick={handleWhatsApp}
                className="flex flex-col items-center justify-center space-y-3 bg-[#25D366]/10 border border-[#25D366]/20 py-6 rounded-3xl group active:scale-95 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                  <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#25D366]">WhatsApp</span>
              </button>
            </div>
            
            <button 
              onClick={(e) => scrollToSection(e, 'membership')}
              className="w-full gold-gradient text-black font-bold py-6 rounded-3xl text-sm uppercase tracking-widest shadow-2xl shadow-amber-500/20 active:scale-95 transition-transform"
            >
              Start Membership Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
