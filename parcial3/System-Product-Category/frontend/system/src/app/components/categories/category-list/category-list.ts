import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category-service';
import { Category } from '../../../models/category.model';
import { ConfirmDialog } from '../../../shared/confirm-dialog/confirm-dialog';
import { Alert } from '../../../shared/alert/alert';
import { LoadingSpinner } from '../../../shared/loading-spinner/loading-spinner';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ConfirmDialog, Alert, LoadingSpinner],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.css']
})
export class CategoryList implements OnInit {
  categories: Category[] = [];
  loading = true;
  loadingMessage = 'Cargando categorías...';
  alertMessage = '';
  alertType: 'success' | 'error' | 'warning' | 'info' = 'info';
  showAlert = false;
  showDeleteDialog = false;
  categoryToDelete: number | null = null;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
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

  private loadCategories(): void {
    this.loading = true;
    this.loadingMessage = 'Cargando categorías...';
    
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
        if (categories.length === 0) {
          this.showAlertMessage('No se encontraron categorías. Crea una para comenzar.', 'info');
        }
      },
      error: (err) => {
        this.loading = false;
        this.showAlertMessage('Error al cargar las categorías. Por favor, intente nuevamente.', 'error');
        console.error('Error loading categories:', err);
      }
    });
  }

  confirmDelete(categoryId: number): void {
    this.categoryToDelete = categoryId;
    this.showDeleteDialog = true;
  }

  onDeleteConfirmed(confirmed: boolean): void {
    this.showDeleteDialog = false;
    
    if (confirmed && this.categoryToDelete !== null) {
      this.deleteCategory(this.categoryToDelete);
    }
    
    this.categoryToDelete = null;
  }

  private deleteCategory(id: number): void {
    this.loading = true;
    this.loadingMessage = 'Eliminando categoría...';
    
    this.categoryService.deleteCategory(id).subscribe({
      next: () => {
        this.categories = this.categories.filter(cat => cat.id !== id);
        this.loading = false;
        this.showAlertMessage('Categoría eliminada correctamente', 'success');
      },
      error: (err) => {
        this.loading = false;
        this.showAlertMessage('Error al eliminar la categoría. Asegúrate de que no tenga productos asociados.', 'error');
        console.error('Error deleting category:', err);
      }
    });
  }

  getProductCount(categoryId: number): number {
    // Este método debería ser implementado si se desea mostrar el conteo de productos por categoría
    // Se podría implementar si el servicio de productos tiene un método para contar productos por categoría
    return 0;
  }
}
