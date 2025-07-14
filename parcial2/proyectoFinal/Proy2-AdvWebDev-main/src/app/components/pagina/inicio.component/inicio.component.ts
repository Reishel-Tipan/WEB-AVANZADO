import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-component',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  faArrowRight = faArrowRight;
}
