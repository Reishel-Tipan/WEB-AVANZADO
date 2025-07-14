import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoFondoComponent } from '../pagina/video-fondo/video-fondo.component';
import { InicioComponent } from '../pagina/inicio.component/inicio.component';
import { MetricasComponent } from '../pagina/metricas.component/metricas.component';
import { CarruselEmpresasComponent } from '../pagina/carrusel-empresas.component/carrusel-empresas.component';
import { TestimoniosComponent } from '../testimonios.component/testimonios.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink, VideoFondoComponent, InicioComponent, MetricasComponent, CarruselEmpresasComponent, TestimoniosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
