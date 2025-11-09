import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockProjects } from '../data/mockProjects';
import ProjectCard from '../components/ProjectCard';

const ProjectsListPage = () => {
  const heroImageUrl = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {/* Hero Section with V-shape */}
        <div 
          className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${heroImageUrl})`,
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' 
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-md">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.4)' }}>
                Our Projects
              </h1>
            </div>
          </div>
        </div>

        {/* Projects Grid Section */}
        <section className="py-16 md:py-24 -mt-20 md:-mt-24 z-10 relative bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark uppercase tracking-wide">
                List of Projects
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                Sed perspiciatis unde omnis iste natus estented exercitation ullamco.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsListPage;
