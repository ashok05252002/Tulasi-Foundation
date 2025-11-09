import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const bannerImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] md:pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-4">
              Building the Future of Real Estate
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Tulasi Foundation is dedicated to creating lasting value through integrity, innovation, and a commitment to excellence.
            </p>
            <a 
              href="#about" 
              className="inline-block bg-brand-green hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <img 
              src={bannerImageUrl} 
              alt="Modern house exterior" 
              className="rounded-lg shadow-2xl w-full max-w-md md:max-w-full h-auto object-cover"
              style={{ maxHeight: '70vh' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
