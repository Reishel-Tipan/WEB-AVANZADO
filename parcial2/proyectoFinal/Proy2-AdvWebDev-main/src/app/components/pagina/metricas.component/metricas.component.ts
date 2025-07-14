import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faLaptopCode, 
  faMobileAlt, 
  faShoppingCart, 
  faArrowRight,
  faUsers,
  faStar,
  faRocket,
  faGlobe,
  faUserTie,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metricas-component',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './metricas.component.html',
  styleUrl: './metricas.component.css'
})
export class MetricasComponent {
  
  // Iconos FontAwesome para servicios
  faLaptopCode = faLaptopCode;
  faMobileAlt = faMobileAlt;
  faShoppingCart = faShoppingCart;
  faArrowRight = faArrowRight;
  
  // Iconos FontAwesome para métricas
  faUsers = faUsers;
  faStar = faStar;
  faRocket = faRocket;
  faGlobe = faGlobe;
  faUserTie = faUserTie;
  faCalendarAlt = faCalendarAlt;

}
