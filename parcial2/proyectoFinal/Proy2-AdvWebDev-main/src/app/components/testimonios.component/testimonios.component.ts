import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

export interface Testimonio {
  nombre: string;
  cargo: string;
  empresa: string;
  imagen: string;
  texto: string;
  calificacion: number;
  fecha: string;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TestimoniosComponent implements OnInit, OnDestroy {
  @ViewChild('testimonioContainer') testimonioContainer!: ElementRef;
  
  testimonioActual: number = 0;
  isAnimating: boolean = false;
  private rotationInterval: any;
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  testimonios: Testimonio[] = [
    {
      nombre: 'María González',
      cargo: 'CEO',
      empresa: 'TechSolutions',
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      texto: 'Excelente servicio y atención al cliente. Nuestras ventas han aumentado un 50% desde que implementamos sus soluciones. La plataforma es intuitiva y el equipo de soporte siempre está disponible para ayudarnos.',
      calificacion: 5,
      fecha: '15 de Marzo, 2023'
    },
    {
      nombre: 'Carlos Mendoza',
      cargo: 'Director de Marketing',
      empresa: 'InnovaCorp',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      texto: 'El equipo de desarrollo es increíble. Entienden perfectamente nuestras necesidades y ofrecen soluciones a medida que han superado nuestras expectativas. La comunicación ha sido excelente en todo momento.',
      calificacion: 5,
      fecha: '2 de Abril, 2023'
    },
    {
      nombre: 'Ana Torres',
      cargo: 'Gerente de Proyectos',
      empresa: 'DigitalMind',
      imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      texto: 'Su enfoque en la experiencia del usuario es excepcional. Nuestros clientes están encantados con la nueva plataforma. Hemos visto un aumento significativo en la retención de usuarios desde el lanzamiento.',
      calificacion: 4,
      fecha: '22 de Abril, 2023'
    },
    {
      nombre: 'Javier Ruiz',
      cargo: 'CTO',
      empresa: 'NextGen Tech',
      imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      texto: 'La escalabilidad de sus soluciones nos ha permitido crecer sin preocupaciones técnicas. Muy recomendables para empresas en expansión que buscan una base tecnológica sólida y flexible.',
      calificacion: 5,
      fecha: '5 de Mayo, 2023'
    },
    {
      nombre: 'Laura Díaz',
      cargo: 'Directora de Operaciones',
      empresa: 'Global Connect',
      imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      texto: 'Soporte técnico excepcional y tiempos de respuesta rápidos. Un verdadero socio tecnológico que se preocupa por nuestro éxito tanto como nosotros. La implementación fue impecable y dentro del plazo establecido.',
      calificacion: 5,
      fecha: '18 de Mayo, 2023'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.startAutoRotation();
    this.addParticles();
  }

  ngOnDestroy(): void {
    this.stopAutoRotation();
  }

  private startAutoRotation(): void {
    this.rotationInterval = setInterval(() => {
      this.siguienteTestimonio();
    }, 8000);
  }

  private stopAutoRotation(): void {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  getTestimonioActual() {
    return this.testimonios[this.testimonioActual];
  }

  siguienteTestimonio(): void {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.testimonioActual = (this.testimonioActual + 1) % this.testimonios.length;
    
    // Restablecer la animación después de que termine la transición
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
    
    this.resetAutoRotation();
  }

  testimonioAnterior(): void {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.testimonioActual = (this.testimonioActual - 1 + this.testimonios.length) % this.testimonios.length;
    
    // Restablecer la animación después de que termine la transición
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
    
    this.resetAutoRotation();
  }

  irATestimonio(index: number): void {
    if (this.isAnimating || index === this.testimonioActual) return;
    
    this.isAnimating = true;
    this.testimonioActual = index;
    
    // Restablecer la animación después de que termine la transición
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
    
    this.resetAutoRotation();
  }

  getEstrellas(cantidad: number): number[] {
    return Array(cantidad).fill(0).map((_, i) => i);
  }

  private resetAutoRotation(): void {
    this.stopAutoRotation();
    this.startAutoRotation();
  }

  // Manejo de eventos táctiles para dispositivos móviles
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const diff = this.touchStartX - this.touchEndX;
    const swipeThreshold = 50; // Mínimo de píxeles para considerar un deslizamiento

    if (diff > swipeThreshold) {
      this.siguienteTestimonio();
    } else if (diff < -swipeThreshold) {
      this.testimonioAnterior();
    }
  }

  // Añadir partículas decorativas al componente
  private addParticles(): void {
    const container = this.testimonioContainer?.nativeElement;
    if (!container) return;

    for (let i = 0; i < 3; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      container.appendChild(particle);
    }
  }

  // Manejo de navegación con teclado
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.testimonioAnterior();
        break;
      case 'ArrowRight':
        this.siguienteTestimonio();
        break;
      case 'Home':
        event.preventDefault();
        this.irATestimonio(0);
        break;
      case 'End':
        event.preventDefault();
        this.irATestimonio(this.testimonios.length - 1);
        break;
    }
  }
}
