export const services = [
  {
    id: 1,
    title: 'Asesoría Financiera',
    slug: 'asesoria-financiera',
    description: 'Planificación financiera estratégica para maximizar el crecimiento de tu empresa',
    color: '#87CEEB',
    icon: '📊',
    image: null,
    // Contenido detallado
    detailedDescription: 'Aquí va la descripción detallada de Asesoría Financiera. Explica en profundidad qué incluye este servicio, cómo puede ayudar al cliente, y qué lo hace único.',
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
    whyChooseUs: 'Con más de 10 años de experiencia en asesoría financiera, nuestro equipo de expertos certificados te brinda soluciones personalizadas que generan resultados medibles. Trabajamos de cerca contigo para entender tus necesidades y objetivos específicos.'
  },
  {
    id: 2,
    title: 'Remodelación',
    slug: 'remodelacion',
    description: 'Servicios completos de remodelación para transformar espacios',
    color: '#D4AF37',
    icon: '🏗️',
    image: '/remodelacion.jpeg',
    detailedDescription: 'Aquí va la descripción detallada de Remodelación. Describe los tipos de proyectos que manejan, su experiencia, y cómo garantizan la calidad.',
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
    whyChooseUs: 'Contamos con un equipo especializado en remodelación residencial y comercial. Cada proyecto es único y lo tratamos con dedicación especial, garantizando resultados que superan las expectativas.'
  },
  {
    id: 3,
    title: 'Consultoría Empresarial',
    slug: 'consultoria-empresarial',
    description: 'Asesoría estratégica para optimizar procesos y aumentar la rentabilidad',
    color: '#2E8B57',
    icon: '💼',
    image: null,
    detailedDescription: 'Nuestra consultoría empresarial ofrece soluciones integrales diseñadas para transformar tu organización y maximizar su rendimiento. Nuestros consultores expertos analizan cada aspecto de tu negocio, desde la estructura organizacional hasta los procesos operativos, identificando oportunidades de mejora y desarrollando estrategias prácticas que generan resultados medibles. Trabajamos contigo para optimizar recursos, mejorar la eficiencia y establecer bases sólidas para el crecimiento sostenible.',
    benefits: [
      'Aumento de eficiencia operativa hasta en un 40%',
      'Reducción de costos innecesarios y optimización de recursos',
      'Mejora en la toma de decisiones estratégicas',
      'Implementación de mejores prácticas de la industria',
      'Desarrollo de ventajas competitivas sostenibles',
      'ROI medible con resultados tangibles'
    ],
    process: [
      { step: '1', title: 'Diagnóstico Empresarial', description: 'Evaluación completa de tu organización para identificar áreas críticas de oportunidad' },
      { step: '2', title: 'Diseño de Estrategia', description: 'Desarrollo de plan de acción personalizado con objetivos claros y alcanzables' },
      { step: '3', title: 'Implementación Guiada', description: 'Ejecución del plan con acompañamiento constante de nuestro equipo experto' },
      { step: '4', title: 'Seguimiento y Optimización', description: 'Medición continua de resultados y ajustes para garantizar el éxito sostenido' }
    ],
    whyChooseUs: 'Con más de 15 años de experiencia ayudando a empresas de diversos sectores, nuestro equipo de consultores ha demostrado resultados consistentes. No solo proporcionamos recomendaciones, sino que nos involucramos activamente en la implementación, asegurando que los cambios se traduzcan en mejoras reales. Nuestros clientes experimentan un promedio de 35% de mejora en eficiencia operativa dentro de los primeros 6 meses.'
  },
  {
    id: 4,
    title: 'Gestión de Proyectos',
    slug: 'gestion-proyectos',
    description: 'Administración profesional de proyectos de principio a fin',
    color: '#FF6347',
    icon: '📋',
    image: null,
    detailedDescription: 'Ofrecemos servicios completos de gestión de proyectos aplicando metodologías probadas y mejores prácticas de la industria. Nuestro enfoque garantiza que tus proyectos se completen a tiempo, dentro del presupuesto y con los estándares de calidad más altos. Desde la planificación inicial hasta el cierre del proyecto, nuestro equipo certificado maneja todos los aspectos, incluyendo gestión de recursos, comunicación con stakeholders, mitigación de riesgos y control de calidad.',
    benefits: [
      'Cumplimiento de plazos y presupuestos establecidos',
      'Reducción de riesgos y gestión proactiva de problemas',
      'Comunicación transparente con todos los involucrados',
      'Metodologías ágiles y tradicionales según necesidad',
      'Documentación completa y trazabilidad del proyecto',
      'Garantía de calidad en cada entregable'
    ],
    process: [
      { step: '1', title: 'Planificación Inicial', description: 'Definición de alcance, objetivos, cronograma y recursos necesarios' },
      { step: '2', title: 'Ejecución', description: 'Coordinación de equipos y tareas siguiendo el plan establecido' },
      { step: '3', title: 'Monitoreo y Control', description: 'Seguimiento continuo del progreso y ajustes en tiempo real' },
      { step: '4', title: 'Cierre y Evaluación', description: 'Entrega final, documentación y análisis de lecciones aprendidas' }
    ],
    whyChooseUs: 'Nuestros project managers certificados (PMP, PRINCE2) tienen un historial comprobado de más de 500 proyectos exitosos. Utilizamos herramientas de última generación y metodologías adaptadas a las necesidades específicas de cada proyecto. El 95% de nuestros proyectos se entregan dentro del plazo y presupuesto establecidos.'
  },
  {
    id: 5,
    title: 'Inversiones',
    slug: 'inversiones',
    description: 'Oportunidades de inversión estratégicas con alto retorno',
    color: '#4682B4',
    icon: '💰',
    image: null,
    detailedDescription: 'Facilitamos oportunidades de inversión cuidadosamente seleccionadas y analizadas para maximizar el retorno de tu capital. Nuestro equipo de analistas financieros realiza due diligence exhaustivo en cada oportunidad, evaluando riesgos, proyecciones y potencial de crecimiento. Ofrecemos acceso a inversiones en diversos sectores incluyendo bienes raíces, startups tecnológicas, proyectos de desarrollo y más, siempre con transparencia total y asesoría personalizada.',
    benefits: [
      'Cartera diversificada de oportunidades de inversión',
      'Análisis exhaustivo y due diligence profesional',
      'Acceso a inversiones normalmente reservadas para grandes inversores',
      'Transparencia total en riesgos y proyecciones',
      'Seguimiento continuo del rendimiento de inversiones',
      'Estrategias personalizadas según perfil de riesgo'
    ],
    process: [
      { step: '1', title: 'Perfil de Inversor', description: 'Evaluación de objetivos, horizonte temporal y tolerancia al riesgo' },
      { step: '2', title: 'Selección de Oportunidades', description: 'Presentación de opciones de inversión alineadas a tu perfil' },
      { step: '3', title: 'Due Diligence', description: 'Análisis detallado de la oportunidad seleccionada' },
      { step: '4', title: 'Inversión y Monitoreo', description: 'Ejecución de la inversión y seguimiento continuo del desempeño' }
    ],
    whyChooseUs: 'Con acceso a una red exclusiva de oportunidades y más de $50M gestionados exitosamente, nuestro equipo combina experiencia financiera con conocimiento profundo de mercados. Nuestros clientes han obtenido retornos promedio superiores al 15% anual en los últimos 5 años, con estrategias que balancean crecimiento y seguridad.'
  },
  {
    id: 6,
    title: 'Bienes Raíces',
    slug: 'bienes-raices',
    description: 'Compra, venta y administración de propiedades comerciales y residenciales',
    color: '#8B4513',
    icon: '🏢',
    image: null,
    detailedDescription: 'Ofrecemos servicios completos en el sector inmobiliario, desde la compra y venta de propiedades hasta la administración profesional de tu portafolio. Nuestro equipo de agentes certificados y administradores experimentados te guía en cada paso, asegurando transacciones seguras, valoraciones precisas y gestión eficiente de tus activos inmobiliarios. Ya sea que busques invertir, vender o administrar propiedades, proporcionamos el conocimiento del mercado y la experiencia necesaria.',
    benefits: [
      'Valoraciones precisas basadas en análisis de mercado real',
      'Red extensa de compradores y vendedores calificados',
      'Gestión completa de trámites legales y documentación',
      'Administración profesional de propiedades',
      'Maximización del retorno de inversión inmobiliaria',
      'Asesoría en estrategias de inversión inmobiliaria'
    ],
    process: [
      { step: '1', title: 'Consulta y Evaluación', description: 'Entendimiento de tus necesidades y objetivos inmobiliarios' },
      { step: '2', title: 'Búsqueda o Marketing', description: 'Localización de propiedades ideales o promoción de tu propiedad' },
      { step: '3', title: 'Negociación', description: 'Gestión de ofertas, contraofertas y términos de la transacción' },
      { step: '4', title: 'Cierre y Seguimiento', description: 'Finalización legal y soporte post-transacción' }
    ],
    whyChooseUs: 'Con más de 20 años en el mercado inmobiliario colombiano, hemos facilitado transacciones por más de $100M. Nuestro conocimiento profundo del mercado local, combinado con tecnología avanzada de análisis, nos permite ofrecer oportunidades exclusivas y asesoría estratégica que otros no pueden igualar.'
  },
  {
    id: 7,
    title: 'Desarrollo Inmobiliario',
    slug: 'desarrollo-inmobiliario',
    description: 'Proyectos de desarrollo inmobiliario de alta calidad',
    color: '#20B2AA',
    icon: '🏗️',
    image: null,
    detailedDescription: 'Gestionamos proyectos de desarrollo inmobiliario desde la conceptualización hasta la entrega final. Nuestro enfoque integral cubre la identificación de oportunidades, diseño arquitectónico, obtención de permisos, construcción y comercialización. Trabajamos con desarrollos residenciales, comerciales y de uso mixto, siempre enfocados en la calidad, sostenibilidad y rentabilidad. Cada proyecto es ejecutado con los más altos estándares de construcción y diseño innovador.',
    benefits: [
      'Proyectos con diseño arquitectónico de vanguardia',
      'Gestión integral de todas las fases del desarrollo',
      'Enfoque en sostenibilidad y eficiencia energética',
      'Control estricto de calidad en construcción',
      'Optimización de costos sin comprometer calidad',
      'Rentabilidad comprobada para inversionistas'
    ],
    process: [
      { step: '1', title: 'Análisis de Viabilidad', description: 'Estudio de mercado, ubicación y potencial del proyecto' },
      { step: '2', title: 'Diseño y Planificación', description: 'Desarrollo de planos, permisos y presupuesto detallado' },
      { step: '3', title: 'Construcción', description: 'Ejecución del proyecto con supervisión constante' },
      { step: '4', title: 'Comercialización y Entrega', description: 'Marketing del proyecto y entrega a propietarios' }
    ],
    whyChooseUs: 'Hemos completado más de 15 proyectos exitosos totalizando más de 50,000 m² construidos. Nuestro equipo multidisciplinario combina arquitectos, ingenieros y especialistas en construcción que garantizan proyectos innovadores, sostenibles y rentables. El 100% de nuestros proyectos se han entregado según lo planificado.'
  },
  {
    id: 8,
    title: 'Marketing Digital',
    slug: 'marketing-digital',
    description: 'Estrategias digitales para impulsar tu presencia en línea',
    color: '#9370DB',
    icon: '📱',
    image: null,
    detailedDescription: 'Diseñamos e implementamos estrategias de marketing digital completas que aumentan tu visibilidad, generan leads calificados y convierten prospectos en clientes. Desde SEO y SEM hasta gestión de redes sociales y content marketing, nuestro equipo crea campañas integradas que generan resultados medibles. Utilizamos datos y analytics para optimizar constantemente nuestras estrategias, asegurando el máximo ROI en cada inversión de marketing.',
    benefits: [
      'Aumento significativo en tráfico web calificado',
      'Mejora en posicionamiento SEO y visibilidad online',
      'Campañas publicitarias con ROI optimizado',
      'Gestión profesional de redes sociales',
      'Content marketing que genera engagement real',
      'Analytics y reportes detallados de rendimiento'
    ],
    process: [
      { step: '1', title: 'Auditoría Digital', description: 'Análisis de presencia actual y oportunidades de mejora' },
      { step: '2', title: 'Estrategia Personalizada', description: 'Diseño de plan de marketing alineado a objetivos de negocio' },
      { step: '3', title: 'Implementación', description: 'Ejecución de campañas y creación de contenido' },
      { step: '4', title: 'Optimización Continua', description: 'Análisis de resultados y mejora constante de estrategias' }
    ],
    whyChooseUs: 'Nuestro equipo de especialistas certificados en Google Ads, Facebook Blueprint y SEO ha ayudado a más de 100 empresas a triplicar su presencia digital. Combinamos creatividad con análisis de datos para crear campañas que no solo atraen atención, sino que generan conversiones reales y crecimiento sostenible.'
  },
  {
    id: 9,
    title: 'Recursos Humanos',
    slug: 'recursos-humanos',
    description: 'Gestión integral del talento humano en tu organización',
    color: '#DC143C',
    icon: '👥',
    image: null,
    detailedDescription: 'Proporcionamos soluciones completas de gestión de recursos humanos que fortalecen tu organización desde adentro. Nuestros servicios abarcan reclutamiento y selección, capacitación y desarrollo, evaluación de desempeño, gestión de nómina, clima organizacional y más. Entendemos que el talento es el activo más valioso de cualquier empresa, por eso diseñamos estrategias personalizadas que atraen, desarrollan y retienen a los mejores profesionales.',
    benefits: [
      'Procesos de reclutamiento optimizados y efectivos',
      'Programas de capacitación personalizados',
      'Mejora en clima laboral y satisfacción de empleados',
      'Reducción de rotación de personal',
      'Cumplimiento legal y normativo garantizado',
      'Sistemas de evaluación y desarrollo de talento'
    ],
    process: [
      { step: '1', title: 'Diagnóstico Organizacional', description: 'Evaluación de necesidades y situación actual de RRHH' },
      { step: '2', title: 'Diseño de Estrategia', description: 'Desarrollo de plan de gestión de talento personalizado' },
      { step: '3', title: 'Implementación de Procesos', description: 'Puesta en marcha de sistemas y procedimientos' },
      { step: '4', title: 'Gestión y Mejora Continua', description: 'Administración diaria y optimización de procesos' }
    ],
    whyChooseUs: 'Con experiencia gestionando el talento de empresas desde 10 hasta 500+ empleados, nuestro equipo de consultores certificados en RRHH aporta conocimiento profundo de legislación laboral colombiana y mejores prácticas internacionales. Ayudamos a crear culturas organizacionales fuertes que impulsan la productividad y satisfacción.'
  },
  {
    id: 10,
    title: 'Tecnología',
    slug: 'tecnologia',
    description: 'Soluciones tecnológicas innovadoras para tu negocio',
    color: '#00CED1',
    icon: '💻',
    image: null,
    detailedDescription: 'Desarrollamos e implementamos soluciones tecnológicas que transforman la forma en que operas tu negocio. Desde desarrollo de software personalizado hasta implementación de sistemas ERP, CRM y automatización de procesos, nuestro equipo de ingenieros y desarrolladores crea tecnología que resuelve problemas reales. Trabajamos con las últimas tecnologías y frameworks, siempre enfocados en escalabilidad, seguridad y user experience excepcional.',
    benefits: [
      'Soluciones de software personalizadas a tu medida',
      'Automatización de procesos para mayor eficiencia',
      'Integración de sistemas y plataformas',
      'Infraestructura cloud escalable y segura',
      'Soporte técnico continuo y mantenimiento',
      'Capacitación completa para tu equipo'
    ],
    process: [
      { step: '1', title: 'Análisis de Necesidades', description: 'Entendimiento profundo de tus procesos y desafíos tecnológicos' },
      { step: '2', title: 'Diseño de Solución', description: 'Arquitectura y propuesta técnica detallada' },
      { step: '3', title: 'Desarrollo e Implementación', description: 'Construcción y despliegue de la solución' },
      { step: '4', title: 'Soporte y Evolución', description: 'Mantenimiento continuo y mejoras incrementales' }
    ],
    whyChooseUs: 'Nuestro equipo de ingenieros certificados ha desarrollado más de 80 proyectos tecnológicos exitosos para empresas de diversos sectores. Utilizamos metodologías ágiles, código limpio y arquitecturas modernas para crear soluciones robustas que escalan con tu negocio. El 98% de nuestros clientes continúan trabajando con nosotros en mejoras continuas.'
  },
  {
    id: 11,
    title: 'Legal',
    slug: 'legal',
    description: 'Asesoría legal corporativa y empresarial',
    color: '#696969',
    icon: '⚖️',
    image: null,
    detailedDescription: 'Ofrecemos servicios legales especializados en derecho corporativo y empresarial. Nuestro equipo de abogados expertos proporciona asesoría integral en constitución de empresas, contratos comerciales, propiedad intelectual, cumplimiento normativo, resolución de conflictos y más. Nos enfocamos en proteger tus intereses legales mientras facilitamos el crecimiento de tu negocio, con un enfoque preventivo que minimiza riesgos y maximiza oportunidades.',
    benefits: [
      'Asesoría legal preventiva que reduce riesgos',
      'Experiencia en múltiples áreas del derecho empresarial',
      'Representación en negociaciones y litigios',
      'Cumplimiento normativo y regulatorio',
      'Protección de propiedad intelectual',
      'Respuesta rápida y comunicación clara'
    ],
    process: [
      { step: '1', title: 'Consulta Inicial', description: 'Análisis de tu situación legal y necesidades específicas' },
      { step: '2', title: 'Estrategia Legal', description: 'Desarrollo de plan de acción y recomendaciones' },
      { step: '3', title: 'Ejecución', description: 'Implementación de soluciones y representación legal' },
      { step: '4', title: 'Seguimiento', description: 'Monitoreo continuo y actualización según cambios legales' }
    ],
    whyChooseUs: 'Con más de 25 años de experiencia combinada en derecho corporativo colombiano, nuestros abogados han asesorado a empresas desde startups hasta corporaciones multinacionales. Mantenemos relaciones de largo plazo con nuestros clientes, convirtiéndonos en su departamento legal de confianza que entiende profundamente su negocio y objetivos.'
  }
];