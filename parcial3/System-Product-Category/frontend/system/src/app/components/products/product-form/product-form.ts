import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product-service';
import { CategoryService } from '../../../services/category-service';
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';
import { Alert } from '../../../shared/alert/alert';
import { LoadingSpinner } from '../../../shared/loading-spinner/loading-spinner';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Alert, LoadingSpinner],
  templateUrl: './product-form.html',
  styleUrls: ['./product-form.css']
})
export class ProductForm implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];
  isEditMode = false;
  loading = false;
  loadingMessage = 'Cargando formulario...';
  alertMessage = '';
  alertType: 'success' | 'error' | 'warning' | 'info' = 'info';
  showAlert = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      categoryId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    
    // Verificar si estamos en modo edición
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.loadProduct(this.productId);
    }
  }

  private loadProduct(id: number): void {
    this.loading = true;
    this.loadingMessage = 'Cargando producto...';
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showAlertMessage('Error al cargar el producto', 'error');
        console.error('Error loading product:', err);
        // Redirigir a la lista después de mostrar el error
        setTimeout(() => this.router.navigate(['/products']), 3000);
      }
    });
  }

  private loadCategories(): void {
    this.loading = true;
    this.loadingMessage = 'Cargando categorías...';
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showAlertMessage('Error al cargar las categorías', 'error');
        console.error('Error loading categories:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      // Marcar todos los campos como tocados para mostrar errores de validación
      Object.keys(this.productForm.controls).forEach(key => {
        this.productForm.get(key)?.markAsTouched();
      });
      this.showAlertMessage('Por favor complete todos los campos requeridos correctamente', 'warning');
      return;
    }

    this.loading = true;
    this.loadingMessage = this.isEditMode ? 'Actualizando producto...' : 'Creando producto...';
    const productData = this.productForm.value;

    const handleSuccess = () => {
      const message = this.isEditMode ? 'Producto actualizado correctamente' : 'Producto creado correctamente';
      this.showAlertMessage(message, 'success');
      // Redirigir después de mostrar el mensaje de éxito
      setTimeout(() => this.router.navigate(['/products']), 1500);
    };

    const handleError = (err: any) => {
      const message = this.isEditMode ? 'Error al actualizar el producto' : 'Error al crear el producto';
      this.showAlertMessage(message, 'error');
      this.loading = false;
      console.error('Error saving product:', err);
    };

    if (this.isEditMode && this.productId) {
      this.productService.updateProduct(this.productId, productData).subscribe({
        next: handleSuccess,
        error: handleError
      });
    } else {
      this.productService.createProduct(productData).subscribe({
        next: handleSuccess,
        error: handleError
      });
    }
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

  // Métodos de conveniencia para acceder a los controles del formulario
  get f() {
    return this.productForm.controls;
  }
}
