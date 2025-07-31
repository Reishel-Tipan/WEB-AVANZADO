import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

type AlertType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrls: ['./alert.css']
})
export class Alert {
  @Input() type: AlertType = 'info';
  @Input() message: string = '';
  @Input() dismissible: boolean = true;
  @Input() autoDismiss: boolean = false;
  @Input() dismissTimeout: number = 5000; // 5 segundos por defecto
  @Output() dismissed = new EventEmitter<void>();
  
  @HostBinding('class') get alertClass() {
    return `alert alert-${this.type}`;
  }

  private autoDismissTimeout: any;

  ngOnInit() {
    if (this.autoDismiss) {
      this.autoDismissTimeout = setTimeout(() => {
        this.dismiss();
      }, this.dismissTimeout);
    }
  }

  dismiss() {
    if (this.autoDismissTimeout) {
      clearTimeout(this.autoDismissTimeout);
    }
    this.dismissed.emit();
  }

  ngOnDestroy() {
    if (this.autoDismissTimeout) {
      clearTimeout(this.autoDismissTimeout);
    }
  }
}
