import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faLaptopCode, 
  faCogs, 
  faMobileAlt, 
  faShoppingCart, 
  faBuilding, 
  faBullseye,
  faPlayCircle,
  faClock,
  faCheck,
  faRocket,
  faClipboardList,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  icono: IconDefinition;
  caracteristicas: string[];
  tecnologias: string[];
  precio: string;
  duracion: string;
}

@Component({
  selector: 'app-servicios-component',
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  
  // Iconos de FontAwesome
  faPlayCircle = faPlayCircle;
  faClock = faClock;
  faCheck = faCheck;
  faRocket = faRocket;
  faCogs = faCogs;
  faClipboardList = faClipboardList;
  faTimes = faTimes;

  constructor(private router: Router) {}

  navegarAFormulario(): void {
    console.log('Método navegarAFormulario() llamado');
    this.servicioSeleccionado = null; // Cerrar el modal primero
    
    // Usar window.location.href para forzar una navegación completa
    setTimeout(() => {
      console.log('Redirigiendo a /formulario');
      window.location.href = '/formulario';
    }, 100);
  }
  
  servicios: Servicio[] = [
    {
      id: 1,
      titulo: 'Desarrollo Web Frontend',
      descripcion: 'Creamos interfaces de usuario modernas y responsivas que ofrecen experiencias excepcionales a tus usuarios.',
      icono: faLaptopCode,
      caracteristicas: [
        'Diseño responsivo y mobile-first',
        'Optimización de rendimiento',
        'Accesibilidad web (WCAG)',
        'SEO optimizado',
        'Progressive Web Apps (PWA)'
      ],
      tecnologias: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      precio: 'Desde $2,500',
      duracion: '4-8 semanas'
    },
    {
      id: 2,
      titulo: 'Desarrollo Web Backend',
      descripcion: 'Arquitecturas robustas y escalables que potencian el corazón de tu aplicación con las mejores prácticas.',
      icono: faCogs,
      caracteristicas: [
        'APIs RESTful y GraphQL',
        'Microservicios y arquitectura distribuida',
        'Bases de datos optimizadas',
        'Seguridad avanzada',
        'Monitoreo y logging'
      ],
      tecnologias: ['Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL'],
      precio: 'Desde $3,000',
      duracion: '6-10 semanas'
    },
    {
      id: 3,
      titulo: 'Aplicaciones Móviles',
      descripcion: 'Apps nativas e híbridas que funcionan perfectamente en iOS y Android con rendimiento óptimo.',
      icono: faMobileAlt,
      caracteristicas: [
        'Desarrollo nativo iOS/Android',
        'Apps híbridas multiplataforma',
        'Integración con APIs',
        'Notificaciones push',
        'App Store optimization'
      ],
      tecnologias: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
      precio: 'Desde $4,000',
      duracion: '8-12 semanas'
    },
    {
      id: 4,
      titulo: 'E-commerce Solutions',
      descripcion: 'Plataformas de comercio electrónico completas que maximizan tus ventas online con herramientas avanzadas.',
      icono: faShoppingCart,
      caracteristicas: [
        'Carrito de compras inteligente',
        'Pasarelas de pago seguras',
        'Gestión de inventario',
        'Analytics y reportes',
        'Marketing automation'
      ],
      tecnologias: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
      precio: 'Desde $3,500',
      duracion: '6-12 semanas'
    },
    {
      id: 5,
      titulo: 'Sistemas Empresariales',
      descripcion: 'ERP, CRM y sistemas personalizados que optimizan los procesos de negocio de tu empresa.',
      icono: faBuilding,
      caracteristicas: [
        'Gestión de recursos empresariales',
        'CRM personalizado',
        'Automatización de procesos',
        'Integraciones con terceros',
        'Dashboard ejecutivo'
      ],
      tecnologias: ['Angular', '.NET', 'Java Spring', 'Oracle', 'SAP'],
      precio: 'Desde $8,000',
      duracion: '12-20 semanas'
    },
    {
      id: 6,
      titulo: 'Consultoría Digital',
      descripcion: 'Asesoría estratégica en transformación digital para llevar tu negocio al siguiente nivel tecnológico.',
      icono: faBullseye,
      caracteristicas: [
        'Auditoría tecnológica',
        'Estrategia de transformación digital',
        'Arquitectura de soluciones',
        'Metodologías ágiles',
        'Capacitación del equipo'
      ],
      tecnologias: ['Scrum', 'DevOps', 'Cloud Computing', 'AI/ML', 'Blockchain'],
      precio: 'Desde $1,500',
      duracion: '2-6 semanas'
    }
  ];

  servicioSeleccionado: Servicio | null = null;

  seleccionarServicio(servicio: Servicio) {
    this.servicioSeleccionado = this.servicioSeleccionado?.id === servicio.id ? null : servicio;
  }

  // Cerrar detalles
  cerrarDetalles(): void {
    this.servicioSeleccionado = null;
  }

  // Cerrar el modal al hacer clic fuera del contenido
  cerrarModal(event: MouseEvent): void {
    // Solo cerrar si se hace clic directamente en el overlay (no en el contenido)
    if ((event.target as HTMLElement).classList.contains('service-details-overlay')) {
      this.cerrarDetalles();
    }
  }
}
