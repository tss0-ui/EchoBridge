// components/GestureOverlay.tsx

import React from 'react';

interface GestureOverlayProps {
  gesture: string | null;
  confidence?: number; // value between 0 and 1
}

const GestureOverlay: React.FC<GestureOverlayProps> = ({ gesture, confidence }) => {
  if (!gesture) return null;

  const getConfidenceColor = (value: number) => {
    if (value > 0.9) return 'text-green-500';
    if (value > 0.7) return 'text-yellow-400';
    return 'text-red-500';
  };

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md border border-gray-200">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Gesture: <span className="text-indigo-600">{gesture}</span>
        </h2>
        {typeof confidence === 'number' && (
          <p className={`text-sm mt-1 ${getConfidenceColor(confidence)}`}>
            Confidence: {(confidence * 100).toFixed(1)}%
          </p>
        )}
      </div>
    </div>
  );
};

export default GestureOverlay;
