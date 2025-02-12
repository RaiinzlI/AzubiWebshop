import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.services';
import { Produkt } from '../product-card/product-interface';

@Component({
  selector: 'app-cart-product-slice',
  imports: [],
  templateUrl: './cart-product-slice.component.html',
  styleUrl: './cart-product-slice.component.scss'
})
export class CartProductSliceComponent {
  @Input() produkt!: Produkt;

  constructor(
    private cartService: CartService) { }

  setCartsInvisible: boolean = true;
  itemAmount: number = 0;

 AddToCart(): void {
  //   this.cartService.AddToCart(this.produkt, this.itemAmount);
  //   this.CartInteraction(1);
 }

  RemoveFromCart(): void {
  //   this.cartService.RemoveFromCart(this.produkt, this.itemAmount);
  //   this.CartInteraction(-1);
  }

  CartInteraction(number: number): void {
    this.itemAmount += number;
  
    if(this.itemAmount <= 0)
      this.setCartsInvisible = true;
    else
      this.setCartsInvisible = false;
  }
}