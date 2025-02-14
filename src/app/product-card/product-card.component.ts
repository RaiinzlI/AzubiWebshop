import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.services';
import { Produkt } from './product-interface';
@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() produkt!: Produkt;

  constructor(
    private cartService: CartService) { }

  setCartsInvisible: boolean = true;
  itemAmount: number = 0;

  AddToCart(): void {
    this.cartService.AddToCart(this.produkt);
    this.UpdateCart();
  }

  RemoveFromCart(): void {
    this.cartService.RemoveFromCart(this.produkt);
    this.UpdateCart();
  }

  UpdateCart(): void {
    this.itemAmount = this.cartService.GetProductAmount(this.produkt);

    if (this.itemAmount >= 0)
      this.setCartsInvisible = false;
    else
      this.setCartsInvisible = true;
  }
}