import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Velocimetro } from './velocimetro/velocimetro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Velocimetro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Velocímetro Digital';
}
