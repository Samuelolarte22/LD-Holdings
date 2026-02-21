import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestra Empresa', path: '/nuestra-empresa' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Logo */}
          <Link to="/" className="absolute left-4 sm:left-8 flex items-center">
            <img 
              src="/logo.png" 
              alt="LD Holdings" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centrado */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.path.replace('/', '') || 'home'}`}
                className={`text-base font-medium transition-all duration-300 relative group whitespace-nowrap ${
                  isActive(link.path) ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 text-gray-700 hover:text-[#D4AF37] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-300 py-2 ${
                    isActive(link.path) ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#D4AF37]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;