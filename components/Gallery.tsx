
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070", colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1574673130244-c747e9659b51?q=80&w=1932", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070", colSpan: "col-span-2", rowSpan: "row-span-1" },
  ];

  return (
    <section className="py-24 bg-[#050505]" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Visual Experience</h2>
          <h3 className="text-5xl md:text-6xl font-heading">INSIDE THE <span className="text-gold">SANCTUM</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-3xl group ${img.colSpan} ${img.rowSpan}`}>
              <img 
                src={img.src} 
                alt="Gym Gallery"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-amber-500 text-2xl font-light">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
