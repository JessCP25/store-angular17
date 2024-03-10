import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private baseURL = 'https://api.escuelajs.co/api/v1/products';

  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(this.baseURL);
  }

  getOne(id: string){
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }
}
