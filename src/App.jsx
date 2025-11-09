import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnderConstructionPage from './pages/UnderConstructionPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollToTop from './components/ScrollToTop';
import ProjectsListPage from './pages/ProjectsListPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UnderConstructionPage />} />
        <Route path="/dev" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsListPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
