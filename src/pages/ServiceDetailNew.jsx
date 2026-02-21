import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { allServices } from '../data/servicesNew';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section con imagen y diseño diagonal */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: service.image 
              ? `url(${service.image})`
              : 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Línea diagonal decorativa */}
        <div 
          className="absolute top-0 right-0 w-full h-32 transform origin-top-right skew-y-2"
          style={{ backgroundColor: service.color }}
        ></div>

        {/* Contenido */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link 
            to="/servicios" 
            className="inline-flex items-center text-white hover:text-[#D4AF37] mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Volver a Servicios
          </Link>
          
          <div 
            className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: service.color }}
          >
            <IconComponent className="text-white" size={48} />
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: service.color }}
          >
            {service.title.toUpperCase()}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            {service.detailedDescription}
          </p>
        </div>

        {/* Línea diagonal inferior */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 transform origin-bottom-left -skew-y-2"
          style={{ backgroundColor: service.color }}
        ></div>
      </section>

      {/* Beneficios Principales */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: service.color }}
          >
            BENEFICIOS PRINCIPALES
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border-2 hover:bg-gray-700 transition-all duration-300"
                style={{ borderColor: service.color }}
              >
                <p className="text-white text-center">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-20 bg-gray-900 relative">
        {/* Línea decorativa superior */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-2"
          style={{ backgroundColor: service.color }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: service.color }}
          >
            NUESTRO PROCESO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((processItem, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 border-4"
                  style={{ 
                    backgroundColor: service.color,
                    borderColor: service.color 
                  }}
                >
                  {processItem.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{processItem.title}</h3>
                <p className="text-gray-400">{processItem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-2"
          style={{ backgroundColor: service.color }}
        ></div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl font-bold mb-8"
              style={{ color: service.color }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final con diseño diagonal */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: service.color }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Línea diagonal decorativa */}
        <div 
          className="absolute top-0 left-0 w-full h-20 bg-gray-900 transform origin-top-left skew-y-2"
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Interesado en {service.title}?
          </h2>
          <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <Link
            to="/contacto"
            className="bg-white text-gray-900 px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block text-lg"
          >
            Contactar Ahora
          </Link>
        </div>

        {/* Línea diagonal inferior */}
        <div 
          className="absolute bottom-0 right-0 w-full h-20 bg-gray-900 transform origin-bottom-right -skew-y-2"
        ></div>
      </section>
    </div>
  );
};

export default ServiceDetail;