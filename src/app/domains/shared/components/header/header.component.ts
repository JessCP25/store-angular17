import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent{
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  total = this.cartService.total;
  cart = this.cartService.cart;


  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

}
