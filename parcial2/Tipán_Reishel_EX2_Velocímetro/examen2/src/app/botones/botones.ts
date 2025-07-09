import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botones.html',
  styleUrl: './botones.css'
})
export class Botones {
  @Output() acelerar = new EventEmitter<void>();
  @Output() frenar = new EventEmitter<void>();
  @Output() reiniciar = new EventEmitter<void>();

  onAcelerar() {
    this.acelerar.emit();
  }

  onFrenar() {
    this.frenar.emit();
  }

  onReiniciar() {
    this.reiniciar.emit();
  }
}
