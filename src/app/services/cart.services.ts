import { DecimalPipe } from '@angular/common';
import { Component, Inject, Injectable, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { Produkt } from '../product-card/product-interface';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor() { }

  cartedProducts: Produkt[] = [];
  private productAmount: number[] = [];

  AddToCart(product: Produkt): void {
    if (this.cartedProducts.includes(product)) {
      this.productAmount[this.cartedProducts.indexOf(product)]++;
    } else {
      this.cartedProducts.push(product);
      this.productAmount.push(1);
    }

    console.clear();
    console.log("Amount of Current product:" + this.productAmount[this.cartedProducts.indexOf(product)]);
    console.log("Amount of products in cart:" + this.cartedProducts.length);
  }

  RemoveFromCart(product: Produkt): void {
    if (this.productAmount[this.cartedProducts.indexOf(product)] == 1) {
      this.productAmount.splice(this.cartedProducts.indexOf(product), 1);
      this.cartedProducts.splice(this.cartedProducts.indexOf(product), 1);
    }
    else {
      this.productAmount[this.cartedProducts.indexOf(product)]--;
    }
  }

  GetProductAmount(product: Produkt): number {
    return this.productAmount[this.cartedProducts.indexOf(product)];
  }

  GetCartedProducts(): Produkt[] {
    return this.cartedProducts;
  }
}
