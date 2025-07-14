import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd, RouterModule } from '@angular/router';

declare global {
  interface Window {
    setLegalTab: (tab: string) => void;
  }
  function setLegalTab(tab: string): void;
}
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Añadir todos los iconos sólidos a la librería
library.add(fas);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  isMenuOpen = false;
  isScrolled = false;

  constructor(private router: Router) {
    // Cerrar el menú y hacer scroll al inicio al navegar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
        // Hacer scroll al inicio de la página
        window.scrollTo(0, 0);
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  // Método para cambiar la pestaña legal desde el template
  setLegalTab(tab: string) {
    if (window.setLegalTab) {
      window.setLegalTab(tab);
    }
  }
}
