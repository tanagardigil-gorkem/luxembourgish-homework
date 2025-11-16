'use client';

import { useState } from 'react';

interface PostcardProps {
  onOpen: () => void;
}

export default function Postcard({ onOpen }: PostcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="perspective-1000">
      <div
        className={`relative w-[700px] h-[450px] transition-all duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        } ${isHovered ? 'scale-105' : 'scale-100'}`}
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front of postcard */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-white shadow-2xl overflow-hidden relative group">
            {/* Main beach image */}
            <img 
              src="/kas-2.jpg" 
              alt="Kaş Beach - Aerial View"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 items-center justify-center text-white text-sm">
              Image not found: kas-2.jpg
            </div>

            {/* Elegant overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

            {/* Top right - Decorative stamps */}
            <div className="absolute top-6 right-6 flex gap-2">
              <div className="w-14 h-14 border-2 border-white bg-blue-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg transform rotate-3">
                <span className="text-2xl">📮</span>
              </div>
              <div className="w-14 h-14 border-2 border-white bg-orange-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg transform -rotate-3">
                <span className="text-2xl">✈️</span>
              </div>
            </div>

            {/* Bottom - Elegant title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-2xl font-serif tracking-wide">
                  Kaputaş Plajı
                </h1>
                <p className="text-sm text-white/90 font-light drop-shadow-lg">
                  Kaş, Antalya
                </p>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-white/30"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-white/30"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-white/30"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-white/30"></div>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Back of postcard */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white shadow-2xl overflow-hidden border border-gray-200">
            <div className="h-full p-6 bg-amber-50/20">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Left side - Message area */}
                <div className="border-r-2 border-dashed border-gray-400 pr-6">
                  <div className="bg-white border border-gray-300 p-4 h-full shadow-sm">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Message:</p>
                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                      <p className="font-handwriting">
                        Discover the enchanting coastal town of Kaş, where crystal-clear turquoise waters meet ancient Lycian history.
                      </p>
                      <div className="space-y-1 text-xs">
                        <p>🏖️ Pristine beaches & hidden coves</p>
                        <p>🤿 World-class diving spots</p>
                        <p>🏛️ Ancient Lycian ruins</p>
                        <p>🌅 Breathtaking sunsets</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpen();
                      }}
                      className="mt-4 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 text-sm font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
                    >
                      Explore Kaş →
                    </button>
                  </div>
                </div>

                {/* Right side - Address area */}
                <div className="flex flex-col justify-between">
                  {/* Stamp area */}
                  <div className="flex justify-end mb-4">
                    <div className="w-20 h-20 border-2 border-gray-400 bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">STAMP</p>
                        <p className="text-2xl">🏖️</p>
                      </div>
                    </div>
                  </div>

                  {/* Address lines */}
                  <div className="space-y-4 flex-1">
                    <div className="space-y-3">
                      <div className="border-b border-gray-400 pb-1">
                        <p className="text-xs text-gray-500 mb-1">TO:</p>
                        <div className="h-4"></div>
                      </div>
                      <div className="border-b border-gray-400 pb-1">
                        <div className="h-4"></div>
                      </div>
                      <div className="border-b border-gray-400 pb-1">
                        <div className="h-4"></div>
                      </div>
                      <div className="border-b border-gray-400 pb-1">
                        <div className="h-4"></div>
                      </div>
                    </div>

                    {/* Postmark */}
                    <div className="mt-auto">
                      <div className="inline-block border-2 border-red-400 rounded-full px-3 py-1">
                        <p className="text-xs text-red-600 font-bold">KAŞ, TURKEY</p>
                        <p className="text-[10px] text-red-500 text-center">2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-white text-sm drop-shadow-lg">
        Click the postcard to flip it over
      </p>
    </div>
  );
}
