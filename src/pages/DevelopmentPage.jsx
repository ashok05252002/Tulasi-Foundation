import React from 'react';

const DevelopmentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Development Environment</h1>
        <p className="mt-2 text-gray-600">This is the <code>/dev</code> route. Start building the main website here.</p>
        <p className="mt-4 text-sm text-gray-500">
          The "Under Construction" page is live on the main route (<code>/</code>).
        </p>
      </div>
    </div>
  );
};

export default DevelopmentPage;
