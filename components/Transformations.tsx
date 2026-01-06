
import React from 'react';

const Transformations: React.FC = () => {
  const transformations = [
    {
      name: "James L.",
      time: "12 Weeks",
      loss: "12kg Fat Loss",
      gain: "4kg Muscle Gain",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974"
    },
    {
      name: "Elena R.",
      time: "6 Months",
      loss: "Athletic Toning",
      gain: "Enhanced Endurance",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]" id="transformations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Real Proof</h2>
            <h3 className="text-5xl md:text-6xl font-heading leading-tight">WITNESS THE <br /> <span className="text-gold">EVOLUTION</span></h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We don't just promise results; we document them. Our scientific approach ensures measurable changes in body composition and peak performance.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-amber-500"></div>
                <span className="text-sm uppercase font-bold tracking-widest text-zinc-300">Data-Driven Success</span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-heading text-amber-500">98%</div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Goal Completion Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-heading text-amber-500">1.5k+</div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Total Transformations</p>
                </div>
              </div>
            </div>
            <button className="gold-gradient text-black font-bold px-10 py-5 rounded-full uppercase tracking-widest text-xs gold-glow mt-4">
              View All Results
            </button>
          </div>

          <div className="flex space-x-6">
            {transformations.map((t, i) => (
              <div key={i} className="flex-1 group">
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden mb-6 border border-white/10">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-1">{t.time}</p>
                    <h4 className="text-2xl font-bold text-white">{t.name}</h4>
                  </div>
                </div>
                <div className="space-y-1 px-2">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t.loss}</div>
                  <div className="text-xs font-bold text-amber-500 uppercase tracking-widest">{t.gain}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
