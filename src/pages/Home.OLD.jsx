import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bienvenido a <span className="text-[#D4AF37]">LD Holdings</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Tu socio estratégico para el crecimiento empresarial
            </p>
            <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en múltiples áreas para impulsar el éxito de tu negocio. 
              Con experiencia comprobada y un equipo de expertos, transformamos desafíos en oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/servicios"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Ver Servicios
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contacto"
                className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones especializadas para cada necesidad de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/servicios/${service.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div 
                  className="h-48 flex items-center justify-center text-6xl"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/servicios"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 inline-flex items-center"
            >
              Ver Todos los Servicios
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compromiso con la excelencia en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Experiencia Comprobada',
                description: 'Años de trayectoria exitosa en múltiples industrias'
              },
              {
                title: 'Equipo Profesional',
                description: 'Expertos altamente calificados en cada área'
              },
              {
                title: 'Soluciones Personalizadas',
                description: 'Adaptamos nuestros servicios a tus necesidades específicas'
              },
              {
                title: 'Resultados Medibles',
                description: 'Enfoque en resultados tangibles y ROI positivo'
              },
              {
                title: 'Atención Continua',
                description: 'Acompañamiento permanente durante todo el proceso'
              },
              {
                title: 'Innovación Constante',
                description: 'Implementamos las últimas tendencias y tecnologías'
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-[#D4AF37] mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Liderazgo experimentado para guiar tu éxito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-6 relative inline-block">
                <img
                  src="/CEO.png"
                  alt="Director Ejecutivo"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl"
                />
                <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] opacity-20"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Director Ejecutivo</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">CEO</p>
              <p className="text-gray-600">
                Líder visionario con amplia experiencia en gestión empresarial y estrategia corporativa
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative inline-block">
                <img
                  src="/sam.jpeg"
                  alt="Director de Estrategia"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl"
                />
                <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] opacity-20"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Director de Estrategia</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">CSO</p>
              <p className="text-gray-600">
                Experto en planificación estratégica y desarrollo de negocios con visión innovadora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Impulsar tu Negocio?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales
          </p>
          <Link
            to="/contacto"
            className="bg-[#D4AF37] text-black px-10 py-5 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg"
          >
            Contactar Ahora
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;