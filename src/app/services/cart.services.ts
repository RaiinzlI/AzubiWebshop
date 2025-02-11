import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { Product } from '../models/product.model';


export class CartService {

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) { }

  Products: Product[] = [];
}