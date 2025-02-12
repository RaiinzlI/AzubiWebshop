import { Component, inject } from '@angular/core';
import {ProductCardComponent} from './product-card/product-card.component';
import { Produkt } from './product-card/product-interface';
import { productMock } from './product.mock';
import { CartProductSliceComponent } from "./cart-product-slice/cart-product-slice.component";
import { CartService } from './services/cart.services';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, CartProductSliceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'azubi-webshop';

  allProducts: Produkt[] = productMock;
  cartProducts: Produkt[] = [];
  
  isExpanded: boolean = false;

  cartService: CartService = inject(CartService);

  ngOnInit() {
    this.cartProducts = this.cartService.cartedProducts;
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}