// pages/Home.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const isEn = language === 'en';

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'es' : 'en'));

  return (
    <>
      <Head>
        <title>EchoBridge+</title>
        <meta name="description" content="EchoBridge+ — bridging silence with sound using sign language recognition and voice playback." />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black transition-all">
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-md shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {isEn ? 'Español' : 'English'}
          </button>
        </div>

        <div className="relative max-w-2xl z-10">
          {/* Animated Hand SVG */}
          <div className="w-32 h-32 mx-auto mb-6 animate-bounce">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-indigo-600 dark:text-indigo-400"
            >
              <path
                d="M32 4C33.1046 4 34 4.89543 34 6V32C34 33.1046 33.1046 34 32 34C30.8954 34 30 33.1046 30 32V6C30 4.89543 30.8954 4 32 4Z"
                fill="currentColor"
              />
              <path
                d="M16 10C17.1046 10 18 10.8954 18 12V32C18 33.1046 17.1046 34 16 34C14.8954 34 14 33.1046 14 32V12C14 10.8954 14.8954 10 16 10Z"
                fill="currentColor"
              />
              <path
                d="M48 10C49.1046 10 50 10.8954 50 12V32C50 33.1046 49.1046 34 48 34C46.8954 34 46 33.1046 46 32V12C46 10.8954 46.8954 10 48 10Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Ripple animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="ripple-ring dark:border-indigo-500 border-indigo-300"></div>
          </div>

          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            EchoBridge<span className="text-indigo-600 dark:text-indigo-400">+</span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            {isEn
              ? 'Bridging silence and sound — translate sign language into speech in real-time.'
              : 'Conectando el silencio con el sonido — traduce lenguaje de señas a voz en tiempo real.'}
          </p>

          <Link href="/camera">
            <a className="px-6 py-3 text-white bg-indigo-600 dark:bg-indigo-500 rounded-xl hover:bg-indigo-700 dark:hover:bg-indigo-400 transition shadow-md text-lg font-semibold">
              {isEn ? 'Start Recognition' : 'Iniciar Reconocimiento'}
            </a>
          </Link>

          <div className="mt-16 text-sm text-gray-500 dark:text-gray-400">
            {isEn ? 'Built with ❤️ using AI + ElevenLabs' : 'Hecho con ❤️ con AI + ElevenLabs'}
          </div>
        </div>
      </main>

      <style jsx>{`
        .ripple-ring {
          width: 240px;
          height: 240px;
          border: 4px solid;
          border-radius: 50%;
          animation: ripple 2.5s infinite ease-in-out;
          opacity: 0.5;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
