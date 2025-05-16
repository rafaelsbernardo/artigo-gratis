
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="https://automatikblog.com/wp-content/uploads/automatikblog.svg" 
        alt="Automatik Blog" 
        className="h-10" 
      />
    </div>
  );
};

export default Logo;
