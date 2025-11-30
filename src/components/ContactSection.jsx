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
        <p key={index} className="text-gray-600 break-words">{line}</p>
      ))}
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Get In Touch</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We'd love to hear from you. Please fill out the form below or contact us through one of our channels.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Enter your Name"
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Enter a valid email address"
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              <div className="mb-6">
                <textarea 
                  placeholder="Enter your message" 
                  rows="4"
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-brand-green text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-dark transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Info Cards Grid */}
          <div className="space-y-8 order-1 lg:order-2">
             <div className="bg-white p-6 shadow-lg rounded-lg">
                <ContactInfoCard 
                  icon={<MapPin className="h-8 w-8 text-brand-green" />}
                  title="Our Main Office"
                  lines={['SoHo 94 Broadway St', 'New York, NY 1001']}
                />
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <ContactInfoCard 
                  icon={<Phone className="h-8 w-8 text-brand-green" />}
                  title="Phone Number"
                  lines={['234-9876-5400', '888-0123-4567 (Toll Free)']}
                />
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <ContactInfoCard 
                  icon={<Mail className="h-8 w-8 text-brand-green" />}
                  title="Email"
                  lines={['info@tulasifoundation.com']}
                />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
