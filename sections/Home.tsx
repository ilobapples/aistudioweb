import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteButton: React.FC<{ 
  label: string; 
  onClick: () => void; 
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  rotation: number;
  offset: string;
  hoverGif?: string;
}> = ({ label, onClick, onMouseEnter, onMouseLeave, rotation, offset, hoverGif }) => {
  return (
    <div 
      className="relative transition-transform duration-300 hover:z-10"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        marginLeft: offset 
      }}
    >
      {/* Tape Element */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm border border-white/50 -rotate-2 z-20 shadow-sm pointer-events-none"></div>
      
      <button 
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group relative bg-white border border-zinc-200 px-10 py-5 text-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105 active:scale-95 min-w-[240px]"
      >
        <span className="relative z-10">{label}</span>
        
        {/* Hover GIF effect */}
        {hoverGif && (
          <span className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-center bg-contain bg-no-repeat z-0`} style={{ backgroundImage: `url('${hoverGif}')` }}></span>
        )}
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  const [maskStyle, setMaskStyle] = useState<React.CSSProperties>({
    maskImage: 'radial-gradient(circle 0px at 0 0, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(circle 0px at 0 0, transparent 100%)'
  });
  const [showFullColor, setShowFullColor] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!portraitRef.current || showFullColor) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const mask = `radial-gradient(circle 80px at ${x}px ${y}px, black 100%, transparent 100%)`;
    setMaskStyle({
      maskImage: mask,
      WebkitMaskImage: mask
    });
  };

  const handleMouseLeave = () => {
    if (showFullColor) return;
    setMaskStyle({
      maskImage: 'radial-gradient(circle 0px at 0 0, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(circle 0px at 0 0, transparent 100%)'
    });
  };

  return (
    <section className="min-h-screen flex items-center bg-[#fafafa] px-8 md:px-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Column */}
        <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl pt-10 mb-16 text-center leading-tight font-normal">
            Hi, I’m Kimaya
          </h1>

          <div className="flex flex-col gap-8 w-full max-w-sm items-center">
            <NoteButton 
              label="About" 
              onClick={() => navigate('/about')} 
              rotation={-2} 
              offset="0"
              hoverGif="spectacles-glint.gif"
            />
            <NoteButton 
              label="Work" 
              onClick={() => navigate('/work')} 
              rotation={1.5} 
              offset="10px"
              hoverGif="anxiety-lines.gif"
            />
            <NoteButton 
              label="Sketchbook" 
              onClick={() => navigate('/sketchbook')} 
              onMouseEnter={() => setShowFullColor(true)}
              onMouseLeave={() => setShowFullColor(false)}
              rotation={-1} 
              offset="-5px"
            />
            <NoteButton 
              label="Misc" 
              onClick={() => navigate('/misc')} 
              rotation={3} 
              offset="5px"
            />
            <NoteButton 
              label="Flappy Bird" 
              onClick={() => navigate('/flappy')} 
              rotation={-2.5} 
              offset="-2px"
            />
          </div>
        </div>

        {/* Portrait Column */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div 
            ref={portraitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-hide-cursor="true"
            className="relative w-full max-w-[520px]"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1JMf65qzboiConA9Q4NaSjNFVXFulsO_S" 
              alt="Kimaya B&W" 
              className="w-full h-auto block"
            />
            <img 
              src="https://lh3.googleusercontent.com/d/1JljDRp5aWsczpDSRaZlU9zRvwZw9rPd9" 
              alt="Kimaya Color" 
              style={showFullColor ? { maskImage: 'none', WebkitMaskImage: 'none' } : maskStyle}
              className="absolute inset-0 w-full h-full object-cover transition-[mask-image] duration-300 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;