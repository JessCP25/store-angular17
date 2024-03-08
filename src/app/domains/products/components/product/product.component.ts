import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { TimeAgo1Pipe } from '@shared/pipes/time-ago-1.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, TimeAgo1Pipe, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
}
