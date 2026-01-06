
import React from 'react';
import { Instagram, Youtube, Facebook, Twitter, Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/_house_of_gains_3.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-black font-heading text-xl">H</span>
              </div>
              <span className="font-heading text-2xl">HOUSE OF <span className="text-gold">GAINS</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Indore's elite sanctuary for high-performance training. We provide the atmosphere and tools for true physical mastery near Sapna Sangeeta.
            </p>
            <div className="flex space-x-4">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              {[Youtube, Facebook, Twitter].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Information</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Our Ethos</a></li>
              <li><a href="#programs" className="hover:text-amber-500 transition-colors">Training Programs</a></li>
              <li><a href="#trainers" className="hover:text-amber-500 transition-colors">Coaches</a></li>
              <li><a href="#membership" className="hover:text-amber-500 transition-colors">Membership Plan</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Reach Us</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="group-hover:text-white transition-colors">31, Shahid Bhagat Singh Nagar, near Sapna Sangeeta, Indore</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+919039722747" className="hover:text-white transition-colors">9039722747</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+917024950638" className="hover:text-white transition-colors">7024950638</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <a href="https://wa.me/919039722747" target="_blank" className="hover:text-white transition-colors">WhatsApp Concierge</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">The Gains Digest</h4>
            <p className="text-zinc-500 text-sm">Get performance tips and club news straight to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-[#0f0f0f] border border-white/5 rounded-full px-6 py-4 text-xs focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 gold-gradient text-black text-[10px] font-bold uppercase px-6 rounded-full hover:scale-105 transition-transform">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">
          <p>© 2024 HOUSE OF GAINS INDORE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300">Indore Branch</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
