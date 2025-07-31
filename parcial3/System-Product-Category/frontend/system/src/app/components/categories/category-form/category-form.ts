import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../models/category.model';
import { Alert } from '../../../shared/alert/alert';
import { LoadingSpinner } from '../../../shared/loading-spinner/loading-spinner';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Alert, LoadingSpinner],
  templateUrl: './category-form.html',
  styleUrls: ['./category-form.css']
})
export class CategoryForm implements OnInit {
  categoryForm: FormGroup;
  isEditMode = false;
  categoryId: number | null = null;
  loading = false;
  loadingMessage = 'Cargando categoría...';
  alertMessage = '';
  alertType: 'success' | 'error' | 'warning' | 'info' = 'info';
  showAlert = false;

  // Getter para acceder a los controles del formulario
  get f() { return this.categoryForm.controls; }
  get description() { return this.categoryForm.get('description'); }

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.categoryId = +id;
        this.loadCategory(this.categoryId);
      }
    });
  }

  private showAlertMessage(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    
    // Ocultar automáticamente después de 5 segundos si no es un error
    if (type !== 'error') {
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  }

  loadCategory(id: number): void {
    this.loading = true;
    this.loadingMessage = 'Cargando categoría...';
    this.categoryService.getCategory(id).subscribe({
      next: (category) => {
        this.categoryForm.patchValue({
          name: category.name,
          description: category.description || ''
        });
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showAlertMessage('Error al cargar la categoría', 'error');
        console.error('Error loading category:', err);
        // Redirigir a la lista después de mostrar el error
        setTimeout(() => this.router.navigate(['/categories']), 3000);
      }
    });
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) {
      // Marcar todos los campos como tocados para mostrar errores de validación
      Object.keys(this.categoryForm.controls).forEach(key => {
        this.categoryForm.get(key)?.markAsTouched();
      });
      this.showAlertMessage('Por favor complete el campo de nombre correctamente', 'warning');
      return;
    }

    this.loading = true;
    this.loadingMessage = this.isEditMode ? 'Actualizando categoría...' : 'Creando categoría...';
    const categoryData = this.categoryForm.value as Category;

    const handleSuccess = () => {
      const message = this.isEditMode ? 'Categoría actualizada correctamente' : 'Categoría creada correctamente';
      this.showAlertMessage(message, 'success');
      // Redirigir después de mostrar el mensaje de éxito
      setTimeout(() => this.router.navigate(['/categories']), 1500);
    };

    const handleError = (err: any) => {
      const message = this.isEditMode ? 'Error al actualizar la categoría' : 'Error al crear la categoría';
      this.showAlertMessage(message, 'error');
      this.loading = false;
      console.error('Error saving category:', err);
    };

    if (this.isEditMode && this.categoryId) {
      this.categoryService.updateCategory(this.categoryId, categoryData).subscribe({
        next: handleSuccess,
        error: handleError
      });
    } else {
      this.categoryService.createCategory(categoryData).subscribe({
        next: handleSuccess,
        error: handleError
      });
    }
  }

  get name() {
    return this.categoryForm.get('name');
  }
}
