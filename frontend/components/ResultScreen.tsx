// components/ResultScreen.tsx

import React, { useEffect } from 'react';

interface ResultScreenProps {
  gesture: string | null;
  confidence: number | null;
  onReset: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ gesture, confidence, onReset }) => {
  useEffect(() => {
    const speakGesture = async () => {
      if (!gesture) return;

      const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
      const voiceId = process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID;

      if (!apiKey || !voiceId) {
        console.error('Missing ElevenLabs API credentials in .env');
        return;
      }

      try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': apiKey,
          },
          body: JSON.stringify({
            text: gesture.replace(/_/g, ' '),
            model_id: 'eleven_monolingual_v1',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to synthesize speech from ElevenLabs');
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      } catch (error) {
        console.error('Speech playback failed:', error);
      }
    };

    speakGesture();
  }, [gesture]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <div className="bg-indigo-50 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Gesture Detected</h2>

        {gesture ? (
          <>
            <p className="text-5xl font-semibold text-gray-900 mb-2">
              {gesture.replace(/_/g, ' ')}
            </p>
            {confidence !== null && (
              <p className="text-gray-600 text-lg mb-6">
                Confidence: <span className="font-medium">{(confidence * 100).toFixed(1)}%</span>
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-500 text-lg mb-6">No gesture detected.</p>
        )}

        <button
          onClick={onReset}
          className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition duration-200"
        >
          Scan Another Gesture
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
