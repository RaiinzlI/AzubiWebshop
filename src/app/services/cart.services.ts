import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produkt } from '../product-card/product-interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private productUpdateSubject = new BehaviorSubject<Produkt | null>(null);   //
  productUpdate$ = this.productUpdateSubject.asObservable();                  //Oberable welches die App Component überwacht

  cartedProducts: Produkt[] = [];
  private productAmount: number[] = [];

  constructor() { }

  DeleteFromCart(product: Produkt): void {
    const index = this.cartedProducts.indexOf(product);
    if (index !== -1) {
      this.productAmount.splice(index, 1);
      this.cartedProducts.splice(index, 1);
      this.NotifyProductUpdate(product);
    }
  }

  AddToCart(product: Produkt): void {
    if (this.cartedProducts.includes(product)) {
      this.productAmount[this.cartedProducts.indexOf(product)]++;
    } else {
      this.cartedProducts.push(product);
      this.productAmount.push(1);
    }
    this.NotifyProductUpdate(product);
  }

  RemoveFromCart(product: Produkt): void {
    const index = this.cartedProducts.indexOf(product);
    if (this.productAmount[index] === 1) { //Wenn ein produkt übrig => aus listen löschen
      console.log("lösche das produkt") //DEBUG
      this.DeleteFromCart(product);
    } else {
      console.log("entferne ein produkt") //DEBUG
      this.productAmount[index]--;
      this.NotifyProductUpdate(product);
    }
  }

  GetProductAmount(product: Produkt): number {
    return this.productAmount[this.cartedProducts.indexOf(product)];
  }

  GetAllProductsAmount(): string {
    let allProducts = 0;
    this.cartedProducts.forEach(product => {
      allProducts += this.productAmount[this.cartedProducts.indexOf(product)];
    });
  
    if (allProducts === 0) {
      return '';
    }
  
    if (allProducts >= 10) {
      return '9+';
    }
  
    return allProducts.toString();
  }
  
  
  private NotifyProductUpdate(product: Produkt): void {
    this.productUpdateSubject.next(product);
  }
}
