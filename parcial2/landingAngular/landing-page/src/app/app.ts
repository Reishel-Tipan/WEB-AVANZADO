import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Perfil } from './perfil/perfil';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Habilidades } from './habilidades/habilidades';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Perfil,
    SobreMi,
    Habilidades,
    Proyectos,
    Contacto,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Reishel Tipán - Portafolio';
}
