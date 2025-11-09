import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const featuredImage = images[currentIndex];

  return (
    <div>
      {/* Featured Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden shadow-xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={featuredImage}
            alt="Featured project view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <button onClick={handlePrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none">
          <ChevronLeft size={28} />
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
              currentIndex === index ? 'border-brand-green scale-105' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
