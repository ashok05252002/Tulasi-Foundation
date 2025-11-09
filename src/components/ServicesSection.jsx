import React from 'react';
import { Building2, Home, PaintRoller, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, isFeatured }) => {
  const cardClasses = isFeatured
    ? 'bg-brand-dark text-white'
    : 'bg-white text-brand-dark border border-gray-100';
  
  const iconColor = isFeatured ? 'text-brand-cream' : 'text-brand-green';

  const buttonClasses = isFeatured
    ? 'bg-brand-green/80 hover:bg-brand-green text-white'
    : 'bg-brand-green hover:bg-brand-dark text-white';

  return (
    <div className={`p-8 lg:p-10 rounded-3xl shadow-lg flex flex-col text-left h-full transition-transform duration-300 hover:-translate-y-2 ${cardClasses}`}>
      <div className={`mb-6 ${iconColor}`}>{React.cloneElement(icon, { className: 'h-12 w-12' })}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="mb-6 opacity-80 flex-grow">{description}</p>
      <a href="#" className={`mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors ${buttonClasses}`}>
        Learn More
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Building2 />,
      title: 'Commercial Properties',
      description: 'Find the perfect space for your business, from retail storefronts to large office complexes.',
      isFeatured: false,
    },
    {
      icon: <Home />,
      title: 'Residential Sales',
      description: 'We help you find your dream home, guiding you through every step of the purchasing process with expertise.',
      isFeatured: true,
    },
    {
      icon: <PaintRoller />,
      title: 'Renovation & Design',
      description: 'Our team of experts can help you transform any property into the space you’ve always envisioned.',
      isFeatured: false,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-green font-semibold uppercase tracking-widest mb-2">Our Core Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-16">
          Services That Support You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16">
          <a href="#" className="font-semibold text-brand-dark hover:text-brand-green inline-flex items-center transition-colors group">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
