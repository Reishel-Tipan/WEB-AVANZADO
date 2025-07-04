import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="perfil" class="seccion perfil">
      <div class="foto">
        <img src="assets/images/portafolio1.jpeg" alt="Reishel Tipán" loading="lazy">
      </div>
      <div class="info">
        <h1>Reishel Dayelin Tipán Ávila</h1>
        <h2>Estudiante de Ingeniería de Software</h2>
      </div>
    </section>
  `,
  styleUrls: ['./perfil.css',
              '../../styles.css']
})
export class Perfil {
  constructor() {}
}
