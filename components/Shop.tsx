import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <section className="w-full py-24 bg-ln-cream text-ln-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-widest">Lando Store</span>
            </div>
            <h2 className="font-display font-bold text-7xl md:text-9xl tracking-tighter uppercase leading-[0.85] mb-8">
              New In:<br/>
              LN4 Racing
            </h2>
            <p className="font-sans text-gray-600 max-w-md mb-8">
              A collection built for performance and speed, combining classic motorsport aesthetics & modern craftsmanship.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-ln-yellow text-black px-6 py-3 font-bold uppercase text-sm hover:bg-black hover:text-ln-yellow transition-colors">
              Visit The Store <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Image Collage */}
          <div className="relative h-[600px] w-full">
             {/* Main Image */}
             <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gray-200 z-10">
                <img src="https://images.unsplash.com/photo-1549497557-d54b2f6322ad?q=80&w=1287&auto=format&fit=crop" className="w-full h-full object-cover" alt="Merch Main" />
                
                {/* Script Overlay */}
                <div className="absolute -bottom-10 -left-20 font-script text-8xl text-blue-300 drop-shadow-lg z-20 -rotate-12 mix-blend-multiply">
                    Lando
                </div>
             </div>
             
             {/* Secondary Image */}
             <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gray-300 z-20 border-4 border-white">
                <img src="https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?q=80&w=1287&auto=format&fit=crop" className="w-full h-full object-cover" alt="Merch Detail" />
             </div>
             
             {/* Sticker Graphic */}
             <div className="absolute top-10 left-10 w-24 h-24 bg-ln-yellow rounded-full flex items-center justify-center -rotate-12 z-30 shadow-lg">
                <span className="font-display font-bold text-xl text-center leading-none">LN4<br/>DROP</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;