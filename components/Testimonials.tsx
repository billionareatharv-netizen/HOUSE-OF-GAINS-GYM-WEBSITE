
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rahul Mehra",
      title: "Indore Entrepreneur",
      text: "The privacy and precision coaching at House of Gains is unparalleled. It's the only place in Indore I can truly disconnect and focus on my physical goals without distractions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
    },
    {
      name: "Sanya K.",
      title: "Fitness Professional",
      text: "I've trained in elite facilities across India, and House of Gains stands in a league of its own. The atmosphere and the community here drive you to perform better every single day.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Testimonials</h2>
            <h3 className="text-5xl font-heading leading-tight">WORD FROM OUR <span className="text-gold">GAINS FAMILY</span></h3>
            <p className="text-zinc-500">Hear from the high-performers and dedicated members who call House of Gains their fitness home.</p>
            <div className="flex space-x-4 pt-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 transition-colors group">
                <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 transition-colors group">
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="glass p-10 rounded-[2rem] space-y-6 flex flex-col justify-between hover:translate-y-[-10px] transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                  </div>
                  <p className="text-zinc-300 text-lg italic leading-relaxed">"{r.text}"</p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
                  <img src={r.image} alt={r.name} className="w-14 h-14 rounded-full object-cover border border-amber-500/30" />
                  <div>
                    <h4 className="font-bold text-lg">{r.name}</h4>
                    <p className="text-amber-500/70 text-xs font-bold uppercase tracking-widest">{r.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
