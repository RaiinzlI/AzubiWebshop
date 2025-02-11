import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { Produkt } from '../product-card/product-card.component';
//import { Product } from '../product-card/product_interface';

export class CartService {

  constructor(
    private cdRef: ChangeDetectorRef, 
    private ngZone: NgZone) { }

  cartedProducts: Produkt[] = [];


  addToCart(Product: Produkt): void {
    console.log("Product added to cart");
  }

  removeFromCart(Product: Produkt): void {
    console.log("Product removed from cart");
  }