import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface HabilidadBlanda {
  nombre: string;
  descripcion: string;
  icono: string;
}

interface MiembroEquipo {
  id: number;
  nombre: string;
  rol: string;
  descripcion: string;
  foto: string;
  habilidades: string[];
  habilidadesBlandas: HabilidadBlanda[];
}

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, NgFor, FontAwesomeModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  currentIndex = 0;
  isAnimating = false;

  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex + 1) % this.equipo.length;
    setTimeout(() => this.isAnimating = false, 500);
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex - 1 + this.equipo.length) % this.equipo.length;
    setTimeout(() => this.isAnimating = false, 500);
  }

  goTo(index: number) {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;
    this.currentIndex = index;
    setTimeout(() => this.isAnimating = false, 500);
  }
  equipo: MiembroEquipo[] = [
    {
      id: 1,
      nombre: 'Jonathan Jaguaco',
      rol: 'Full Stack Developer & Fundador',
      descripcion: 'Especialista en desarrollo web moderno con experiencia en Angular, React y Node.js. Lidera el equipo con visión innovadora y pasión por crear soluciones escalables.',
      foto: 'assets/images/jonathan.jpeg',
      habilidades: ['Angular', 'TypeScript', 'Node.js', 'AWS'],
      habilidadesBlandas: [
        { 
          nombre: 'Liderazgo', 
          descripcion: 'Guía al equipo hacia el éxito con visión clara y motivación',
          icono: 'fas fa-flag-checkered'
        },
        { 
          nombre: 'Comunicación', 
          descripcion: 'Expresa ideas complejas de manera clara y efectiva',
          icono: 'fas fa-comments'
        },
        { 
          nombre: 'Resolución', 
          descripcion: 'Encuentra soluciones creativas a desafíos complejos',
          icono: 'fas fa-lightbulb'
        }
      ]
    },
    {
      id: 2,
      nombre: 'Stefany Díaz',
      rol: 'Frontend Developer & UI/UX',
      descripcion: 'Experta en interfaces de usuario modernas y experiencia del usuario. Se especializa en crear diseños intuitivos y responsivos que conectan con los usuarios.',
      foto: 'assets/images/stefy.jpeg',
      habilidades: ['React', 'Vue.js', 'Figma', 'Tailwind'],
      habilidadesBlandas: [
        { 
          nombre: 'Creatividad', 
          descripcion: 'Diseña experiencias únicas y atractivas',
          icono: 'fas fa-palette'
        },
        { 
          nombre: 'Empatía', 
          descripcion: 'Se pone en el lugar del usuario para crear mejores diseños',
          icono: 'fas fa-heart'
        },
        { 
          nombre: 'Trabajo en equipo', 
          descripcion: 'Colabora efectivamente con desarrolladores y stakeholders',
          icono: 'fas fa-users'
        }
      ]
    },
    {
      id: 3,
      nombre: 'Reishel Tipán',
      rol: 'Backend Developer & DevOps',
      descripcion: 'Especialista en arquitecturas de servidor y despliegue continuo. Apasionado por la optimización de rendimiento y la seguridad en aplicaciones web.',
      foto: 'assets/images/reishel.jpeg',
      habilidades: ['Node.js', 'Python', 'Docker', 'Kubernetes'],
      habilidadesBlandas: [
        { 
          nombre: 'Pensamiento lógico', 
          descripcion: 'Resuelve problemas complejos con enfoque analítico',
          icono: 'fas fa-brain'
        },
        { 
          nombre: 'Orientación al detalle', 
          descripcion: 'No pasa por alto los pequeños pero importantes detalles',
          icono: 'fas fa-search-plus'
        },
        { 
          nombre: 'Adaptabilidad', 
          descripcion: 'Se ajusta rápidamente a nuevas tecnologías y entornos',
          icono: 'fas fa-sync-alt'
        }
      ]
    }
  ];

  getAnimationDelay(index: number): string {
    return `${0.1 + (index * 0.2)}s`;
  }
}
