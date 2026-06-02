import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center group cursor-pointer select-none ${className}`}>
      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span className="text-xl md:text-2xl font-black tracking-tight text-foreground transition-colors duration-300">
          ARRTECH
        </span>
        <span className="text-[9px] md:text-[10px] font-extrabold tracking-[0.08em] uppercase text-foreground-secondary/90 transition-colors duration-300 -mt-1 whitespace-nowrap">
          APPS AND DATA SOLUTIONS
        </span>
      </div>
    </div>
  );
};

export default Logo;
