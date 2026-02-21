import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

// Importar datos de servicios
const servicesData = {
  'asesoria-financiera': {
    title: 'Asesoría Financiera',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Nuestra asesoría financiera ofrece soluciones estratégicas personalizadas para maximizar la rentabilidad y sostenibilidad de tu empresa.',
    benefits: [
      'Optimización de recursos financieros.',
      'Planificación fiscal estratégica.',
      'Análisis de inversiones.',
      'Reducción de costos operativos.'
    ],
    process: [
      { step: 1, title: 'Evaluación Inicial', description: 'Análisis completo de tu situación financiera actual.' },
      { step: 2, title: 'Planificación Estratégica', description: 'Diseño de estrategias personalizadas según tus objetivos.' },
      { step: 3, title: 'Implementación', description: 'Ejecución del plan de acción con seguimiento constante.' },
      { step: 4, title: 'Optimización', description: 'Monitoreo de resultados y ajustes según sea necesario.' }
    ],
    whyChooseUs: 'Con más de 10 años de experiencia en asesoría financiera, nuestro equipo de expertos certificados te brinda soluciones personalizadas que generan resultados medibles.'
  },
  'asesoria-tributaria': {
    title: 'Asesoría Tributaria',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios especializados en cumplimiento tributario y optimización fiscal para mantener tu empresa al día.',
    benefits: [
      'Cumplimiento de obligaciones fiscales.',
      'Optimización de carga tributaria.',
      'Planificación fiscal estratégica.',
      'Prevención de sanciones y multas.'
    ],
    process: [
      { step: 1, title: 'Diagnóstico Fiscal', description: 'Revisión completa de tu situación tributaria.' },
      { step: 2, title: 'Planificación', description: 'Estrategia fiscal personalizada y eficiente.' },
      { step: 3, title: 'Implementación', description: 'Ejecución y presentación de declaraciones.' },
      { step: 4, title: 'Seguimiento', description: 'Monitoreo continuo y actualizaciones normativas.' }
    ],
    whyChooseUs: 'Nuestros especialistas en derecho tributario mantienen tu empresa en cumplimiento total mientras optimizan tu carga fiscal de manera legal y efectiva.'
  },
  'asesoria-legal': {
    title: 'Asesoría Legal',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Brindamos soporte jurídico integral para proteger tu empresa en todas las áreas legales y contractuales.',
    benefits: [
      'Revisión y redacción de contratos.',
      'Asesoría en derecho corporativo.',
      'Prevención de riesgos legales.',
      'Representación en procesos legales.'
    ],
    process: [
      { step: 1, title: 'Consulta inicial', description: 'Identificamos tus necesidades legales y posibles riesgos.' },
      { step: 2, title: 'Diseño de estrategia legal', description: 'Planteamos acciones preventivas y correctivas.' },
      { step: 3, title: 'Ejecución', description: 'Implementamos medidas y resolvemos conflictos legales.' },
      { step: 4, title: 'Seguimiento', description: 'Monitoreo continuo y actualización legal.' }
    ],
    whyChooseUs: 'Con más de 25 años de experiencia en derecho corporativo, protegemos tus intereses legales mientras facilitamos el crecimiento de tu negocio.'
  },
  'fondo-de-inversion': {
    title: 'Fondo de Inversión',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Gestión profesional de fondos de inversión diversificados diseñados para maximizar el retorno.',
    benefits: [
      'Diversificación profesional de cartera.',
      'Gestión activa por expertos.',
      'Acceso a inversiones institucionales.',
      'Reportes detallados de rendimiento.'
    ],
    process: [
      { step: 1, title: 'Perfil de Inversor', description: 'Evaluación de objetivos y tolerancia al riesgo.' },
      { step: 2, title: 'Selección de Fondo', description: 'Presentación de opciones alineadas a tu perfil.' },
      { step: 3, title: 'Inversión', description: 'Ejecución de la inversión con documentación completa.' },
      { step: 4, title: 'Gestión Activa', description: 'Administración profesional y reportes periódicos.' }
    ],
    whyChooseUs: 'Nuestros fondos han generado retornos consistentes superiores al 15% anual, con gestión activa y transparencia total.'
  },
  'financiacion-proyectos': {
    title: 'Financiación de Proyectos',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios completos de estructuración financiera y consecución de capital para proyectos empresariales.',
    benefits: [
      'Estructuración financiera profesional.',
      'Acceso a múltiples fuentes de financiamiento.',
      'Negociación de términos favorables.',
      'Acompañamiento en todo el proceso.'
    ],
    process: [
      { step: 1, title: 'Análisis del Proyecto', description: 'Evaluación de viabilidad y necesidades de capital.' },
      { step: 2, title: 'Estructuración', description: 'Diseño de estructura financiera óptima.' },
      { step: 3, title: 'Consecución', description: 'Búsqueda y negociación con financiadores.' },
      { step: 4, title: 'Cierre', description: 'Formalización y desembolso del financiamiento.' }
    ],
    whyChooseUs: 'Hemos estructurado y conseguido financiamiento para más de 100 proyectos por un monto superior a $50M.'
  },
  'obras-civiles': {
    title: 'Obras Civiles',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios completos de construcción y gestión de proyectos de infraestructura civil.',
    benefits: [
      'Gestión integral del proyecto.',
      'Cumplimiento de normas y regulaciones.',
      'Control de calidad estricto.',
      'Optimización de costos y tiempos.'
    ],
    process: [
      { step: 1, title: 'Planificación', description: 'Diseño y presupuesto detallado del proyecto.' },
      { step: 2, title: 'Permisos', description: 'Obtención de licencias y permisos necesarios.' },
      { step: 3, title: 'Construcción', description: 'Ejecución del proyecto con supervisión continua.' },
      { step: 4, title: 'Entrega', description: 'Inspección final y entrega del proyecto.' }
    ],
    whyChooseUs: 'Con más de 50 proyectos ejecutados exitosamente, garantizamos calidad, puntualidad y cumplimiento normativo.'
  },
  'remodelaciones': {
    title: 'Remodelaciones',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios completos de remodelación para transformar espacios residenciales y comerciales.',
    benefits: [
      'Diseño personalizado según tus necesidades.',
      'Materiales de alta calidad.',
      'Cumplimiento de plazos establecidos.',
      'Garantía en todos nuestros trabajos.'
    ],
    process: [
      { step: 1, title: 'Consulta Inicial', description: 'Reunión para entender tu visión y necesidades.' },
      { step: 2, title: 'Diseño y Cotización', description: 'Presentación de propuesta detallada y presupuesto.' },
      { step: 3, title: 'Ejecución', description: 'Inicio y desarrollo del proyecto de remodelación.' },
      { step: 4, title: 'Entrega Final', description: 'Inspección y entrega del proyecto terminado.' }
    ],
    whyChooseUs: 'Transformamos espacios con diseño innovador y ejecución impecable. El 100% de nuestros clientes recomiendan nuestros servicios.'
  },
  'certificaciones-electricas': {
    title: 'Certificaciones Eléctricas',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios de inspección y certificación eléctrica para garantizar el cumplimiento de normas.',
    benefits: [
      'Cumplimiento normativo garantizado.',
      'Inspecciones técnicas exhaustivas.',
      'Certificados válidos ante autoridades.',
      'Identificación de riesgos eléctricos.'
    ],
    process: [
      { step: 1, title: 'Solicitud', description: 'Programación de inspección técnica.' },
      { step: 2, title: 'Inspección', description: 'Revisión completa de instalaciones eléctricas.' },
      { step: 3, title: 'Informe', description: 'Reporte detallado con hallazgos.' },
      { step: 4, title: 'Certificación', description: 'Emisión de certificado oficial.' }
    ],
    whyChooseUs: 'Ingenieros certificados con más de 1000 inspecciones realizadas. Garantizamos cumplimiento normativo total.'
  },
  'modelado-3d': {
    title: 'Modelado 3D',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios de modelado 3D y renderizado fotorrealista para visualizar proyectos antes de construir.',
    benefits: [
      'Visualización realista del proyecto.',
      'Detección temprana de problemas.',
      'Facilita toma de decisiones.',
      'Modificaciones rápidas y económicas.'
    ],
    process: [
      { step: 1, title: 'Briefing', description: 'Recopilación de planos y especificaciones.' },
      { step: 2, title: 'Modelado', description: 'Creación del modelo 3D detallado.' },
      { step: 3, title: 'Renderizado', description: 'Generación de imágenes fotorrealistas.' },
      { step: 4, title: 'Entrega', description: 'Presentación de renders y recorridos virtuales.' }
    ],
    whyChooseUs: 'Utilizamos las últimas tecnologías en modelado 3D para crear visualizaciones que dan vida a tus proyectos.'
  },
  'comercializacion-materiales': {
    title: 'Comercialización de Materiales',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Distribución de materiales de construcción de las mejores marcas con precios competitivos.',
    benefits: [
      'Amplio catálogo de productos.',
      'Precios competitivos.',
      'Asesoría técnica especializada.',
      'Entrega puntual en obra.'
    ],
    process: [
      { step: 1, title: 'Cotización', description: 'Solicitud y envío de cotización detallada.' },
      { step: 2, title: 'Asesoría', description: 'Recomendación de productos óptimos.' },
      { step: 3, title: 'Pedido', description: 'Confirmación y procesamiento del pedido.' },
      { step: 4, title: 'Entrega', description: 'Despacho y entrega en tu obra.' }
    ],
    whyChooseUs: 'Somos distribuidores autorizados de las mejores marcas con más de 15 años de experiencia en el sector.'
  },
  'venta-gestion-inmuebles': {
    title: 'Venta y Gestión de Inmuebles',
    color: '#D4AF37',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Servicios completos de venta y gestión inmobiliaria para maximizar el valor de tus propiedades.',
    benefits: [
      'Valoraciones precisas de mercado.',
      'Marketing digital especializado.',
      'Gestión legal y documental completa.',
      'Asesoría en inversión inmobiliaria.'
    ],
    process: [
      { step: 1, title: 'Evaluación', description: 'Valoración profesional de la propiedad.' },
      { step: 2, title: 'Marketing', description: 'Estrategia de comercialización efectiva.' },
      { step: 3, title: 'Negociación', description: 'Gestión de ofertas y términos.' },
      { step: 4, title: 'Cierre', description: 'Trámites legales y entrega.' }
    ],
    whyChooseUs: 'Con más de 20 años en el mercado inmobiliario, hemos facilitado transacciones por más de $100M.'
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900" data-testid="service-detail-page">
      {/* Header con línea diagonal y imagen */}
      <section className="relative">
        {/* Línea diagonal superior */}
        <div 
          className="absolute top-0 left-0 right-0 h-4 z-20"
          style={{ backgroundColor: service.color }}
        />
        
        {/* Contenedor de imagen con overlay */}
        <div className="relative h-[400px] md:h-[450px]">
          {/* Línea diagonal decorativa */}
          <div 
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{
              background: `linear-gradient(165deg, ${service.color} 0%, ${service.color} 8%, transparent 8%, transparent 100%)`
            }}
          />
          
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
          </div>
          
          {/* Contenido del header */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12">
            <Link 
              to="/servicios" 
              className="inline-flex items-center text-white hover:text-[#D4AF37] mb-6 transition-colors duration-300 w-fit"
              data-testid="back-to-services"
            >
              <ArrowLeft className="mr-2" size={20} />
              Volver a Servicios
            </Link>
          </div>
        </div>
        
        {/* Línea diagonal inferior */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-4 z-20"
          style={{ backgroundColor: service.color }}
        />
      </section>

      {/* Título y descripción */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide"
            style={{ color: service.color }}
            data-testid="service-title"
          >
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Beneficios Principales */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-wide"
            style={{ color: service.color }}
          >
            Beneficios Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-5 rounded-lg border border-gray-600 bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                data-testid={`benefit-${index}`}
              >
                <p className="text-white text-center text-sm md:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        {/* Línea decorativa superior derecha */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1"
          style={{ backgroundColor: service.color }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-wide"
            style={{ color: service.color }}
          >
            Nuestro Proceso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg bg-gray-800"
                data-testid={`process-step-${index}`}
              >
                {/* Número circular */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4"
                  style={{ backgroundColor: service.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Línea decorativa inferior izquierda */}
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1"
          style={{ backgroundColor: service.color }}
        />
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide"
              style={{ color: service.color }}
            >
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {service.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: service.color }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        {/* Línea diagonal decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gray-900 transform -skew-y-2 origin-top-left" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿Interesado en {service.title}?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-800 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <Link
            to="/contacto"
            className="bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 inline-block text-lg"
            data-testid="contact-button"
          >
            Contactar Ahora
          </Link>
        </div>
        
        {/* Línea diagonal decorativa inferior */}
        <div className="absolute bottom-0 right-0 w-full h-16 bg-gray-900 transform skew-y-2 origin-bottom-right" />
      </section>
    </div>
  );
};

export default ServiceDetail;
