import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-end border-t border-gray-100 bg-white relative z-10">
      <div>
        <h2 className="font-display font-bold text-8xl md:text-9xl tracking-tighter text-ln-yellow opacity-50 select-none">
          LN4
        </h2>
      </div>
      <div className="flex gap-8 text-sm font-sans font-bold uppercase tracking-wider">
        <a href="#" className="hover:text-ln-yellow transition-colors">Instagram</a>
        <a href="#" className="hover:text-ln-yellow transition-colors">Twitter</a>
        <a href="#" className="hover:text-ln-yellow transition-colors">Twitch</a>
        <a href="#" className="hover:text-ln-yellow transition-colors">Quadrant</a>
      </div>
    </footer>
  );
};

export default Footer;