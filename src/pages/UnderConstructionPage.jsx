import React from 'react';
import { motion } from 'framer-motion';

const UnderConstructionPage = () => {
  const logoUrl = 'https://i.postimg.cc/MHHy3Zzx/Screenshot-2025-11-08-at-12-30-53-PM.png';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-8"
      >
        <img src={logoUrl} alt="Tulasi Foundation Logo" className="h-24 w-auto" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">
        Our New Website is Brewing
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
        We're working hard to bring you an amazing new experience. Something great is coming soon!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-2xl font-semibold text-brand-green animate-pulse"
      >
        Stay Tuned!
      </motion.div>
    </main>
  );
};

export default UnderConstructionPage;
