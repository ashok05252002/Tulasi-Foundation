import React from 'react';
import { MapPin, Phone, Printer, Mail } from 'lucide-react';

const ContactInfoCard = ({ icon, title, lines }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-sm uppercase tracking-wider text-gray-800">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-600">{line}</p>
      ))}
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center -m-4">
          
          {/* Info Cards Grid */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 shadow-lg">
                <ContactInfoCard 
                  icon={<MapPin className="h-8 w-8 text-brand-green" />}
                  title="Our Main Office"
                  lines={['SoHo 94 Broadway St', 'New York, NY 1001']}
                />
              </div>
              <div className="bg-white p-8 shadow-lg">
                <ContactInfoCard 
                  icon={<Phone className="h-8 w-8 text-brand-green" />}
                  title="Phone Number"
                  lines={['234-9876-5400', '888-0123-4567 (Toll Free)']}
                />
              </div>
              <div className="bg-white p-8 shadow-lg">
                <ContactInfoCard 
                  icon={<Printer className="h-8 w-8 text-brand-green" />}
                  title="Fax"
                  lines={['1-234-567-8900']}
                />
              </div>
              <div className="bg-white p-8 shadow-lg">
                <ContactInfoCard 
                  icon={<Mail className="h-8 w-8 text-brand-green" />}
                  title="Email"
                  lines={['info@tulasifoundation.com']}
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-brand-green p-8 sm:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Enter your Name"
                    className="w-full p-3 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-dark"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Enter a valid email address"
                    className="w-full p-3 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-dark"
                  />
                </div>
                <div className="mb-6">
                  <textarea 
                    placeholder="Enter your message" 
                    rows="4"
                    className="w-full p-3 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-dark"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-green transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
