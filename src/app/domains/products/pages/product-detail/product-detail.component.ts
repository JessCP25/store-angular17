import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  image = signal<string>('');

  ngOnInit(): void {
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) =>{
          this.product.set(product);
          this.image.set(product.images[0])
        }
      })
    }
  }
  changeImage(newImage: string){
    this.image.set(newImage);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    }
  }
}
