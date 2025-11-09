import React from 'react';
import { Play } from 'lucide-react';

const FeatureCard = ({ title, image, items }) => (
  <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
    <div className="sm:w-2/5">
      <img src={image} alt={title} className="w-full h-48 sm:h-full object-cover" />
    </div>
    <div 
      className="sm:w-3/5 p-6"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/brick-wall.png')" }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Play className="h-4 w-4 text-brand-green fill-current mr-2 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SurroundingFeaturesSection = ({ features }) => {
  if (!features) return null;

  const featureList = [
    { title: 'Schools', data: features.schools },
    { title: 'Colleges', data: features.colleges },
    { title: 'Hospitals', data: features.hospitals },
    { title: 'Companies', data: features.companies },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">
          Surrounded by Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featureList.map(feature => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              image={feature.data.image}
              items={feature.data.list}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurroundingFeaturesSection;
