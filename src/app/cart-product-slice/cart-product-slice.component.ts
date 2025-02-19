import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.services';
import { Produkt } from '../product-card/product-interface';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-cart-product-slice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-product-slice.component.html',
  styleUrl: './cart-product-slice.component.scss'
})
export class CartProductSliceComponent {
  @Input() produkt!: Produkt;

  constructor(
    public cartService: CartService,
    private appComponent: AppComponent) { }

  isRemoving: boolean = true;
  itemAmount: number = 0;


  DeleteFromCart(): void {
    this.cartService.DeleteFromCart(this.produkt);
  }

  AddToCart(): void {
    this.cartService.AddToCart(this.produkt);
  }

  RemoveFromCart(): void {
    this.cartService.RemoveFromCart(this.produkt);
  }

  UpdateCart(): void {
    this.appComponent.CalculateTotalMoney();
  }
}