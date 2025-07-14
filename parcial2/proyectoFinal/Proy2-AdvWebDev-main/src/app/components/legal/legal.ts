import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './legal.html',
  styleUrls: ['./legal.css']
})
export class Legal {
  activeTab: string = 'privacidad';

  // @ts-ignore
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  
  // Hacer el método accesible desde el DOM
  constructor() {
    // @ts-ignore
    window.setLegalTab = (tab: string) => {
      this.setActiveTab(tab);
    };
  }
}
