
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: "Marcus Thorne",
      role: "Head Strength Coach",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974",
      bio: "Former Olympian with 15+ years of experience in high-performance sports science."
    },
    {
      name: "Sarah Vane",
      role: "Metabolic Specialist",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974",
      bio: "Expert in nutrition and functional conditioning for executive lifestyle management."
    },
    {
      name: "David 'The Tank' Miller",
      role: "Senior Bodybuilder",
      image: "https://images.unsplash.com/photo-1491752355132-283149486bba?q=80&w=2070",
      bio: "IFBB Pro specializing in muscle architecture and aesthetic symmetry."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]" id="trainers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">The Architects</h2>
          <h3 className="text-5xl md:text-6xl font-heading">ELITE <span className="text-gold">COACHING</span></h3>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Our trainers aren't just experts; they are mentors. Hand-selected for their pedigree, knowledge, and ability to push you beyond perceived limits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((t, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="glass p-4 rounded-2xl flex justify-center space-x-6">
                    <Instagram className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
                    <Twitter className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
                    <Linkedin className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
                  </div>
                </div>

                {/* Info Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="text-center space-y-2">
                <h4 className="text-2xl font-bold group-hover:text-amber-500 transition-colors">{t.name}</h4>
                <p className="text-amber-500/80 font-bold text-xs uppercase tracking-[0.2em]">{t.role}</p>
                <p className="text-zinc-500 text-sm max-w-[280px] leading-relaxed pt-2">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
