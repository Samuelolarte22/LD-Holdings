import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileText, 
  Scale, 
  Wallet, 
  CircleDollarSign,
  Landmark,
  Wrench,
  Zap,
  Boxes,
  ShoppingBag,
  Home as HomeIcon
} from 'lucide-react';

// Datos de servicios organizados por categoría
const serviceCategories = {
  financial: {
    title: 'Servicios Financieros y Legales',
    color: '#3B82F6',
    bgGradient: 'from-blue-50 to-blue-100',
    services: [
      { id: 1, title: 'Asesoría financiera', slug: 'asesoria-financiera', description: 'Optimización de recursos, planeación y estrategias para la estabilidad financiera.', icon: Building2 },
      { id: 2, title: 'Asesoría tributaria', slug: 'asesoria-tributaria', description: 'Cumplimiento normativo y estrategias fiscales que cuidan tus finanzas.', icon: FileText },
      { id: 3, title: 'Asesoría legal', slug: 'asesoria-legal', description: 'Apoyo jurídico especializado en procesos empresariales y protección.', icon: Scale },
      { id: 4, title: 'Fondo de inversión', slug: 'fondo-de-inversion', description: 'Opciones de inversión seguras y diversificadas para hacer crecer tu capital.', icon: Wallet },
      { id: 5, title: 'Financiación de proyectos', slug: 'financiacion-proyectos', description: 'Estructuración y gestión de recursos para proyectos de alto impacto.', icon: CircleDollarSign },
    ]
  },
  construction: {
    title: 'Construcción y Obras',
    color: '#10B981',
    bgGradient: 'from-emerald-50 to-emerald-100',
    services: [
      { id: 6, title: 'Obras civiles', slug: 'obras-civiles', description: 'Desarrollo de proyectos de construcción con altos estándares de calidad.', icon: Landmark },
      { id: 7, title: 'Remodelación', slug: 'remodelaciones', description: 'Renovación y transformación de espacios para darles mayor valor y funcionalidad.', icon: Wrench },
      { id: 8, title: 'Certificaciones eléctricas', slug: 'certificaciones-electricas', description: 'Garantizamos la seguridad de tus instalaciones con certificaciones actuales.', icon: Zap },
      { id: 9, title: 'Modelado 3D', slug: 'modelado-3d', description: 'Representaciones digitales avanzadas para visualizar proyectos antes de construir.', icon: Boxes },
      { id: 10, title: 'Comercialización de materiales', slug: 'comercializacion-materiales', description: 'Suministro confiable de materiales de alta calidad para tus obras.', icon: ShoppingBag },
    ]
  },
  realEstate: {
    title: 'Gestión Inmobiliaria',
    color: '#8B5CF6',
    bgGradient: 'from-purple-50 to-purple-100',
    services: [
      { id: 11, title: 'Venta y gestión de inmuebles', slug: 'venta-gestion-inmuebles', description: 'Asesoría integral en compras, ventas y administración de propiedades.', icon: HomeIcon },
    ]
  }
};

const ServiceCard = ({ service, categoryColor, bgGradient }) => {
  const IconComponent = service.icon;
  
  return (
    <Link
      to={`/servicios/${service.slug}`}
      data-testid={`service-card-${service.slug}`}
      className="group block"
    >
      <div className={`bg-gradient-to-br ${bgGradient} rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100`}>
        {/* Icon Container */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: categoryColor }}
        >
          <IconComponent className="text-white" size={32} strokeWidth={1.5} />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        
        {/* Link */}
        <div 
          className="text-sm font-medium flex items-center gap-1 transition-all duration-300"
          style={{ color: categoryColor }}
        >
          Ver más
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};

const ServiceSection = ({ category, data, altBg = false }) => {
  return (
    <section className={`py-16 ${altBg ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {data.title}
          </h2>
          <div 
            className="w-20 h-1 rounded-full"
            style={{ backgroundColor: data.color }}
          />
        </div>
        
        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${category === 'realEstate' ? 'lg:grid-cols-3' : ''}`}>
          {data.services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              categoryColor={data.color}
              bgGradient={data.bgGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Servicios = () => {
  return (
    <div className="min-h-screen bg-gray-900" data-testid="servicios-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="servicios-title">
              Nuestros <span className="text-[#D4AF37]">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Soluciones integrales para todas las necesidades de tu empresa
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <ServiceSection category="financial" data={serviceCategories.financial} />
      <ServiceSection category="construction" data={serviceCategories.construction} altBg={true} />
      <ServiceSection category="realEstate" data={serviceCategories.realEstate} />

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
            data-testid="contact-cta-button"
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Contáctanos
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
