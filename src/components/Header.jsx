import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/dev';

  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = 'https://i.postimg.cc/MHHy3Zzx/Screenshot-2025-11-08-at-12-30-53-PM.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isEffectivelyScrolled = !isHomePage || isScrolled;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/dev', label: 'Home' },
    { href: '/projects', label: 'Our Projects' },
    { href: '/dev#about', label: 'About Us' },
    { href: '/dev#services', label: 'Services' },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-30 transition-all duration-300 bg-white ${isEffectivelyScrolled ? 'shadow-md' : ''}`;
  
  const linkColor = 'text-brand-dark';
  const contactButtonClasses = 'bg-brand-green text-white hover:bg-brand-dark';

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/dev" className="flex items-center space-x-2">
              <img src={logoUrl} alt="Tulasi Foundation Logo" className="h-12 md:h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={`${linkColor} hover:text-brand-green font-medium transition-colors`}>
                {link.label}
              </a>
            ))}
            <a
              href="/dev#contact"
              className={`font-semibold px-5 py-2 rounded-lg transition-colors ${contactButtonClasses}`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${linkColor} p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-6 right-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-gray-800 hover:text-brand-dark font-medium py-2">
                  {link.label}
                </a>
              ))}
              <a
                href="/dev#contact"
                className="bg-brand-green text-white text-center font-semibold px-5 py-2 rounded-lg hover:bg-brand-dark transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
