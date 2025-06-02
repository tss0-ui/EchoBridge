// /pages/Translate.tsx

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import GestureOverlay from '@/components/GestureOverlay';
import TextToSpeech from '@/components/TextToSpeech';
import Loader from '@/components/Loader';
import LanguageToggle from '@/components/LanguageToggle';
import { fetchGesturePrediction } from '@/lib/api';
import HandSVG from '@/components/svg/HandSVG';
import RippleEffect from '@/components/RippleEffect';

const TranslatePage = () => {
  const { theme } = useTheme();
  const [gesture, setGesture] = useState<string | null>(null);
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const interval = setInterval(async () => {
      setLoading(true);
      const prediction = await fetchGesturePrediction();
      if (prediction) {
        setGesture(prediction.name);
        setTranslatedText(
          language === 'en' ? prediction.translation.en : prediction.translation.es
        );
      }
      setLoading(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <main
      className={`relative min-h-screen px-4 py-8 flex flex-col items-center justify-center transition-colors duration-500 ${
        theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'
      }`}
    >
      <LanguageToggle language={language} setLanguage={setLanguage} />

      <h1 className="text-3xl font-bold mb-4 tracking-tight">
        {language === 'en' ? 'Real-Time Translation' : 'Traducción en Tiempo Real'}
      </h1>

      <RippleEffect />

      <section className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-700 bg-zinc-800">
        <GestureOverlay gesture={gesture} />
        <div className="absolute bottom-4 right-4 z-50">
          <HandSVG gesture={gesture} />
        </div>
      </section>

      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <div className="mt-6 text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-semibold"
        >
          {translatedText || (language === 'en' ? 'Waiting for gesture...' : 'Esperando gesto...')}
        </motion.h2>

        {translatedText && (
          <TextToSpeech text={translatedText} language={language} />
        )}
      </div>
    </main>
  );
};

export default TranslatePage;
