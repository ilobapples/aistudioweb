import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MEMORIES, NARRATIVE_STORY } from '../constants';

const Memories: React.FC = () => {
  const navigate = useNavigate();

  // Combine story and other memories into one flat list
  const combinedPhotos = [
    ...NARRATIVE_STORY.map(s => ({ ...s, isNarrative: true })),
    ...MEMORIES.map(m => ({ ...m, isNarrative: false }))
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-zinc-800">
      {/* Absolute Minimal Exit Button */}
      <button 
        onClick={() => navigate('/misc')}
        className="fixed top-8 right-8 z-[100] group flex items-center gap-2 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/5 hover:border-white/20 transition-all active:scale-95"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white animate-pulse"></div>
        <span className="pixel-font text-[8px] text-zinc-500 group-hover:text-white uppercase tracking-widest">Exit_Archive</span>
      </button>

      <div className="max-w-[1400px] mx-auto pt-24 px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center">
          <h2 className="pixel-font text-xs text-zinc-500 uppercase tracking-[0.5em] mb-2 opacity-50">Camera Roll</h2>
          <div className="w-8 h-[1px] bg-zinc-800"></div>
        </div>

        {/* Unified Photo Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {combinedPhotos.map((item, idx) => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden group bg-zinc-900 aspect-square ${
                item.isNarrative ? 'ring-1 ring-white/10' : ''
              }`}
            >
              <img 
                src={item.url} 
                alt={item.caption} 
                className={`w-full h-full object-cover transition-all duration-700 ${
                  item.isNarrative 
                    ? 'opacity-90 group-hover:opacity-100 group-hover:scale-105' 
                    : 'grayscale-[0.5] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'
                }`}
              />
              
              {/* Discrete Metadata Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300">
                   {item.isNarrative ? `SEQ_0${idx + 1}` : `SHOT_ID_${item.id}`}
                </p>
                <p className="text-[10px] text-zinc-500 italic mt-1 truncate">
                  {item.caption}
                </p>
              </div>

              {/* Index indicator for the narrative sequence only */}
              {item.isNarrative && (
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Endless Grid Decorative Footer */}
        <div className="mt-20 py-20 flex flex-col items-center gap-6 opacity-10">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
          <span className="pixel-font text-[8px] tracking-[2em]">END_OF_ROLL</span>
        </div>
      </div>
    </div>
  );
};

export default Memories;