import React, { useState } from 'react';
import { MapPin, Home, DollarSign, Search } from 'lucide-react';

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  const tabs = ['Buy', 'Rent', 'Sell'];

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl max-w-4xl w-full text-left">
      {/* Tabs */}
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-semibold text-sm md:text-base transition-colors duration-300 ${
              activeTab === tab
                ? 'border-b-2 border-brand-green text-brand-dark'
                : 'text-gray-500 hover:text-brand-dark'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Location */}
        <div className="md:col-span-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="location"
              placeholder="Enter a location"
              className="w-full h-12 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="md:col-span-1">
          <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              id="property-type"
              className="w-full h-12 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green appearance-none bg-white"
            >
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
              <option>Land</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="md:col-span-1">
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1½ h-5 w-5 text-gray-400" />
            <select
              id="price-range"
              className="w-full h-12 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-brand-green focus:border-brand-green appearance-none bg-white"
            >
              <option>$100k - $200k</option>
              <option>$200k - $400k</option>
              <option>$400k - $800k</option>
              <option>$800k+</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-1">
          <button type="submit" className="w-full bg-brand-green hover:bg-brand-dark text-white font-bold py-2 px-4 rounded-md flex items-center justify-center transition-colors h-12">
            <Search className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
