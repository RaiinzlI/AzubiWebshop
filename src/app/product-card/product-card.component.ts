import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.services';
import { Produkt } from './product-interface';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() produkt!: Produkt;

  constructor(
    protected cartService: CartService,
    private appComponent: AppComponent ) { }

  setCartsInvisible: boolean = true;
  productAmount: number = 0;

  ngOnInit() {
    this.UpdateProductAmount();
  }

  UpdateProductAmount() {
    this.productAmount = this.cartService.GetProductAmount(this.produkt) ?? 0;
  }

  AddToCart() {
    this.cartService.AddToCart(this.produkt);
    this.UpdateProductAmount();
  }

  RemoveFromCart() {
    this.cartService.RemoveFromCart(this.produkt);
    this.UpdateProductAmount();
  }

  UpdateCart(): void {
    this.appComponent.CalculateTotalMoney();
    this.UpdateProductAmount();
  }

  

  PreviousImg(): void{

  }

  NextImg(): void{
    
  }
}