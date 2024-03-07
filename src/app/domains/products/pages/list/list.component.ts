import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit{
  products = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe({
      next: (products)=>{
        this.products.set(products);
      }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
