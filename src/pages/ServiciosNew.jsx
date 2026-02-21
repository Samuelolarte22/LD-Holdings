import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { financialServices, constructionServices, realEstateServices } from '../data/servicesNew';

const Servicios = () => {
  const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;
    
    return (
      <Link
        to={`/servicios/${service.slug}`}
        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
      >
        <div 
          className="p-8 flex flex-col items-center text-center"
          style={{ backgroundColor: `${service.color}10` }}
        >
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: service.color }}
          >
            <IconComponent className="text-white" size={40} />
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
          <div className="flex items-center text-[#D4AF37] font-semibold mt-auto">
            Más información
            <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" size={20} />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-[#D4AF37]">Servicios</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Soluciones integrales para todas las necesidades de tu empresa
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Financieros y Legales */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Servicios Financieros y Legales</h2>
            <div className="w-24 h-1 bg-[#3B82F6]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Construcción y Obras */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Construcción y Obras</h2>
            <div className="w-24 h-1 bg-[#10B981]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gestión Inmobiliaria */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Gestión Inmobiliaria</h2>
            <div className="w-24 h-1 bg-[#8B5CF6]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contáctanos para soluciones personalizadas
          </p>
          <Link
            to="/contacto"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Contáctanos
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicios;