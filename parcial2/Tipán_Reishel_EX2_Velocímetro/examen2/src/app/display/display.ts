import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display {
  @Input() velocidad: number = 0;
  @Input() claseVelocidad: string = 'low-speed';
}
