// /pages/NotFound.tsx

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center transition-colors duration-500 ${
        theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="text-6xl font-bold tracking-tight">404</div>
        <p className="mt-2 text-xl font-medium">
          {`Looks like the signal didn't make it across the bridge.`}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm mb-6"
      >
        <p>The page you're looking for doesn't exist or has been moved.</p>
      </motion.div>

      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-colors"
      >
        Return to EchoBridge+
      </Link>
    </main>
  );
};

export default NotFoundPage;
