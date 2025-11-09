import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TabbedGallery from '../components/TabbedGallery';
import ProjectInfoGrid from '../components/ProjectInfoGrid';
import SurroundingFeaturesSection from '../components/SurroundingFeaturesSection';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = mockProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/dev" className="mt-4 text-brand-green hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[55vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${project.coverImage})` }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative text-center text-white p-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-thin tracking-widest uppercase" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              {project.name.split(' ')[0]}
            </h1>
            <p className="text-base md:text-lg tracking-wider md:tracking-[0.2em] uppercase">
              {project.name.split(' ').slice(1).join(' ')}
            </p>
          </div>
        </div>

        {/* Main Content - New Layout */}
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Column: Info Grid */}
            <div className="lg:col-span-3">
              <ProjectInfoGrid project={project} />
            </div>
            
            {/* Right Column: Image */}
            <div className="lg:col-span-2">
              <img src={project.sideImage} alt={`${project.name} layout`} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        
        {/* Surrounding Features Section */}
        <SurroundingFeaturesSection features={project.surroundingFeatures} />

        {/* Project Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">
              Project Gallery
            </h2>
            <TabbedGallery 
              photos={project.galleryImages} 
              floorPlans={project.floorPlanImages} 
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
