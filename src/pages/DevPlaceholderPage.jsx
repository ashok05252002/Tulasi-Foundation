import React from 'react';
import { HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const DevPlaceholderPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <motion.div
        animate={{ rotate: [0, -15, 15, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-6"
      >
        <div className="bg-yellow-500/10 p-5 rounded-full inline-block">
          <div className="bg-yellow-500/20 p-4 rounded-full">
            <HardHat className="h-16 w-16 text-yellow-600" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        Development Sandbox
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600">
        This area is for internal development and testing.
      </p>
    </main>
  );
};

export default DevPlaceholderPage;
