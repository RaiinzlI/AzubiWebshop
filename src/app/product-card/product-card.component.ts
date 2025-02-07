import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';



export interface Produkt {
  id: number;
  titel: string;
  bildUrl: string;
  beschreibung: string;
  preis: number;
}

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() produkt!: Produkt;

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) { }

  setCartsInvisible: boolean = true;
  itemAmount: number = 0;

  CartInteraction(number: number): void {
    this.itemAmount += number;
  
    if(this.itemAmount <= 0)
      this.setCartsInvisible = true;
    else
      this.setCartsInvisible = false;
  }
}
