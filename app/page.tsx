'use client';

import { useState } from 'react';
import Postcard from './components/Postcard';
import KasInfo from './components/KasInfo';

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-300 relative overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-500/30 to-transparent animate-wave"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {!showInfo ? (
          <Postcard onOpen={() => setShowInfo(true)} />
        ) : (
          <KasInfo onBack={() => setShowInfo(false)} />
        )}
      </div>

      {/* Floating elements for summer vibe */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-float-delayed"></div>
    </div>
  );
}
