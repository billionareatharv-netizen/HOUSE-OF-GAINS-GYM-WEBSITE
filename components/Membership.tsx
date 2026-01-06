
import React from 'react';
import { Check } from 'lucide-react';

const Membership: React.FC = () => {
  const plans = [
    {
      name: "Club Basic",
      price: "₹1,999",
      period: "/month",
      features: [
        "Full Gym Access (6 AM - 10 PM)",
        "Premium Locker Service",
        "Group Strength Sessions",
        "Dietary Consultation",
        "Access to House of Gains App"
      ],
      isPopular: false
    },
    {
      name: "Elite Performance",
      price: "₹3,499",
      period: "/month",
      features: [
        "24/7 Priority Access",
        "2 Personal Coaching Sessions / mo",
        "Advanced Body Analytics",
        "Recovery Zone Access",
        "Supplements Guidance",
        "Complimentary Guest Pass"
      ],
      isPopular: true
    },
    {
      name: "Presidential Gains",
      price: "₹8,999",
      period: "/month",
      features: [
        "Unlimited Personal Training",
        "Daily Private Recovery Suite",
        "Customized Nutrition Plan",
        "Reserved Parking Access",
        "Exclusive Member Lounge",
        "Dedicated Gear Concierge"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-[#050505]" id="membership">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Join the Inner Circle</h2>
          <h3 className="text-5xl md:text-6xl font-heading">MEMBERSHIP <span className="text-gold">TIERS</span></h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${
                p.isPopular 
                  ? 'glass border-amber-500 shadow-2xl shadow-amber-500/10 scale-105 z-10' 
                  : 'bg-[#0f0f0f] border-white/5 hover:border-white/20'
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-black text-[10px] font-bold uppercase px-6 py-2 rounded-full tracking-widest">
                  Most Preferred
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">{p.name}</h4>
                <div className="flex items-end">
                  <span className="text-5xl font-heading text-gold">{p.price}</span>
                  <span className="text-zinc-500 ml-2 mb-1 uppercase tracking-widest text-xs font-bold">{p.period}</span>
                </div>
              </div>

              <ul className="space-y-6 mb-10">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-amber-500" />
                    </div>
                    <span className="text-zinc-400 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open(`https://wa.me/919039722747?text=I'm interested in the ${p.name} plan at House of Gains!`, "_blank")}
                className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                p.isPopular ? 'gold-gradient text-black' : 'bg-white text-black hover:bg-amber-500'
              }`}>
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
