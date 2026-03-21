/**
 * ============================================================
 *  CONFIGURACIÓN CENTRAL DEL SITIO WEB
 *  Modifica este archivo para personalizar el sitio para tu negocio.
 * ============================================================
 */

const CONFIG = {

  /* ── Información general del negocio ── */
  business: {
    name: "VÉLA",
    tagline: "Soluciones Profesionales · Resultados Excepcionales",
    description: "Ofrecemos servicios de primera calidad para hacer crecer tu negocio. Confía en expertos con más de 15 años de experiencia.",
    logo: "assets/images/logo.svg",
    year: 2026,
  },

  /* ── Colores del tema (se inyectan como CSS custom properties) ── */
  theme: {
    primaryColor: "#0369a1",      // Azul principal
    primaryLight: "#38bdf8",      // Azul claro
    primaryDark: "#0c4a6e",       // Azul oscuro
    accentColor: "#06b6d4",       // Cyan acento
    gradientStart: "#0ea5e9",     // Gradiente inicio
    gradientEnd: "#0369a1",       // Gradiente fin
    surfaceColor: "#f0f9ff",      // Fondo claro
    textPrimary: "#0f172a",       // Texto principal
    textSecondary: "#475569",     // Texto secundario
    white: "#ffffff",
  },

  /* ── WhatsApp ── */
  whatsapp: {
    number: "521234567890",       // Número con código de país, sin + ni espacios
    message: "¡Hola! Vi su sitio web y me gustaría obtener más información sobre sus servicios.",
  },

  /* ── Google Maps ── */
  maps: {
    embedQuery: "Centro+Histórico,Ciudad+de+México",
    zoom: 15,
  },

  /* ── Redes sociales ── */
  social: {
    facebook: "https://facebook.com/tu-negocio",
    instagram: "https://instagram.com/tu-negocio",
    tiktok: "https://tiktok.com/@tu-negocio",
    twitter: "",      // Dejar vacío para ocultar
    linkedin: "",
    youtube: "",
  },

  /* ── Contacto ── */
  contact: {
    email: "contacto@tunegocio.com",
    phone: "+52 55 1234 5678",
    address: "Av. Principal #123, Colonia Centro, Ciudad de México, CP 06000",
    hours: "Lunes a Viernes: 9:00 – 18:00 | Sábado: 10:00 – 14:00",
    formspreeId: "xjkvqzlp",     // ID de Formspree para el formulario
  },

  /* ── Navegación ── */
  navigation: [
    { label: "Inicio", href: "index.html", id: "nav-home" },
    { label: "Servicios", href: "servicios.html", id: "nav-services" },
    { label: "Nosotros", href: "nosotros.html", id: "nav-about" },
    { label: "Contacto", href: "contacto.html", id: "nav-contact" },
  ],

  /* ── Hero (Página de Inicio) ── */
  hero: {
    subtitle: "/ Servicios Profesionales · Calidad Garantizada",
    title: "IMPULSAMOS\nTU NEGOCIO\nAL ÉXITO",
    cta: { text: "Explorar Servicios", href: "#servicios-preview", icon: "→" },
  },

  /* ── Estadísticas ── */
  stats: [
    { value: "200+", label: "Proyectos Entregados" },
    { value: "99%", label: "Clientes Satisfechos" },
    { value: "15+", label: "Años de Experiencia" },
  ],

  /* ── Servicios ── */
  services: [
    {
      icon: "📊",
      title: "Consultoría Estratégica",
      description: "Analizamos tu negocio y diseñamos estrategias personalizadas para maximizar tu crecimiento y rentabilidad.",
      details: "Nuestro equipo de expertos realiza un diagnóstico completo de tu negocio, identificando oportunidades de mejora y diseñando un plan de acción adaptado a tus objetivos específicos.",
      price: "Desde $2,500 MXN",
    },
    {
      icon: "🎨",
      title: "Diseño y Branding",
      description: "Creamos identidades visuales únicas que conectan con tu audiencia y posicionan tu marca.",
      details: "Desarrollamos desde logotipos y papelería hasta manuales de marca completos, asegurando coherencia visual en todos los puntos de contacto con tus clientes.",
      price: "Desde $3,000 MXN",
    },
    {
      icon: "💻",
      title: "Desarrollo Web",
      description: "Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
      details: "Diseñamos y desarrollamos sitios web responsivos, optimizados para SEO y con las mejores prácticas de rendimiento y accesibilidad.",
      price: "Desde $5,000 MXN",
    },
    {
      icon: "📱",
      title: "Marketing Digital",
      description: "Campañas efectivas en redes sociales y motores de búsqueda para aumentar tu alcance.",
      details: "Gestionamos tus campañas de publicidad digital en Google Ads, Facebook Ads e Instagram, optimizando tu inversión para obtener el máximo retorno.",
      price: "Desde $4,000 MXN",
    },
    {
      icon: "📸",
      title: "Fotografía Profesional",
      description: "Imágenes de alta calidad para tu negocio, productos y redes sociales.",
      details: "Sesiones fotográficas profesionales para productos, instalaciones, equipo de trabajo y contenido para redes sociales.",
      price: "Desde $1,800 MXN",
    },
    {
      icon: "🔧",
      title: "Soporte Técnico",
      description: "Mantenimiento y soporte continuo para que tu presencia digital funcione sin interrupciones.",
      details: "Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, respaldos, monitoreo de seguridad y soporte prioritario.",
      price: "Desde $1,500 MXN/mes",
    },
  ],

  /* ── Por qué elegirnos ── */
  whyUs: [
    { icon: "⚡", title: "Rapidez", description: "Entregamos resultados en tiempo récord sin comprometer la calidad." },
    { icon: "🏆", title: "Calidad Premium", description: "Cada proyecto refleja nuestro compromiso con la excelencia y los detalles." },
    { icon: "💰", title: "Precio Justo", description: "Soluciones accesibles para pequeños negocios con presupuesto inteligente." },
    { icon: "🤝", title: "Trato Personal", description: "Acompañamiento cercano en cada paso del proceso para tu total satisfacción." },
  ],

  /* ── Testimonios ── */
  testimonials: [
    {
      name: "María García",
      role: "Dueña de Café Aroma",
      text: "Transformaron completamente la imagen de mi cafetería. Ahora recibo el triple de clientes gracias a su estrategia digital.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: "Director de TechStart",
      text: "Profesionalismo y creatividad en cada detalle. El sitio web que nos crearon superó todas nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora de Bella Estética",
      text: "Desde que implementaron nuestra estrategia de marketing, nuestras reservaciones en línea aumentaron un 200%.",
      rating: 5,
    },
    {
      name: "Roberto Sánchez",
      role: "Gerente de AutoPro",
      text: "Excelente servicio y atención personalizada. Son socios estratégicos para cualquier negocio que quiera crecer.",
      rating: 4,
    },
  ],

  /* ── Galería de fotos ── */
  gallery: [
    { src: "assets/images/gallery/desistemSS.PNG", alt: "Proyecto Desistem" },
    { src: "assets/images/gallery/humoRosaSS.PNG", alt: "Proyecto Humo Rosa" },
    { src: "assets/images/gallery/staticWebSS.PNG", alt: "Proyecto Static Web" },
    { src: "assets/images/gallery/tokyoSushiSS.PNG", alt: "Proyecto Tokyo Sushi" },
  ],

  /* ── Nosotros ── */
  about: {
    history: "Con más de 15 años de experiencia, nos hemos consolidado como líderes en soluciones integrales para pequeños y medianos negocios. Nuestra pasión por la innovación y el compromiso con la excelencia nos han permitido transformar más de 200 negocios en historias de éxito.",
    mission: "Empoderar a los pequeños negocios con herramientas digitales de primer nivel, haciéndolas accesibles y efectivas para impulsar su crecimiento sostenible.",
    vision: "Ser el socio estratégico preferido de los emprendedores, reconocidos por nuestra calidad, innovación y el impacto positivo en cada negocio que acompañamos.",
    team: [
      { name: "Alejandro Reyes", role: "Director General", photo: "assets/images/team-1.jpg" },
      { name: "Laura Méndez", role: "Directora Creativa", photo: "assets/images/team-2.jpg" },
      { name: "Daniel Torres", role: "Líder de Desarrollo", photo: "assets/images/team-3.jpg" },
    ],
    values: [
      "Innovación Constante",
      "Compromiso con el Cliente",
      "Integridad y Transparencia",
      "Excelencia en cada Detalle",
    ],
  },

  /* ── Cookie banner ── */
  cookies: {
    message: "Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.",
    acceptText: "Aceptar",
    rejectText: "Rechazar",
  },

  /* ── SEO ── */
  seo: {
    siteUrl: "https://www.tunegocio.com",
    ogImage: "assets/images/og-image.jpg",
    keywords: "servicios profesionales, consultoría, diseño web, marketing digital, pequeños negocios",
  },
};
