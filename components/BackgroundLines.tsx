import React from 'react';

const BackgroundLines: React.FC = () => {
  return (
    <svg 
      className="w-full h-full absolute inset-0" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      
      {/* Grid */}
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Topographic organic lines */}
      <g fill="none" stroke="#E5E5E5" strokeWidth="0.2">
        <path d="M0,50 Q25,30 50,50 T100,50" vectorEffect="non-scaling-stroke" />
        <path d="M0,30 Q30,10 60,30 T100,20" vectorEffect="non-scaling-stroke" />
        <path d="M0,70 Q40,90 70,60 T100,80" vectorEffect="non-scaling-stroke" />
        
        {/* Closed Loops */}
        <path d="M80,20 Q90,10 95,25 T80,35 T65,25 T80,20" vectorEffect="non-scaling-stroke" opacity="0.5"/>
        <path d="M20,70 Q30,60 40,75 T20,90 T10,75 T20,70" vectorEffect="non-scaling-stroke" opacity="0.5"/>
      </g>
    </svg>
  );
};

export default BackgroundLines;