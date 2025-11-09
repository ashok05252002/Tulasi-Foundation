import React from 'react';
import { Link } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProjects = mockProjects.slice(0, 3); // Show only the first 3

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Signature Projects</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the quality and craftsmanship that define Tulasi Foundation in our featured projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img src={project.coverImage} alt={project.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.location}</p>
                <p className="text-gray-600 mb-6">{project.shortDescription}</p>
                <Link
                  to={`/project/${project.id}`}
                  className="font-semibold text-brand-green hover:text-brand-dark inline-flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link 
            to="/projects"
            className="inline-block bg-brand-green hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
