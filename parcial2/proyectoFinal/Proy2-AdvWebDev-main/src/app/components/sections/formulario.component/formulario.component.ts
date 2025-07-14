import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  contactoForm!: FormGroup;
  submitted = signal(false);
  formSuccess = signal(false);
  
  // Señal para rastrear el estado de envío del formulario
  isSubmitting = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.createForm();
  }

  private createForm() {
    return this.fb.group({
      nombre: ['', [
        Validators.required, 
        Validators.minLength(3),
        this.noWhitespaceValidator,
        this.noSpecialCharsValidator
      ]],
      email: ['', [
        Validators.required, 
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
      ]],
      empresa: ['', [
        this.noWhitespaceValidator,
        this.noSpecialCharsValidator
      ]],
      servicio: ['', Validators.required],
      mensaje: ['', [
        Validators.required,
        Validators.minLength(10),
        this.noWhitespaceValidator,
        (control: any) => {
          const words = control.value ? control.value.trim().split(/\s+/) : [];
          return words.length >= 3 ? null : { minWords: true };
        }
      ]]
    });
  }

  // Validador personalizado para espacios en blanco
  noWhitespaceValidator(control: any) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  // Validador personalizado para caracteres especiales
  noSpecialCharsValidator(control: any) {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const isValid = !specialChars.test(control.value || '');
    return isValid ? null : { 'specialChars': true };
  }

  // Getter para acceder facilmente a los controles del formulario
  get f() { 
    return this.contactoForm.controls; 
  }

  onSubmit() {
    this.submitted.set(true);
    this.isSubmitting.set(true);

    // Detener si el formulario es inválido
    if (this.contactoForm.invalid) {
      this.isSubmitting.set(false);
      return;
    }

    // Simulamos el envío del formulario
    console.log('Formulario enviado', this.contactoForm.value);
    
    // Mostrar mensaje de éxito y reiniciar el formulario
    this.formSuccess.set(true);
    this.contactoForm.reset();
    this.submitted.set(false);
    this.isSubmitting.set(false);
    
    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      this.formSuccess.set(false);
    }, 5000);
  }
}
