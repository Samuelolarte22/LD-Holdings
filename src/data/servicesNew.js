import { 
  TrendingUp, 
  FileText, 
  Scale, 
  PiggyBank, 
  DollarSign,
  Building2,
  Hammer,
  Zap,
  Box,
  ShoppingCart,
  Home
} from 'lucide-react';

// Servicios Financieros y Legales
export const financialServices = [
  {
    id: 1,
    title: 'Asesoría Financiera',
    slug: 'asesoria-financiera',
    description: 'Planificación financiera estratégica para maximizar el crecimiento de tu empresa',
    color: '#3B82F6',
    icon: TrendingUp,
    category: 'financial',
    detailedDescription: 'Nuestra asesoría financiera ofrece soluciones estratégicas personalizadas para maximizar la rentabilidad y sostenibilidad de tu empresa. Contamos con expertos certificados que analizan tu situación financiera actual y diseñan planes de acción específicos para alcanzar tus objetivos empresariales.',
    benefits: [
      'Optimización de recursos financieros',
      'Planificación fiscal estratégica',
      'Análisis de inversiones y rentabilidad',
      'Reducción de costos operativos',
      'Mejora en la toma de decisiones financieras',
      'Cumplimiento normativo y regulatorio'
    ],
    process: [
      { step: '1', title: 'Evaluación Inicial', description: 'Análisis completo de tu situación financiera actual' },
      { step: '2', title: 'Planificación Estratégica', description: 'Diseño de estrategias personalizadas según tus objetivos' },
      { step: '3', title: 'Implementación', description: 'Ejecución del plan de acción con seguimiento constante' },
      { step: '4', title: 'Optimización Continua', description: 'Monitoreo de resultados y ajustes según sea necesario' }
    ],
    whyChooseUs: 'Con más de 10 años de experiencia en asesoría financiera, nuestro equipo de expertos certificados te brinda soluciones personalizadas que generan resultados medibles.'
  },
  {
    id: 2,
    title: 'Asesoría Tributaria',
    slug: 'asesoria-tributaria',
    description: 'Cumplimiento normativo y estrategias fiscales óptimas para tu empresa',
    color: '#3B82F6',
    icon: FileText,
    category: 'financial',
    detailedDescription: 'Servicios especializados en cumplimiento tributario y optimización fiscal. Mantenemos tu empresa al día con todas las obligaciones fiscales mientras buscamos oportunidades legales para reducir tu carga tributaria.',
    benefits: [
      'Cumplimiento de todas las obligaciones fiscales',
      'Optimización de la carga tributaria',
      'Planificación fiscal estratégica',
      'Representación ante autoridades fiscales',
      'Actualización constante normativa',
      'Prevención de sanciones y multas'
    ],
    process: [
      { step: '1', title: 'Diagnóstico Fiscal', description: 'Revisión completa de tu situación tributaria' },
      { step: '2', title: 'Planificación', description: 'Estrategia fiscal personalizada y eficiente' },
      { step: '3', title: 'Implementación', description: 'Ejecución y presentación de declaraciones' },
      { step: '4', title: 'Seguimiento', description: 'Monitoreo continuo y actualizaciones normativas' }
    ],
    whyChooseUs: 'Nuestros especialistas en derecho tributario mantienen tu empresa en cumplimiento total mientras optimizan tu carga fiscal de manera legal y efectiva.'
  },
  {
    id: 3,
    title: 'Asesoría Legal',
    slug: 'asesoria-legal',
    description: 'Soporte jurídico integral para proteger tu empresa en todas las áreas legales y contractuales',
    color: '#3B82F6',
    icon: Scale,
    category: 'financial',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200',
    detailedDescription: 'Brindamos soporte jurídico integral para proteger tu empresa en todas las áreas legales y contractuales. Nuestro equipo de abogados expertos proporciona asesoría preventiva y representación legal en múltiples áreas del derecho empresarial.',
    benefits: [
      'Revisión y redacción de contratos',
      'Asesoría en derecho corporativo',
      'Prevención de riesgos legales',
      'Representación en procesos legales',
      'Cumplimiento normativo garantizado',
      'Protección de propiedad intelectual'
    ],
    process: [
      { step: '1', title: 'Consulta Inicial', description: 'Identificamos tus necesidades legales y objetivos' },
      { step: '2', title: 'Diseño de Estrategia Legal', description: 'Planteamos acciones preventivas y correctivas' },
      { step: '3', title: 'Ejecución', description: 'Implementamos medidas y resolvemos conflictos legales' },
      { step: '4', title: 'Seguimiento', description: 'Monitoreo continuo y actualización legal' }
    ],
    whyChooseUs: 'Con más de 25 años de experiencia en derecho corporativo, protegemos tus intereses legales mientras facilitamos el crecimiento de tu negocio.'
  },
  {
    id: 4,
    title: 'Fondo de Inversión',
    slug: 'fondo-de-inversion',
    description: 'Oportunidades de inversión diversificadas con gestión profesional y alto potencial',
    color: '#3B82F6',
    icon: PiggyBank,
    category: 'financial',
    detailedDescription: 'Gestión profesional de fondos de inversión diversificados diseñados para maximizar el retorno mientras gestionamos el riesgo. Accede a oportunidades de inversión normalmente reservadas para grandes inversionistas.',
    benefits: [
      'Diversificación profesional de cartera',
      'Gestión activa por expertos certificados',
      'Acceso a inversiones institucionales',
      'Transparencia total en operaciones',
      'Reportes detallados de rendimiento',
      'Estrategias adaptadas a tu perfil'
    ],
    process: [
      { step: '1', title: 'Perfil de Inversor', description: 'Evaluación de objetivos y tolerancia al riesgo' },
      { step: '2', title: 'Selección de Fondo', description: 'Presentación de opciones alineadas a tu perfil' },
      { step: '3', title: 'Inversión', description: 'Ejecución de la inversión con documentación completa' },
      { step: '4', title: 'Gestión Activa', description: 'Administración profesional y reportes periódicos' }
    ],
    whyChooseUs: 'Nuestros fondos han generado retornos consistentes superiores al 15% anual, con gestión activa y transparencia total.'
  },
  {
    id: 5,
    title: 'Financiación de Proyectos',
    slug: 'financiacion-proyectos',
    description: 'Estructuración y consecución de capital para proyectos de desarrollo empresarial',
    color: '#3B82F6',
    icon: DollarSign,
    category: 'financial',
    detailedDescription: 'Servicios completos de estructuración financiera y consecución de capital para proyectos empresariales. Conectamos tu proyecto con las fuentes de financiamiento más adecuadas.',
    benefits: [
      'Estructuración financiera profesional',
      'Acceso a múltiples fuentes de financiamiento',
      'Negociación de términos favorables',
      'Due diligence y análisis de viabilidad',
      'Acompañamiento en todo el proceso',
      'Optimización de costos financieros'
    ],
    process: [
      { step: '1', title: 'Análisis del Proyecto', description: 'Evaluación de viabilidad y necesidades de capital' },
      { step: '2', title: 'Estructuración', description: 'Diseño de estructura financiera óptima' },
      { step: '3', title: 'Consecución', description: 'Búsqueda y negociación con financiadores' },
      { step: '4', title: 'Cierre', description: 'Formalización y desembolso del financiamiento' }
    ],
    whyChooseUs: 'Hemos estructurado y conseguido financiamiento para más de 100 proyectos por un monto superior a $50M.'
  }
];

// Construcción y Obras
export const constructionServices = [
  {
    id: 6,
    title: 'Obras Civiles',
    slug: 'obras-civiles',
    description: 'Construcción y gestión profesional de proyectos de infraestructura civil',
    color: '#10B981',
    icon: Building2,
    category: 'construction',
    detailedDescription: 'Servicios completos de construcción y gestión de proyectos de infraestructura civil. Desde edificaciones hasta obras de infraestructura, ejecutamos proyectos con los más altos estándares de calidad.',
    benefits: [
      'Gestión integral del proyecto',
      'Cumplimiento de normas y regulaciones',
      'Control de calidad estricto',
      'Optimización de costos y tiempos',
      'Personal técnico certificado',
      'Garantía en todos los trabajos'
    ],
    process: [
      { step: '1', title: 'Planificación', description: 'Diseño y presupuesto detallado del proyecto' },
      { step: '2', title: 'Permisos', description: 'Obtención de licencias y permisos necesarios' },
      { step: '3', title: 'Construcción', description: 'Ejecución del proyecto con supervisión continua' },
      { step: '4', title: 'Entrega', description: 'Inspección final y entrega del proyecto' }
    ],
    whyChooseUs: 'Con más de 50 proyectos ejecutados exitosamente, garantizamos calidad, puntualidad y cumplimiento normativo.'
  },
  {
    id: 7,
    title: 'Remodelaciones',
    slug: 'remodelaciones',
    description: 'Transformación de espacios residenciales y comerciales con diseño innovador',
    color: '#10B981',
    icon: Hammer,
    category: 'construction',
    image: '/remodelacion.jpeg',
    detailedDescription: 'Servicios completos de remodelación para transformar espacios residenciales y comerciales. Combinamos diseño innovador con ejecución profesional para crear ambientes que superan expectativas.',
    benefits: [
      'Diseño personalizado según tus necesidades',
      'Materiales de alta calidad',
      'Cumplimiento de plazos establecidos',
      'Presupuestos transparentes',
      'Garantía en todos nuestros trabajos',
      'Equipo profesional certificado'
    ],
    process: [
      { step: '1', title: 'Consulta Inicial', description: 'Reunión para entender tu visión y necesidades' },
      { step: '2', title: 'Diseño y Cotización', description: 'Presentación de propuesta detallada y presupuesto' },
      { step: '3', title: 'Ejecución', description: 'Inicio y desarrollo del proyecto de remodelación' },
      { step: '4', title: 'Entrega Final', description: 'Inspección y entrega del proyecto terminado' }
    ],
    whyChooseUs: 'Transformamos espacios con diseño innovador y ejecución impecable. El 100% de nuestros clientes recomiendan nuestros servicios.'
  },
  {
    id: 8,
    title: 'Certificaciones Eléctricas',
    slug: 'certificaciones-electricas',
    description: 'Inspección, certificación y cumplimiento de normas eléctricas vigentes',
    color: '#10B981',
    icon: Zap,
    category: 'construction',
    detailedDescription: 'Servicios de inspección y certificación eléctrica para garantizar el cumplimiento de normas y la seguridad de tus instalaciones. Contamos con ingenieros certificados y equipos de última generación.',
    benefits: [
      'Cumplimiento normativo garantizado',
      'Inspecciones técnicas exhaustivas',
      'Certificados válidos ante autoridades',
      'Identificación de riesgos eléctricos',
      'Recomendaciones de mejora',
      'Servicio rápido y confiable'
    ],
    process: [
      { step: '1', title: 'Solicitud', description: 'Programación de inspección técnica' },
      { step: '2', title: 'Inspección', description: 'Revisión completa de instalaciones eléctricas' },
      { step: '3', title: 'Informe', description: 'Reporte detallado con hallazgos' },
      { step: '4', title: 'Certificación', description: 'Emisión de certificado oficial' }
    ],
    whyChooseUs: 'Ingenieros certificados con más de 1000 inspecciones realizadas. Garantizamos cumplimiento normativo total.'
  },
  {
    id: 9,
    title: 'Modelado 3D',
    slug: 'modelado-3d',
    description: 'Visualización realista de proyectos mediante modelado y renderizado 3D profesional',
    color: '#10B981',
    icon: Box,
    category: 'construction',
    detailedDescription: 'Servicios de modelado 3D y renderizado fotorrealista para visualizar proyectos antes de construir. Utilizamos software profesional y técnicas avanzadas para crear representaciones precisas.',
    benefits: [
      'Visualización realista del proyecto',
      'Detección temprana de problemas',
      'Facilita toma de decisiones',
      'Impresiona a clientes e inversionistas',
      'Modificaciones rápidas y económicas',
      'Integración con planos técnicos'
    ],
    process: [
      { step: '1', title: 'Briefing', description: 'Recopilación de planos y especificaciones' },
      { step: '2', title: 'Modelado', description: 'Creación del modelo 3D detallado' },
      { step: '3', title: 'Renderizado', description: 'Generación de imágenes fotorrealistas' },
      { step: '4', title: 'Entrega', description: 'Presentación de renders y recorridos virtuales' }
    ],
    whyChooseUs: 'Utilizamos las últimas tecnologías en modelado 3D para crear visualizaciones que dan vida a tus proyectos.'
  },
  {
    id: 10,
    title: 'Comercialización de Materiales',
    slug: 'comercializacion-materiales',
    description: 'Distribución de materiales de construcción de alta calidad con precios competitivos',
    color: '#10B981',
    icon: ShoppingCart,
    category: 'construction',
    detailedDescription: 'Distribución de materiales de construcción de las mejores marcas con precios competitivos. Ofrecemos servicio integral desde la asesoría hasta la entrega en obra.',
    benefits: [
      'Amplio catálogo de productos',
      'Precios competitivos y descuentos por volumen',
      'Asesoría técnica especializada',
      'Entrega puntual en obra',
      'Materiales certificados',
      'Financiamiento disponible'
    ],
    process: [
      { step: '1', title: 'Cotización', description: 'Solicitud y envío de cotización detallada' },
      { step: '2', title: 'Asesoría', description: 'Recomendación de productos óptimos' },
      { step: '3', title: 'Pedido', description: 'Confirmación y procesamiento del pedido' },
      { step: '4', title: 'Entrega', description: 'Despacho y entrega en tu obra' }
    ],
    whyChooseUs: 'Somos distribuidores autorizados de las mejores marcas con más de 15 años de experiencia en el sector.'
  }
];

// Gestión Inmobiliaria
export const realEstateServices = [
  {
    id: 11,
    title: 'Venta y Gestión de Inmuebles',
    slug: 'venta-gestion-inmuebles',
    description: 'Comercialización y administración integral de propiedades residenciales y comerciales',
    color: '#8B5CF6',
    icon: Home,
    category: 'realestate',
    detailedDescription: 'Servicios completos de venta y gestión inmobiliaria. Desde la comercialización hasta la administración de tu portafolio de propiedades, ofrecemos soluciones integrales respaldadas por conocimiento profundo del mercado.',
    benefits: [
      'Valoraciones precisas de mercado',
      'Marketing digital especializado',
      'Red amplia de compradores calificados',
      'Gestión legal y documental completa',
      'Administración de propiedades',
      'Asesoría en inversión inmobiliaria'
    ],
    process: [
      { step: '1', title: 'Evaluación', description: 'Valoración profesional de la propiedad' },
      { step: '2', title: 'Marketing', description: 'Estrategia de comercialización efectiva' },
      { step: '3', title: 'Negociación', description: 'Gestión de ofertas y términos' },
      { step: '4', title: 'Cierre', description: 'Trámites legales y entrega' }
    ],
    whyChooseUs: 'Con más de 20 años en el mercado inmobiliario colombiano, hemos facilitado transacciones por más de $100M.'
  }
];

export const allServices = [
  ...financialServices,
  ...constructionServices,
  ...realEstateServices
];