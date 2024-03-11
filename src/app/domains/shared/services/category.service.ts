import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  private baseURL = 'https://api.escuelajs.co/api/v1/categories';

  constructor() { }

  getCategories() {
    return this.http.get<Category[]>(this.baseURL);
  }
}
