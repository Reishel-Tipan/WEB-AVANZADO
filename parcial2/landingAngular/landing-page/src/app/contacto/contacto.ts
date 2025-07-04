import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, OnInit, signal } from '@angular/core';

type AlertType = 'success' | 'error' | 'info' | 'warning';

interface Alert {
  id: number;
  message: string;
  type: AlertType;
}

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css', '../../styles.css']
})
export class Contacto implements OnInit {
  // Usando signal para el estado del formulario
  formData = signal<FormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  
  // Usando signal para las alertas
  alerts = signal<Alert[]>([]);
  private alertId = 0;

  constructor() { }
  
  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  showAlert(message: string, type: AlertType = 'info'): void {
    const id = this.alertId++;
    // Creamos una nueva referencia del array para asegurar la detección de cambios
    const currentAlerts = this.alerts();
    currentAlerts.unshift({ id, message, type });
    this.alerts.set([...currentAlerts]);
    
    // Cerrar automáticamente después de 5 segundos
    setTimeout(() => {
      this.closeAlert(id);
    }, 5000);
  }

  closeAlert(id: number): void {
    this.alerts.update(alerts => alerts.filter(alert => alert.id !== id));
  }

  enviarMensaje(form: NgForm): void {
    if (form.invalid) {
      this.showAlert('Por favor, completa todos los campos obligatorios.', 'error');
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData().email)) {
      this.showAlert('Por favor, ingresa un correo electrónico válido.', 'error');
      return;
    }

    // Mostrar mensaje de éxito
    this.showAlert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
    
    // Limpiar el formulario
    this.formData.set({ nombre: '', email: '', asunto: '', mensaje: '' });
    form.resetForm();
    
    // Mostrar mensaje de agradecimiento después de 2 segundos
    setTimeout(() => {
      this.showAlert('Gracias por tu mensaje. Valoramos mucho tu interés.', 'info');
    }, 2000);
  }

  // Método para actualizar el formulario cuando se usa con [(ngModel)]
  updateFormData(partial: Partial<FormData>): void {
    this.formData.update(current => ({ ...current, ...partial }));
  }
}