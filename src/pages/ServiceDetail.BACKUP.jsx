import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="text-white py-20 md:py-32 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/servicios" 
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Volver a Servicios
            </Link>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      {service.image && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* Service Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6">Descripción del Servicio</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4">
                  {service.detailedDescription}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Beneficios</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle 
                      className="mr-3 flex-shrink-0 mt-1" 
                      size={24} 
                      style={{ color: service.color }}
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Nuestro Proceso</h2>
              <div className="space-y-6">
                {service.process.map((processItem, index) => (
                  <div key={index} className="flex items-start">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                    >
                      {processItem.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{processItem.title}</h3>
                      <p className="text-gray-600">{processItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8">¿Por Qué Elegirnos?</h2>
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.whyChooseUs}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div 
              className="p-12 rounded-2xl text-white text-center"
              style={{
                background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Interesado en {service.title}?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contáctanos para una consulta gratuita
              </p>
              <Link
                to="/contacto"
                className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
                style={{ color: service.color }}
              >
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;