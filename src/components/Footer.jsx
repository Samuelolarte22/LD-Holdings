import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/logo_f.png" 
              alt="LD Holdings" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Soluciones integrales para el crecimiento y desarrollo de tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-[#0303b5] transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/nuestra-empresa" 
                  className="text-gray-400 hover:text-[#0303b5] transition-colors duration-300"
                >
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicios" 
                  className="text-gray-400 hover:text-[#0303b5] transition-colors duration-300"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-gray-400 hover:text-[#0303b5] transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#0303b5]" />
                <a 
                  href="mailto:info@ldholdingsgroup.org" 
                  className="text-gray-400 hover:text-[#0303b5] transition-colors duration-300"
                >
                  info@ldholdingsgroup.org
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#0303b5]" />
                <a 
                  href="tel:+573177848600" 
                  className="text-gray-400 hover:text-[#0303b5] transition-colors duration-300"
                >
                  +57 317 7848600
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#0303b5]" />
                <span className="text-gray-400">
                  Bogotá, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LD Holdings. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;