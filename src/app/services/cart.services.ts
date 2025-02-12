import { DecimalPipe } from '@angular/common';
import { Component, Inject, Injectable, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { Produkt } from '../product-card/product-interface';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor() { }

  cartedProducts: Produkt[] = [];


  addToCart(Product: Produkt): void {
    console.log("Product added to cart");
  }

  removeFromCart(Product: Produkt): void {
    console.log("Product removed from cart");
  }
}