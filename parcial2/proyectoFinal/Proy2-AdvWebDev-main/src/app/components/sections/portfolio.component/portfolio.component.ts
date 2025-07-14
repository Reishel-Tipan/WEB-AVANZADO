import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { 
  faCode, 
  faMobile, 
  faDesktop, 
  faShoppingCart, 
  faGraduationCap, 
  faHeart,
  faExternalLinkAlt,
  faRocket,
  faStar,
  faCalendar,
  faUsers,
  faEye,
  faArrowRight,
  faLaptopCode,
  faGamepad,
  faCogs,
  faCheckCircle,
  faLightbulb,
  faChartLine,
  faImages,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Proyecto {
  id: number;
  titulo: string;
  subtitulo?: string;
  descripcion: string;
  descripcionCompleta: string;
  imagen: string;
  tecnologias: string[];
  categoria: 'web' | 'mobile' | 'ecommerce' | 'educativo' | 'salud' | 'gaming';
  estado: 'Completado' | 'En Progreso' | 'En Pausa' | 'Mantenimiento';
  fechaLanzamiento: string;
  fecha?: string; // Para compatibilidad con el template
  cliente: string;
  visitasMensuales?: string;
  usuarios?: string;
  enlaceDemo?: string;
  enlaceRepositorio?: string;
  destacado: boolean;
  rol?: string;
  puntuacion: number;
  duracionDesarrollo: string;
  equipo: number;
  caracteristicas?: string[];
  enfoque?: string;
  desafios?: Array<{
    titulo: string;
    descripcion: string;
  }>;
  galeria?: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, FaIconComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  // Icons
  faCode = faCode;
  faMobile = faMobile;
  faDesktop = faDesktop;
  faShoppingCart = faShoppingCart;
  faGraduationCap = faGraduationCap;
  faHeart = faHeart;
  faExternalLinkAlt = faExternalLinkAlt;
  faGithub = faGithub;
  faRocket = faRocket;
  faStar = faStar;
  faCalendar = faCalendar;
  faUsers = faUsers;
  faEye = faEye;
  faArrowRight = faArrowRight;
  faLaptopCode = faLaptopCode;
  faGamepad = faGamepad;
  faCogs = faCogs;
  faCheckCircle = faCheckCircle;
  faLightbulb = faLightbulb;
  faChartLine = faChartLine;
  faImages = faImages;
  faTimes = faTimes;
  
  // Inyectar ChangeDetectorRef
  constructor(private cdr: ChangeDetectorRef) {}

  proyectoSeleccionado: Proyecto | null = null;
  categoriaActiva: string = 'todos';
  
  categorias = [
    { id: 'todos', nombre: 'Todos los Proyectos', icono: faLaptopCode },
    { id: 'web', nombre: 'Aplicaciones Web', icono: faDesktop },
    { id: 'mobile', nombre: 'Apps Móviles', icono: faMobile },
    { id: 'ecommerce', nombre: 'E-commerce', icono: faShoppingCart },
    { id: 'educativo', nombre: 'Educativo', icono: faGraduationCap },
    { id: 'salud', nombre: 'Salud & Bienestar', icono: faHeart },
    { id: 'gaming', nombre: 'Gaming', icono: faGamepad }
  ];

  proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: "EcoBuild Marketplace",
      descripcion: "Plataforma revolucionaria de construcción sostenible que conecta arquitectos, constructores y proveedores eco-friendly.",
      descripcionCompleta: "Una marketplace completa que revoluciona la industria de la construcción sostenible. Incluye sistema de cotizaciones inteligente, catálogo 3D de materiales, calculadora de huella de carbono y matching AI entre profesionales.",
      imagen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop&auto=format",
      tecnologias: ["Angular 18", "Node.js", "MongoDB", "Three.js", "WebGL", "Socket.io", "Stripe", "AWS S3"],
      categoria: "web",
      estado: "Completado",
      fechaLanzamiento: "2024-11",
      cliente: "GreenTech Solutions",
      visitasMensuales: "45K",
      usuarios: "12K+",
      enlaceDemo: "https://ecobuild-demo.noxdev.com",
      enlaceRepositorio: "https://github.com/noxdev/ecobuild",
      destacado: true,
      puntuacion: 4.9,
      duracionDesarrollo: "8 meses",
      equipo: 6
    },
    {
      id: 2,
      titulo: "FinanceFlow Dashboard",
      descripcion: "Dashboard inteligente para gestión financiera empresarial con análisis predictivo y automatización de procesos.",
      descripcionCompleta: "Plataforma web completa para gestión financiera empresarial con machine learning integrado. Incluye pronósticos de flujo de caja, análisis de riesgo automatizado, integración bancaria en tiempo real y reportes inteligentes.",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tecnologias: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      categoria: "web",
      estado: "Completado",
      fechaLanzamiento: "2024-10",
      cliente: "Corporate Finance Inc",
      visitasMensuales: "28K",
      usuarios: "8K+",
      enlaceDemo: "https://financeflow-demo.noxdev.com",
      destacado: false,
      puntuacion: 4.7,
      duracionDesarrollo: "6 meses",
      equipo: 4
    },
    {
      id: 3,
      titulo: "ArtGallery Virtual",
      descripcion: "Galería de arte virtual con experiencias inmersivas en 3D y marketplace de arte digital NFT.",
      descripcionCompleta: "Plataforma web revolucionaria que combina galerías virtuales 3D con marketplace de NFTs. Los usuarios pueden explorar exposiciones inmersivas, comprar arte digital y crear sus propias galerías personalizadas.",
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      tecnologias: ["Vue.js", "WebGL", "Three.js", "Solidity", "IPFS", "MetaMask", "Nuxt.js"],
      categoria: "web",
      estado: "En Progreso",
      fechaLanzamiento: "2025-02",
      cliente: "Digital Arts Collective",
      usuarios: "5K+ Beta",
      destacado: false,
      puntuacion: 4.5,
      duracionDesarrollo: "9 meses",
      equipo: 7
    },
    {
      id: 4,
      titulo: "MediConnect Pro",
      descripcion: "App móvil que conecta pacientes con especialistas médicos, incluyendo telemedicina y gestión de historiales.",
      descripcionCompleta: "Aplicación móvil integral para el sector salud que incluye videoconsultas HD, gestión de citas inteligente, recordatorios personalizados, chat seguro médico-paciente y sincronización con wearables para monitoreo en tiempo real.",
      imagen: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      tecnologias: ["React Native", "TypeScript", "Firebase", "WebRTC", "HealthKit", "HIPAA", "Redux"],
      categoria: "mobile",
      estado: "Completado",
      fechaLanzamiento: "2024-09",
      cliente: "HealthCare Innovations",
      usuarios: "25K+",
      enlaceDemo: "https://apps.apple.com/mediconnect-pro",
      destacado: true,
      puntuacion: 4.8,
      duracionDesarrollo: "10 meses",
      equipo: 5
    },
    {
      id: 5,
      titulo: "TravelBuddy AI",
      descripcion: "Asistente de viaje inteligente con planificación automática de itinerarios y recomendaciones personalizadas en tiempo real.",
      descripcionCompleta: "App móvil que utiliza inteligencia artificial para crear itinerarios de viaje personalizados. Incluye reconocimiento de ubicación, traducción en tiempo real, recomendaciones locales y sincronización offline.",
      imagen: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tecnologias: ["Flutter", "TensorFlow Lite", "Google Maps API", "Firebase", "ML Kit"],
      categoria: "mobile",
      estado: "Completado",
      fechaLanzamiento: "2024-07",
      cliente: "Wanderlust Technologies",
      usuarios: "40K+",
      enlaceDemo: "https://play.google.com/travelbuddy-ai",
      destacado: false,
      puntuacion: 4.6,
      duracionDesarrollo: "7 meses",
      equipo: 6
    },
    {
      id: 6,
      titulo: "SmartHome Controller",
      descripcion: "App unificada para control inteligente del hogar con automatización basada en IA y análisis energético.",
      descripcionCompleta: "Aplicación móvil que centraliza el control de dispositivos IoT del hogar. Incluye automatización inteligente, análisis de consumo energético, seguridad avanzada y control por voz multiidioma.",
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      tecnologias: ["React Native", "IoT", "AWS IoT", "Alexa Skills", "GraphQL", "MQTT"],
      categoria: "mobile",
      estado: "Mantenimiento",
      fechaLanzamiento: "2024-05",
      cliente: "SmartLiving Corp",
      usuarios: "15K+",
      destacado: false,
      puntuacion: 4.4,
      duracionDesarrollo: "8 meses",
      equipo: 5
    },
    {
      id: 7,
      titulo: "LuxuryCart Elite",
      descripcion: "E-commerce premium para productos de lujo con experiencia de compra inmersiva y personalización IA.",
      descripcionCompleta: "Tienda online de ultra-lujo con visualizador 3D de productos, recomendaciones IA personalizadas, consultor virtual, autenticación blockchain y experiencia de unboxing digital.",
      imagen: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tecnologias: ["Next.js", "Shopify Plus", "Prisma", "Stripe", "Three.js", "AI/ML", "Vercel"],
      categoria: "ecommerce",
      estado: "Completado",
      fechaLanzamiento: "2024-08",
      cliente: "Elite Luxury Brands",
      visitasMensuales: "120K",
      usuarios: "35K+",
      enlaceDemo: "https://luxurycart-elite.noxdev.com",
      destacado: true,
      puntuacion: 4.9,
      duracionDesarrollo: "6 meses",
      equipo: 4
    },
    {
      id: 8,
      titulo: "GreenMarket Organic",
      descripcion: "Marketplace sostenible para productos orgánicos locales con trazabilidad blockchain y entrega carbono neutral.",
      descripcionCompleta: "Plataforma e-commerce especializada en productos orgánicos con sistema de trazabilidad completo desde la granja hasta el consumidor. Incluye calculadora de huella de carbono y programa de compensación ambiental.",
      imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
      tecnologias: ["Svelte", "Supabase", "Blockchain", "Stripe", "Mapbox", "PWA"],
      categoria: "ecommerce",
      estado: "Completado",
      fechaLanzamiento: "2024-06",
      cliente: "Organic Farmers Alliance",
      visitasMensuales: "65K",
      usuarios: "22K+",
      enlaceDemo: "https://greenmarket-organic.com",
      destacado: false,
      puntuacion: 4.7,
      duracionDesarrollo: "5 meses",
      equipo: 3
    },
    {
      id: 9,
      titulo: "TechGear Store",
      descripcion: "E-commerce especializado en tecnología con configurador de PC personalizado y comparador inteligente de productos.",
      descripcionCompleta: "Tienda online de tecnología con herramientas avanzadas para comparación de productos, configurador de PC en 3D, calculadora de compatibilidad y sistema de reviews verificados con IA.",
      imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop",
      tecnologias: ["Angular", "Express.js", "MongoDB", "WebGL", "PayPal", "Elasticsearch"],
      categoria: "ecommerce",
      estado: "En Progreso",
      fechaLanzamiento: "2025-01",
      cliente: "Tech Retailers United",
      usuarios: "12K+ Beta",
      destacado: false,
      puntuacion: 4.3,
      duracionDesarrollo: "8 meses",
      equipo: 6
    },
    {
      id: 10,
      titulo: "EduSphere Virtual",
      descripcion: "Plataforma educativa inmersiva con realidad virtual para experiencias de aprendizaje revolucionarias.",
      descripcionCompleta: "Entorno educativo virtual que transporta a los estudiantes a experiencias inmersivas: desde explorar el antiguo Egipto hasta realizar experimentos químicos en laboratorios virtuales seguros.",
      imagen: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&h=600&fit=crop",
      tecnologias: ["Vue.js", "A-Frame", "WebXR", "Express.js", "PostgreSQL", "WebGL", "Three.js"],
      categoria: "educativo",
      estado: "Completado",
      fechaLanzamiento: "2024-06",
      cliente: "Future Education Corp",
      usuarios: "18K+",
      enlaceDemo: "https://edusphere-vr.noxdev.com",
      destacado: false,
      puntuacion: 4.6,
      duracionDesarrollo: "9 meses",
      equipo: 7
    },
    {
      id: 11,
      titulo: "CodeAcademy Pro",
      descripcion: "Plataforma educativa interactiva para aprender programación con ejercicios prácticos y mentorías en vivo.",
      descripcionCompleta: "Academia online de programación con editor de código integrado, compilador en la nube, sistema de evaluación automática y sesiones de mentoría en tiempo real con desarrolladores senior.",
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      tecnologias: ["React", "Monaco Editor", "Docker", "Kubernetes", "WebRTC", "Socket.io"],
      categoria: "educativo",
      estado: "Completado",
      fechaLanzamiento: "2024-09",
      cliente: "Code Education Institute",
      usuarios: "45K+",
      enlaceDemo: "https://codeacademy-pro.edu",
      destacado: true,
      puntuacion: 4.8,
      duracionDesarrollo: "11 meses",
      equipo: 8
    },
    {
      id: 12,
      titulo: "LanguageBridge AI",
      descripcion: "App educativa de idiomas con IA conversacional y realidad aumentada para práctica inmersiva.",
      descripcionCompleta: "Aplicación revolucionaria para aprendizaje de idiomas que utiliza IA para conversaciones naturales y realidad aumentada para contexto visual. Incluye reconocimiento de voz avanzado y corrección de pronunciación en tiempo real.",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      tecnologias: ["Flutter", "TensorFlow", "ARCore", "ARKit", "OpenAI API", "Cloud Speech"],
      categoria: "educativo",
      estado: "En Progreso",
      fechaLanzamiento: "2025-04",
      cliente: "Global Language Institute",
      usuarios: "8K+ Beta",
      destacado: false,
      puntuacion: 4.5,
      duracionDesarrollo: "10 meses",
      equipo: 6
    },
    {
      id: 13,
      titulo: "FitSync Pro",
      descripcion: "App de fitness con IA que crea rutinas personalizadas y conecta con entrenadores profesionales.",
      descripcionCompleta: "Aplicación de fitness inteligente que utiliza IA para crear rutinas personalizadas, análisis de forma en tiempo real con cámara, seguimiento nutricional automático y conexión con entrenadores certificados.",
      imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      tecnologias: ["Flutter", "TensorFlow", "Firebase", "Apple Health", "Google Fit", "ML Kit"],
      categoria: "salud",
      estado: "Mantenimiento",
      fechaLanzamiento: "2024-04",
      cliente: "FitTech Global",
      usuarios: "50K+",
      destacado: false,
      puntuacion: 4.5,
      duracionDesarrollo: "7 meses",
      equipo: 5
    },
    {
      id: 14,
      titulo: "MindfulnessPath",
      descripcion: "Plataforma integral de bienestar mental con meditación guiada, terapia virtual y análisis emocional IA.",
      descripcionCompleta: "Aplicación completa de salud mental que combina meditación guiada, terapia cognitivo-conductual virtual, análisis de estado emocional con IA y conexión con terapeutas profesionales certificados.",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      tecnologias: ["React Native", "TensorFlow", "WebRTC", "Firebase", "Stripe", "HealthKit"],
      categoria: "salud",
      estado: "Completado",
      fechaLanzamiento: "2024-08",
      cliente: "Wellness Technologies",
      usuarios: "75K+",
      enlaceDemo: "https://mindfulnesspath.com",
      destacado: true,
      puntuacion: 4.9,
      duracionDesarrollo: "12 meses",
      equipo: 9
    },
    {
      id: 15,
      titulo: "NutriTracker Smart",
      descripcion: "App nutricional inteligente con reconocimiento de alimentos por foto y planes personalizados por nutricionistas.",
      descripcionCompleta: "Aplicación avanzada de nutrición que utiliza computer vision para identificar alimentos, calcular macronutrientes automáticamente y generar planes alimenticios personalizados con asesoría profesional.",
      imagen: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
      tecnologias: ["React Native", "TensorFlow Lite", "Cloud Vision", "Firebase", "Stripe"],
      categoria: "salud",
      estado: "Completado",
      fechaLanzamiento: "2024-07",
      cliente: "Nutrition Plus Inc",
      usuarios: "32K+",
      destacado: false,
      puntuacion: 4.4,
      duracionDesarrollo: "6 meses",
      equipo: 4
    },
    {
      id: 16,
      titulo: "Cosmic Gaming Hub",
      descripcion: "Plataforma de gaming en la nube con streaming en tiempo real y comunidad de gamers integrada.",
      descripcionCompleta: "Hub de gaming revolucionario que permite streaming de juegos en la nube con latencia ultra-baja, sistema de torneos automatizado, chat de voz espacial, marketplace de items NFT y sistema de recompensas gamificado.",
      imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      tecnologias: ["Unity", "WebRTC", "Kubernetes", "Redis", "GraphQL", "Blockchain", "WebGL"],
      categoria: "gaming",
      estado: "En Progreso",
      fechaLanzamiento: "2025-03",
      cliente: "Cosmic Entertainment",
      usuarios: "8K+ Beta",
      destacado: true,
      puntuacion: 4.7,
      duracionDesarrollo: "12 meses",
      equipo: 8
    },
    {
      id: 17,
      titulo: "RetroPixel Arcade",
      descripcion: "Plataforma de juegos retro multijugador con tecnología blockchain para coleccionables digitales únicos.",
      descripcionCompleta: "Arcade virtual que recrea la experiencia de los videojuegos clásicos con funcionalidades modernas. Incluye multijugador global, NFTs de logros raros, torneos semanales y modo creador de niveles colaborativo.",
      imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
      tecnologias: ["Phaser.js", "Node.js", "Solidity", "Web3.js", "Socket.io", "MongoDB"],
      categoria: "gaming",
      estado: "Completado",
      fechaLanzamiento: "2024-10",
      cliente: "Retro Games Studio",
      usuarios: "28K+",
      enlaceDemo: "https://retropixel-arcade.com",
      destacado: false,
      puntuacion: 4.6,
      duracionDesarrollo: "8 meses",
      equipo: 6
    },
    {
      id: 18,
      titulo: "VR Quest Adventures",
      descripcion: "Experiencias de realidad virtual multijugador con mundos procedurales y narrativas adaptativas impulsadas por IA.",
      descripcionCompleta: "Plataforma de VR que genera mundos únicos para cada sesión usando algoritmos procedurales. Los jugadores exploran universos infinitos con historias que se adaptan a sus decisiones usando inteligencia artificial narrativa.",
      imagen: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&h=600&fit=crop&auto=format",
      tecnologias: ["Unity VR", "Oculus SDK", "ML.NET", "Photon", "C#", "Blender API"],
      categoria: "gaming",
      estado: "En Progreso",
      fechaLanzamiento: "2025-06",
      cliente: "Immersive Worlds Inc",
      usuarios: "3K+ Alpha",
      destacado: false,
      puntuacion: 4.8,
      duracionDesarrollo: "15 meses",
      equipo: 12
    }
  ];

  get proyectosFiltrados(): Proyecto[] {
    if (this.categoriaActiva === 'todos') {
      return this.proyectos;
    }
    return this.proyectos.filter(proyecto => proyecto.categoria === this.categoriaActiva);
  }

  get proyectosDestacados(): Proyecto[] {
    return this.proyectos.filter(proyecto => proyecto.destacado);
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaActiva = categoria;
    this.proyectoSeleccionado = null;
  }

  seleccionarProyecto(proyecto: Proyecto) {
    // Primero cerramos cualquier modal abierto
    this.proyectoSeleccionado = null;
    
    // Luego de un pequeño retraso, abrimos el nuevo modal
    setTimeout(() => {
      this.proyectoSeleccionado = proyecto;
      // Forzar la detección de cambios
      this.cdr.detectChanges();
      
      // Desplazarse al inicio del modal
      const modalElement = document.querySelector('.portfolio-details-overlay');
      if (modalElement) {
        modalElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  }

  /**
   * Cierra el modal de detalles del proyecto
   * @param event Evento opcional del clic
   */
  cerrarDetalles(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.proyectoSeleccionado = null;
  }

  getCategoriaIcon(categoria: string) {
    const iconMap: { [key: string]: any } = {
      'web': faDesktop,
      'mobile': faMobile,
      'ecommerce': faShoppingCart,
      'educativo': faGraduationCap,
      'salud': faHeart,
      'gaming': faGamepad
    };
    return iconMap[categoria] || faCode;
  }

  getCategoriaNombre(categoria: string): string {
    const nombres: { [key: string]: string } = {
      'web': 'Web',
      'mobile': 'Móvil',
      'ecommerce': 'E-commerce',
      'educativo': 'Educativo',
      'salud': 'Salud',
      'gaming': 'Gaming'
    };
    return nombres[categoria] || categoria;
  }

  getEstadoColor(estado: string): string {
    switch (estado) {
      case 'Completado':
        return 'completed';
      case 'En Progreso':
        return 'in-progress';
      case 'En Pausa':
        return 'paused';
      case 'Mantenimiento':
        return 'maintenance';
      default:
        return 'completed';
    }
  }

  getEstadoTexto(estado: string): string {
    // Ya que los estados ahora coinciden exactamente con el texto a mostrar,
    // simplemente retornamos el estado
    return estado;
  }

  generarEstrellas(puntuacion: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < Math.floor(puntuacion));
  }
}
