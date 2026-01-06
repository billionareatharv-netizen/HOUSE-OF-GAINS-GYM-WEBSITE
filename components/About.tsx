
import React from 'react';
import { Shield, Zap, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Elite Members', value: '300+' },
    { label: 'Pro Coaches', value: '12' },
    { label: 'Luxury Equipment', value: '120+' },
    { label: 'Indore Success', value: '2k+' },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "Exclusive Privacy",
      desc: "Limited capacity in the heart of Indore ensures an intimate, focused environment for your peak performance."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Science-Backed",
      desc: "Every workout is data-driven, combining modern hypertrophy science with traditional strength principles."
    },
    {
      icon: <Target className="w-8 h-8 text-amber-500" />,
      title: "Indore's Finest",
      desc: "Located near Sapna Sangeeta, we offer the most premium gym floor in the city."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "The Gainz Protocol",
      desc: "Experience a culture of discipline and luxury designed to yield real physical transformations."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-12">
            <div className="space-y-4 reveal-left" data-reveal>
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">The Gains Philosophy</h2>
              <h3 className="text-5xl md:text-6xl font-heading leading-tight">WHERE POWER MEETS <br /> <span className="text-gold">PRESTIGE</span></h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                House of Gains was built for those who refuse to settle. We provide the tools, the atmosphere, and the expertise required to build a legendary physique.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} 
                     className={`space-y-3 p-6 glass rounded-2xl hover:border-amber-500/30 transition-all duration-300 reveal delay-${(i + 1) * 100}`} 
                     data-reveal>
                  {f.icon}
                  <h4 className="text-xl font-bold">{f.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Stats */}
          <div className="relative reveal-right" data-reveal>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -left-10 md:left-auto md:right-10 glass p-8 rounded-3xl grid grid-cols-2 gap-8 min-w-[320px] shadow-2xl border border-white/20 reveal-scale delay-500" data-reveal>
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-heading text-amber-500">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
