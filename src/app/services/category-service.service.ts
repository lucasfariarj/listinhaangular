// category.service.ts
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private localStorageKey = 'categories';

  constructor() { }

  getAllCategories(): Category[] {
    const storedCategories = localStorage.getItem(this.localStorageKey);
    return storedCategories ? JSON.parse(storedCategories) : [];
  }

  saveCategory(category: Category): void {
    const categories = this.getAllCategories();
    categories.push(category);
    localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
  }

  removeCategory(category: Category): void {
    let categories = this.getAllCategories();
    categories = categories.filter(c => c.id !== category.id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
  }

  updateCategory(updatedCategory: Category): void {
    const categories = this.getAllCategories();
    const index = categories.findIndex(c => c.id === updatedCategory.id);
    if (index !== -1) {
      categories[index] = updatedCategory;
      localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
    }
  }
}
