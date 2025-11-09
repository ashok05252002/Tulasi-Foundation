import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const DevelopmentPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Other sections of the page will go here */}
        <div className="container mx-auto py-20 px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
          <p className="text-gray-600 mt-2">Content for the rest of the page will be built here.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg p-4 shadow-sm h-64 bg-gray-100 flex items-center justify-center text-gray-400">Property Card 1</div>
            <div className="border rounded-lg p-4 shadow-sm h-64 bg-gray-100 flex items-center justify-center text-gray-400">Property Card 2</div>
            <div className="border rounded-lg p-4 shadow-sm h-64 bg-gray-100 flex items-center justify-center text-gray-400">Property Card 3</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevelopmentPage;
