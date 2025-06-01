// components/Loader.tsx

import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500 opacity-25 animate-ping" />
          <div className="absolute inset-0 rounded-full border-4 border-indigo-600 animate-spin" />
          <div className="absolute inset-2 rounded-full bg-indigo-500" />
        </div>
        <p className="text-gray-700 text-lg font-medium tracking-wide">Loading EchoBridge+...</p>
      </div>
    </div>
  );
};

export default Loader;
