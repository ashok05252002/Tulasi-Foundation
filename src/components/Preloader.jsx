import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const logoUrl = 'https://i.postimg.cc/MHHy3Zzx/Screenshot-2025-11-08-at-12-30-53-PM.png';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        src={logoUrl}
        alt="Tulasi Foundation Logo"
        className="h-24 w-auto"
      />
    </motion.div>
  );
};

export default Preloader;
