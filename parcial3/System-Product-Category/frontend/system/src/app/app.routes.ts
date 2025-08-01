import { Routes } from '@angular/router';
import { ProductList } from './components/products/product-list/product-list';
import { ProductForm } from './components/products/product-form/product-form';
import { CategoryList } from './components/categories/category-list/category-list';
import { CategoryForm } from './components/categories/category-form/category-form';

export const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'products', component: ProductList },
  { path: 'products/new', component: ProductForm },
  { path: 'products/edit/:id', component: ProductForm },
  { path: 'categories', component: CategoryList },
  { path: 'categories/new', component: CategoryForm },
  { path: 'categories/edit/:id', component: CategoryForm },
  { path: '**', redirectTo: '/categories' }
];
