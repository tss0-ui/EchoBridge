// components/TextToSpeech.tsx

import React, { useEffect } from 'react';

interface TextToSpeechProps {
  text: string;
  autoPlay?: boolean;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, autoPlay = true }) => {
  useEffect(() => {
    const speak = async () => {
      if (!text || !autoPlay) return;

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
            text: text,
            model_id: 'eleven_monolingual_v1',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Text-to-speech synthesis failed.');
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      } catch (err) {
        console.error('Speech synthesis error:', err);
      }
    };

    speak();
  }, [text, autoPlay]);

  return null;
};

export default TextToSpeech;
