import React from 'react';

const HeroLogo: React.FC = () => {
  return (
    <div className="fixed top-[1.2rem] left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 hero-center-icon">
      <img
        src="/images/logos-and-signatures/intial-logo-loading-icon.svg"
        alt="LN4"
        className="w-[1.5rem] md:w-[2rem] h-auto brightness-0"
      />
    </div>
  );
};

export default HeroLogo;

