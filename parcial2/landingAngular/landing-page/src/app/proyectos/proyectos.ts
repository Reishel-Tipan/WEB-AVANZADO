import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css','../../styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class Proyectos implements OnInit {
  isVisible = false;
  private animationTriggered = false;

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (this.animationTriggered) return;
    
    const element = document.getElementById('proyectos');
    if (!element) return;
    
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      this.isVisible = true;
      this.animationTriggered = true;
      element.classList.add('fade-in');
    }
  }
}
