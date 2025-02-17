import { DecimalPipe } from '@angular/common';
import { Component, Inject, Injectable, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { Produkt } from '../product-card/product-interface';
import { ProductCardComponent } from '../product-card/product-card.component';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor() { }

  cartedProducts: Produkt[] = [];
  private productAmount: number[] = [];

  DeleteFromCart(product: Produkt): void {
    this.productAmount.splice(this.cartedProducts.indexOf(product), 1);
    this.cartedProducts.splice(this.cartedProducts.indexOf(product), 1);
  }

  AddToCart(product: Produkt): void {
    if (this.cartedProducts.includes(product)) {
      this.productAmount[this.cartedProducts.indexOf(product)]++;
    } else {
      this.cartedProducts.push(product);
      this.productAmount.push(1);
    }
  }

  RemoveFromCart(product: Produkt): void {
    if (this.productAmount[this.cartedProducts.indexOf(product)] == 1) {
     this.DeleteFromCart(product);
    }
    else {
      this.productAmount[this.cartedProducts.indexOf(product)]--;
    }
  }

  GetProductAmount(product: Produkt): number {
    return this.productAmount[this.cartedProducts.indexOf(product)];
  }
}
