import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Quote } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carrusel con las imágenes y textos proporcionados por el usuario
  const slides = [
    {
      image: "https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Soluciones Financieras Integrales",
      subtitle: "Convertimos tus decisiones financieras en crecimiento empresarial."
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Consultoría Estratégica",
      subtitle: "Ejecución de nuestra experiencia en planificación y estrategias para un crecimiento sostenible."
    },
    {
      image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Guía Corporativa",
      subtitle: "Acompañamiento en cada etapa de tu empresa."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Testimonios
  const testimonials = [
    {
      name: 'Carlos Méndez',
      company: 'CEO, TechSolutions',
      text: 'LD Holdings transformó completamente nuestra estrategia financiera. Su profesionalismo y experiencia son incomparables.',
      rating: 5
    },
    {
      name: 'María González',
      company: 'Directora, Innovar S.A.',
      text: 'El equipo de consultoría nos ayudó a optimizar nuestros procesos. Los resultados superaron nuestras expectativas.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      company: 'Fundador, StartupLab',
      text: 'Gracias a su asesoría, logramos escalar nuestro negocio de forma sostenible. Altamente recomendados.',
      rating: 5
    }
  ];

  // Casos de éxito - usando las imágenes del screenshot proporcionado
  const successCases = [
    {
      title: 'Proyecto A',
      description: 'Descripción breve del proyecto A.',
      image: 'https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Proyecto B',
      description: 'Descripción breve del proyecto B.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Proyecto C',
      description: 'Descripción breve del proyecto C.',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Blog corporativo - usando las imágenes del screenshot proporcionado
  const blogPosts = [
    {
      title: 'Artículo 1',
      description: 'Resumen del artículo 1.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Artículo 2',
      description: 'Resumen del artículo 2.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Artículo 3',
      description: 'Resumen del artículo 3.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      {/* Hero Carrusel */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden" data-testid="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`
              }}
            >
              <div className="container mx-auto px-4 h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8">{slide.subtitle}</p>
                  <Link
                    to="/servicios"
                    className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 inline-flex items-center"
                    data-testid="hero-cta"
                  >
                    Ver Servicios
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Controles */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300"
          data-testid="prev-slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300"
          data-testid="next-slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#D4AF37] w-8' : 'bg-white/50'
              }`}
              data-testid={`slide-indicator-${index}`}
            />
          ))}
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 bg-gray-50" data-testid="about-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              LD Holdings es una empresa líder en soluciones empresariales integrales, dedicada a proporcionar
              servicios de alta calidad en múltiples sectores. Con años de experiencia en el mercado, nos hemos
              consolidado como un socio estratégico confiable para empresas que buscan crecer y transformarse.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Nuestro enfoque se centra en entender las necesidades únicas de cada cliente y ofrecer soluciones
              personalizadas que generen resultados medibles y sostenibles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">10+</div>
              <div className="text-lg font-semibold mb-2">Años de Experiencia</div>
              <div className="text-gray-600 text-sm">Trayectoria comprobada</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
              <div className="text-lg font-semibold mb-2">Clientes Satisfechos</div>
              <div className="text-gray-600 text-sm">Resultados garantizados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">11</div>
              <div className="text-lg font-semibold mb-2">Áreas de Servicio</div>
              <div className="text-gray-600 text-sm">Soluciones integrales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white" data-testid="testimonials-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-gray-600">Testimonios de quienes confían en nosotros</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Quote className="text-[#D4AF37] mb-4" size={40} />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-[#D4AF37]" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-base">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-20 bg-gray-50" data-testid="team-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-lg text-gray-600">Liderazgo experimentado para guiar tu éxito</p>
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
              <h3 className="text-xl font-bold mb-2">Director Ejecutivo</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">CEO</p>
              <p className="text-gray-600 text-sm">
                Líder visionario con amplia experiencia en gestión empresarial
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
              <h3 className="text-xl font-bold mb-2">Director de Estrategia</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">CSO</p>
              <p className="text-gray-600 text-sm">
                Experto en planificación estratégica y desarrollo de negocios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-white" data-testid="success-cases-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successCases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{caseItem.title}</h3>
                  <p className="text-gray-600 text-sm">{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Corporativo */}
      <section className="py-20 bg-black" data-testid="blog-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Blog Corporativo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 text-sm">
                    Leer más
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20" data-testid="cta-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales
          </p>
          <Link
            to="/contacto"
            className="bg-[#D4AF37] text-black px-10 py-5 rounded-lg font-semibold hover:bg-[#c29d2e] transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg"
            data-testid="final-cta"
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
