import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const NuestraEmpresa = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre <span className="text-[#D4AF37]">LD Holdings</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Construyendo el futuro empresarial con soluciones innovadoras
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6">Quiénes Somos</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                LD Holdings es una empresa líder en soluciones empresariales integrales, dedicada a proporcionar
                servicios de alta calidad en múltiples sectores. Con años de experiencia en el mercado, nos hemos
                consolidado como un socio estratégico confiable para empresas que buscan crecer y transformarse.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Nuestro enfoque se centra en entender las necesidades únicas de cada cliente y ofrecer soluciones
                personalizadas que generen resultados medibles y sostenibles. Trabajamos con un equipo de profesionales
                altamente capacitados que combinan experiencia técnica con visión estratégica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde asesoría financiera hasta desarrollo inmobiliario, nuestros servicios abarcan un amplio espectro
                de necesidades empresariales, permitiéndonos ser el aliado integral que tu negocio necesita para alcanzar
                sus objetivos más ambiciosos.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#c29d2e] p-8 rounded-xl text-white">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-white/90 leading-relaxed">
                  Proporcionar soluciones empresariales innovadoras y de alta calidad que impulsen el crecimiento
                  sostenible de nuestros clientes, superando sus expectativas a través de la excelencia en el servicio
                  y el compromiso con resultados tangibles.
                </p>
              </div>

              <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl text-white">
                <Eye className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser reconocidos como la empresa líder en soluciones empresariales integrales en Colombia y expandirnos
                  a nivel internacional, siendo el socio estratégico preferido de organizaciones que buscan transformación
                  y crecimiento sostenible.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-center">Nuestros Valores</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Integridad',
                    description: 'Actuamos con honestidad y transparencia en todas nuestras relaciones'
                  },
                  {
                    title: 'Excelencia',
                    description: 'Buscamos la más alta calidad en cada servicio que ofrecemos'
                  },
                  {
                    title: 'Innovación',
                    description: 'Adoptamos nuevas tecnologías y enfoques para mejores soluciones'
                  },
                  {
                    title: 'Compromiso',
                    description: 'Dedicación absoluta al éxito de nuestros clientes'
                  },
                  {
                    title: 'Trabajo en Equipo',
                    description: 'Colaboración y sinergia para lograr objetivos comunes'
                  },
                  {
                    title: 'Responsabilidad',
                    description: 'Asumimos nuestras acciones y cumplimos nuestras promesas'
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#D4AF37]">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-black to-gray-900 text-white p-12 rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">10+</div>
                  <div className="text-gray-300">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">500+</div>
                  <div className="text-gray-300">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">11</div>
                  <div className="text-gray-300">Áreas de Servicio</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">50+</div>
                  <div className="text-gray-300">Profesionales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuestraEmpresa;