import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {ProductCardComponent} from './product-card/product-card.component';
import { Produkt } from './product-card/product-interface';
import { productMock } from './product.mock';
import { CartProductSliceComponent } from "./cart-product-slice/cart-product-slice.component";
import { CartService } from './services/cart.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CartProductSliceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'azubi-webshop';

  allProducts: Produkt[] = productMock;
  cartProducts: Produkt[] = [];
  
  isExpanded: boolean = false;
  isCartEmpty: boolean = true;

  cartService: CartService = inject(CartService);

  ngOnInit() {
    this.cartProducts = this.cartService.cartedProducts;
    if(this.cartProducts.length > 0) {
      this.isCartEmpty = false;
    }
    else this.isCartEmpty = true;
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    console.log("toggle sidebar");
  }
}