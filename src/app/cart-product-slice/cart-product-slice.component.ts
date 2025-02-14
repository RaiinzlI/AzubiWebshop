import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CartService } from '../services/cart.services';
import { Produkt } from '../product-card/product-interface';


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
    private cartService: CartService) { }

  isRemoving: boolean = true;
  itemAmount: number = 0;

  ngOnInit() {
    this.UpdateCart();
    //wird nicht geupdated wenn man in einer produkt card wert ändert
  }

  DeleteFromCart(): void {
    this.cartService.DeleteFromCart(this.produkt);
    this.UpdateCart();
  }

  AddToCart(): void {
    this.cartService.AddToCart(this.produkt);
    this.UpdateCart();
  }

  RemoveFromCart(): void {
    this.cartService.RemoveFromCart(this.produkt);
    this.UpdateCart();
  }

  UpdateCart(): void{
    this.itemAmount = this.cartService.GetProductAmount(this.produkt);
  }
}