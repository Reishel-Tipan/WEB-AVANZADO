import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
  styleUrls: ['./habilidades.css', '../../styles.css']
})
export class Habilidades implements OnInit {
  private isVisible = false;
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (this.isVisible) return;
    
    const element = this.el.nativeElement.querySelector('.seccion');
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Si el elemento está en el viewport
    if (rect.top <= windowHeight * 0.75) {
      this.isVisible = true;
      element.classList.add('visible');
    }
  }
}
