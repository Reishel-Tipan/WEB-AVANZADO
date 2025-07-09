import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Botones } from '../botones/botones';
import { Display } from '../display/display';

@Component({
  selector: 'app-velocimetro',
  standalone: true,
  imports: [CommonModule, Botones, Display],
  templateUrl: './velocimetro.html',
  styleUrl: './velocimetro.css'
})
export class Velocimetro {
  velocidad: number = 0;
  claseVelocidad: string = 'low-speed';

  actualizarVelocidad(cambio: number) {
    this.velocidad = Math.max(0, this.velocidad + cambio);
    this.actualizarClaseVelocidad();
  }

  reiniciar() {
    this.velocidad = 0;
    this.actualizarClaseVelocidad();
  }

  private actualizarClaseVelocidad() {
    if (this.velocidad <= 30) {
      this.claseVelocidad = 'low-speed';
    } else if (this.velocidad <= 70) {
      this.claseVelocidad = 'medium-speed';
    } else if (this.velocidad <= 120) {
      this.claseVelocidad = 'high-speed';
    } else {
      this.claseVelocidad = 'danger-speed';
    }
  }
}
