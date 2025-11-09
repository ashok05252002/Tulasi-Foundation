import React from 'react';
import { MapPin, Building2, Scaling, Home, BadgeCheck, IndianRupee, Landmark } from 'lucide-react';

const ProjectInfoGrid = ({ project }) => {
  const infoItems = [
    { icon: <MapPin className="h-7 w-7 text-brand-green" />, label: 'Location', value: project.location },
    { icon: <Building2 className="h-7 w-7 text-brand-green" />, label: 'Project', value: project.projectType },
    { icon: <Scaling className="h-7 w-7 text-brand-green" />, label: 'Total Area', value: project.totalArea },
    { icon: <Home className="h-7 w-7 text-brand-green" />, label: 'Units', value: project.units },
    { icon: <BadgeCheck className="h-7 w-7 text-brand-green" />, label: 'Approval', value: project.approval },
    { icon: <IndianRupee className="h-7 w-7 text-brand-green" />, label: 'Plot Price', value: project.plotPrice },
    { icon: <IndianRupee className="h-7 w-7 text-brand-green" />, label: 'Villa Price', value: project.villaPrice },
    { icon: <Landmark className="h-7 w-7 text-brand-green" />, label: 'Loan', value: project.loan },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {infoItems.map((item, index) => (
        <div key={index} className="flex items-center p-5 border border-dotted border-gray-400 rounded-lg bg-white transition-shadow hover:shadow-md">
          <div className="mr-5">
            {item.icon}
          </div>
          <div>
            <p className="text-base text-gray-500">{item.label}</p>
            <p className="font-bold text-gray-900 text-lg">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfoGrid;
