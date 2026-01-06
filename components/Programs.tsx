
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Weight Gain Mastery",
      category: "Bulking Protocol",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=2070",
      desc: "Strategic calorie surplus coaching combined with heavy compound lifting for maximum size and mass."
    },
    {
      title: "Fat Loss Shred",
      category: "Weight Loss Protocol",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070",
      desc: "High-intensity metabolic conditioning designed to incinerate fat while preserving lean muscle mass."
    },
    {
      title: "Muscle Gain Pro",
      category: "Hypertrophy Protocol",
      image: "https://images.unsplash.com/photo-1574673130244-c747e9659b51?q=80&w=1932",
      desc: "Advanced isolation and volume training focused on muscle architecture and aesthetic symmetry."
    },
    {
      title: "Maximum Strength",
      category: "Power Protocol",
      image: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1974",
      desc: "Pure explosive power training utilizing Olympic standards and professional strength science."
    }
  ];

  return (
    <section className="py-24 bg-[#050505]" id="programs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal" data-reveal>
          <div className="space-y-4">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Targeted Results</h2>
            <h3 className="text-5xl font-heading">CHOOSE YOUR <span className="text-gold">GOAL</span></h3>
          </div>
          <button className="flex items-center space-x-2 text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-widest text-sm font-bold">
            <span>Our Full Protocol</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div key={i} 
                 className={`group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer reveal delay-${(i + 1) * 100}`} 
                 data-reveal>
              {/* Image Overlay */}
              <img 
                src={p.image} 
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/50 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-amber-500 font-bold uppercase text-[10px] tracking-widest mb-2 opacity-80">{p.category}</span>
                <h4 className="text-3xl font-heading mb-4 leading-none">{p.title}</h4>
                <p className="text-zinc-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {p.desc}
                </p>
                <div className="h-[2px] w-0 group-hover:w-full bg-amber-500 transition-all duration-700"></div>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-amber-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
