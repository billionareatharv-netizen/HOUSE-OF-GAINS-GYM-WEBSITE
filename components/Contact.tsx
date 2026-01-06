
import React, { useState } from 'react';
import { Send, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const primaryNumber = "919039722747";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Inquiry: House of Gains*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Goals:* ${formData.message}`;

    window.open(`https://wa.me/${primaryNumber}?text=${whatsappMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleWhatsAppDirect = () => {
    window.open(`https://wa.me/${primaryNumber}?text=Hi House of Gains, I want to book a visit!`, "_blank");
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side: Contact Info */}
          <div className="space-y-12 reveal-left" data-reveal>
            <div className="space-y-4">
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Join the House</h2>
              <h3 className="text-5xl md:text-6xl font-heading">LET'S START THE <span className="text-gold">GRIND</span></h3>
              <p className="text-zinc-500 max-w-lg leading-relaxed">
                Experience Indore's most elite fitness destination. Located conveniently near Sapna Sangeeta, we are ready to help you reach your peak.
              </p>
            </div>

            <div className="space-y-8">
              <a 
                href="https://maps.google.com/?q=31, Shahid Bhagat Singh Nagar, Indore" 
                target="_blank" 
                className="flex items-center space-x-6 group cursor-pointer reveal delay-100"
                data-reveal
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <MapPin className="w-6 h-6 text-amber-500 group-hover:text-black" />
                </div>
                <div>
                  <h4 className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-1">Our Location</h4>
                  <p className="text-lg md:text-xl font-bold">31, Shahid Bhagat Singh Nagar, Indore</p>
                </div>
              </a>

              <div className="space-y-6">
                <a href="tel:+919039722747" className="flex items-center space-x-6 group cursor-pointer reveal delay-200" data-reveal>
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                    <Phone className="w-6 h-6 text-amber-500 group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-1">Primary Line</h4>
                    <p className="text-xl font-bold">+91 9039722747</p>
                  </div>
                </a>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 reveal delay-300" data-reveal>
                 <button 
                  onClick={handleWhatsAppDirect} 
                  className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#128C7E] transition-all py-5 px-10 rounded-full font-bold uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(37,211,102,0.3)] transform hover:-translate-y-1"
                 >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">Quick Chat on WhatsApp</span>
                 </button>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden reveal-right" data-reveal>
             {submitted && (
              <div className="absolute inset-0 z-20 glass flex items-center justify-center animate-in fade-in duration-500">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <MessageCircle className="text-white w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-heading">OPENING WHATSAPP...</h4>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2 reveal delay-100" data-reveal>
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-500 transition-colors text-lg"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 reveal delay-200" data-reveal>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-500 transition-colors text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-500 transition-colors text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2 reveal delay-300" data-reveal>
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Fitness Goals</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-amber-500 transition-colors text-lg resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 rounded-full uppercase tracking-[0.2em] text-sm shadow-[0_10px_30px_rgba(37,211,102,0.2)] flex items-center justify-center space-x-3 group transition-all duration-300 transform hover:-translate-y-1 reveal delay-400" data-reveal>
                <span>Submit via WhatsApp</span>
                <MessageCircle className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
