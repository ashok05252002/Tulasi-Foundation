import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const logoUrl = 'https://i.postimg.cc/MHHy3Zzx/Screenshot-2025-11-08-at-12-30-53-PM.png';

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Brand */}
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <img src={logoUrl} alt="Tulasi Foundation Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400">Building dreams, one home at a time.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="/projects" className="hover:text-brand-green transition-colors">Projects</a></li>
              <li><a href="/#services" className="hover:text-brand-green transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tulasi Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
