import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.html',
  styleUrls: ['./confirm-dialog.css']
})
export class ConfirmDialog implements OnChanges {
  @Input() title: string = 'Confirmar acción';
  @Input() message: string = '¿Está seguro de realizar esta acción?';
  @Input() showDialog: boolean = false;
  @Output() confirmEvent = new EventEmitter<boolean>();
  
  // Propiedad interna para controlar la visibilidad con el overlay
  isVisible: boolean = false;
  
  ngOnChanges(changes: SimpleChanges) {
    // Mostrar u ocultar el diálogo cuando cambia showDialog
    if (changes['showDialog']) {
      console.log('showDialog cambió a:', this.showDialog);
      this.isVisible = this.showDialog;
    }
  }

  onConfirm() {
    console.log('Confirmación aceptada');
    this.isVisible = false;
    this.confirmEvent.emit(true);
  }

  onCancel() {
    console.log('Confirmación cancelada');
    this.isVisible = false;
    this.confirmEvent.emit(false);
  }
  
  // Prevenir que el clic en el diálogo se propague al overlay
  onDialogClick(event: Event) {
    event.stopPropagation();
  }
}
