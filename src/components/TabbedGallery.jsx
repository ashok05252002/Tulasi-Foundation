import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import { Camera, Layout } from 'lucide-react';

const TabbedGallery = ({ photos, floorPlans }) => {
  const [activeTab, setActiveTab] = useState('photos');

  return (
    <div>
      <div className="flex flex-wrap justify-center border-b mb-8">
        <button
          onClick={() => setActiveTab('photos')}
          className={`flex items-center px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold transition-colors duration-300 ${
            activeTab === 'photos'
              ? 'border-b-2 border-brand-green text-brand-dark'
              : 'text-gray-500 hover:text-brand-dark'
          }`}
        >
          <Camera className="mr-2 h-5 w-5" />
          Project Photos
        </button>
        <button
          onClick={() => setActiveTab('floorPlans')}
          className={`flex items-center px-4 py-2 text-base md:px-6 md:py-3 md:text-lg font-semibold transition-colors duration-300 ${
            activeTab === 'floorPlans'
              ? 'border-b-2 border-brand-green text-brand-dark'
              : 'text-gray-500 hover:text-brand-dark'
          }`}
        >
          <Layout className="mr-2 h-5 w-5" />
          Floor Plans
        </button>
      </div>

      <div>
        {activeTab === 'photos' && <ImageGallery images={photos} />}
        {activeTab === 'floorPlans' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlans.map((img, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-sm group cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
                <img src={img} alt={`Floor Plan ${index + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedGallery;
