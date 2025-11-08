import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InProgressPage from './pages/InProgressPage';
import DevelopmentPage from './pages/DevelopmentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InProgressPage />} />
      <Route path="/dev" element={<DevelopmentPage />} />
    </Routes>
  );
}

export default App;
