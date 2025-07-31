import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product-service';
import { CategoryService } from '../../../services/category-service';
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';
import { Alert } from '../../../shared/alert/alert';
import { LoadingSpinner } from '../../../shared/loading-spinner/loading-spinner';
import { ConfirmDialog } from '../../../shared/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, Alert, LoadingSpinner, ConfirmDialog],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  products: Product[] = [];
  categories: { [key: number]: string } = {};
  loading = true;
  loadingMessage = 'Cargando productos...';
  alertMessage = '';
  alertType: 'success' | 'error' | 'warning' | 'info' = 'info';
  showAlert = false;
  showDeleteDialog = false;
  productToDelete: number | null = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private showAlertMessage(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    
    // Ocultar automáticamente después de 5 segundos
    if (type !== 'error') {
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  }

  private loadProducts(): void {
    this.loading = true;
    this.loadingMessage = 'Cargando productos...';
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
        if (products.length === 0) {
          this.showAlertMessage('No se encontraron productos.', 'info');
        }
      },
      error: (err) => {
        this.showAlertMessage('Error al cargar los productos', 'error');
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  private loadCategories(): void {
    this.loadingMessage = 'Cargando categorías...';
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories.reduce((acc, category) => {
          acc[category.id!] = category.name;
          return acc;
        }, {} as { [key: number]: string });
      },
      error: (err) => {
        console.error('Error al cargar categorías', err);
      }
    });
  }

  confirmDelete(id: number): void {
    this.productToDelete = id;
    this.showDeleteDialog = true;
  }

  onDeleteConfirmed(confirmed: boolean): void {
    this.showDeleteDialog = false;
    
    if (confirmed && this.productToDelete !== null) {
      this.loading = true;
      this.loadingMessage = 'Eliminando producto...';
      const productId = this.productToDelete;
      
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id !== productId);
          this.loading = false;
          this.showAlertMessage('Producto eliminado correctamente', 'success');
        },
        error: (err) => {
          this.loading = false;
          this.showAlertMessage('Error al eliminar el producto', 'error');
          console.error('Error deleting product:', err);
        },
        complete: () => {
          this.productToDelete = null;
        }
      });
    } else {
      this.productToDelete = null;
    }
  }

  getCategoryName(categoryId: number): string {
    return this.categories[categoryId] || 'Sin categoría';
  }
}
