import React from 'react';
import { Award, Calendar } from 'lucide-react';

const AboutUsSection = () => {
  const image1 = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop';
  const image2 = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop';

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-auto lg:aspect-[4/5]">
            <img 
              src={image1} 
              alt="Spacious modern living room" 
              className="absolute top-0 left-0 w-[80%] h-[80%] sm:w-[85%] sm:h-[85%] object-cover rounded-2xl shadow-lg"
            />
            <img 
              src={image2} 
              alt="Stylish staircase in a modern home" 
              className="absolute bottom-0 right-0 w-[65%] h-[65%] sm:w-[70%] sm:h-[70%] object-cover rounded-2xl shadow-2xl border-4 sm:border-8 border-gray-50"
            />
            <div className="absolute bottom-[25%] sm:bottom-[20%] left-0 bg-brand-dark text-white p-4 sm:p-6 rounded-r-2xl shadow-xl w-40 sm:w-48 text-center">
              <p className="text-3xl sm:text-4xl font-bold">99%</p>
              <p className="mt-1 text-xs sm:text-sm uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="text-left">
            <p className="text-brand-green font-semibold uppercase tracking-widest mb-2">A Legacy of Excellence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Crafting Exceptional Spaces for Over 15 Years
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded on the principles of trust and transparency, Tulasi Foundation has grown to become a leading name in real estate. We are passionate about creating spaces that are not just buildings, but homes and communities that inspire.
            </p>
            
            <ul className="space-y-6 mb-10">
              <li className="flex items-center">
                <Award className="h-8 w-8 text-brand-green mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Pioneers in Quality Development</h4>
                  <p className="text-gray-500">Recognized for our commitment to superior craftsmanship.</p>
                </div>
              </li>
              <li className="flex items-center">
                <Calendar className="h-8 w-8 text-brand-green mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">15+ Years of Industry Experience</h4>
                  <p className="text-gray-500">A long-standing history of successful projects and happy clients.</p>
                </div>
              </li>
            </ul>

            <a 
              href="#" 
              className="inline-block bg-brand-green hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
