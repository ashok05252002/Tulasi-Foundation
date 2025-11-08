import React from 'react';
import { Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const InProgressPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-6"
      >
        <div className="bg-brand-green/10 p-5 rounded-full inline-block">
          <div className="bg-brand-green/20 p-4 rounded-full">
            <Sprout className="h-16 w-16 text-brand-green" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">
        Tulasi Foundation
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-1">
        Our new website is under construction.
      </p>
      
      <p className="text-2xl font-semibold text-brand-green animate-pulse">
        Coming Soon!
      </p>
    </main>
  );
};

export default InProgressPage;
