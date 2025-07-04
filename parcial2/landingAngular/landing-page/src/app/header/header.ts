import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css',
              '../../styles.css'] 
})
export class Header {
  menuActivo = false;

  toggleMenu() {
    this.menuActivo = !this.menuActivo;
    document.body.classList.toggle('menu-open', this.menuActivo);
  }

  cerrarMenu() {
    this.menuActivo = false;
    document.body.classList.remove('menu-open');
  }
}
