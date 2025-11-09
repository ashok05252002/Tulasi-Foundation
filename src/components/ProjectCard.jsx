import React from 'react';
import { Link } from 'react-router-dom';
import { Scaling, Building2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="overflow-hidden h-56">
        <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-brand-dark truncate mb-1">{project.name}</h3>
        <p className="text-sm text-gray-500 mb-4 truncate">{project.location}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Scaling className="h-4 w-4 mr-1.5 text-gray-400" />
            <span>{project.totalArea}</span>
          </div>
          <div className="flex items-center">
            <Building2 className="h-4 w-4 mr-1.5 text-gray-400" />
            <span>{project.projectType}</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <p className="font-semibold text-brand-dark">{project.priceRange}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
