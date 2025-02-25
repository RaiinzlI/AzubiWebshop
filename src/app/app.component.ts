import { Component, inject, ViewChildren, QueryList, OnInit, numberAttribute, booleanAttribute } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { Produkt, ProductType } from './product-card/product-interface';
import { productMock } from './product.mock';
import { CartService } from './services/cart.services';

import { ProductCardComponent } from './product-card/product-card.component';
import { CartProductSliceComponent } from "./cart-product-slice/cart-product-slice.component";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { FormBuilder, FormArray } from '@angular/forms';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CartProductSliceComponent, ProductFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChildren(CartProductSliceComponent) productSliceComponents!: QueryList<CartProductSliceComponent>;
  @ViewChildren(ProductCardComponent) productCardComponents!: QueryList<ProductCardComponent>;
  title = 'azubi-webshop';

  allProducts: Produkt[] = productMock;
  filteredProducts: Produkt[] = [];
  cartedProducts: Produkt[] = [];

  productTypesArray: ProductType[] = Object.values(ProductType);
  productTypeBooleans: boolean[] = new Array(this.productTypesArray.length).fill(true);
  //productTypeVisibilities: boolean[] = new Array(this.productTypesArray.length).fill(false);

  cartService: CartService = inject(CartService);

  isExpanded: boolean = false;

  isFading = false; 
  fadeIn = true;

  ngOnInit() {
    this.cartedProducts = this.cartService.cartedProducts;

    this.UpdateFilteredProducts();

    this.cartService.productUpdate$.subscribe(({ product, dellme }) => {
      if (product) {
        this.UpdateProductComponents(product, dellme);
      }
    });
  }

  OnCheckboxChanged(eventData: { checked: boolean, productType: ProductType }) {
    const index = this.productTypesArray.indexOf(eventData.productType);

    if (index !== -1) {
      this.productTypeBooleans[index] = eventData.checked;
    }

    const trueCount = this.productTypeBooleans.reduce((count, value) => value === true ? count + 1 : count, 0);

    if (trueCount === this.productTypeBooleans.length && eventData.checked) {
      this.productTypeBooleans = this.productTypeBooleans.map(() => false);
      this.productTypeBooleans[index] = eventData.checked;
    }

    if (trueCount === 0)
      this.productTypeBooleans = this.productTypeBooleans.map(() => true);

  }

  UpdateFilteredProducts(): void {    //cards udpdaten noch nicht
    this.filteredProducts.length = 0;
    setTimeout(() => { //anim
      this.allProducts.forEach(product => {
        let productTypeIndex = this.productTypesArray.indexOf(product.productType);
        if (this.productTypeBooleans[productTypeIndex]) {
          this.filteredProducts.push(product);
        }
      });
    }, 50); //anim
  }

  getDelay(index: number): string { //anim
    return `${index * 0.04}s`;
  }

  //======================================

  ToggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  CalculateTotalMoney(): number {
    let totalMoneyAmount = 0;
    this.cartedProducts.forEach(product => {
      totalMoneyAmount += this.cartService.GetProductAmount(product) * product.preis;
    });
    return totalMoneyAmount;
  }

  UpdateProductComponents(product: Produkt, dellme: boolean = false): void {
    const productSliceComp = this.productSliceComponents.find(comp => comp.produkt.id === product.id);
    const productCardComp = this.productCardComponents.find(comp => comp.produkt.id === product.id);

    if (productSliceComp) {
      if (dellme) {
        const index = this.productSliceComponents.toArray().findIndex(comp => comp.produkt.id === product.id);
        if (index !== -1) {
          const updatedComponents = this.productSliceComponents.toArray().filter(comp => comp.produkt.id !== product.id);
          this.productSliceComponents.reset(updatedComponents);
        }
      }
      this.productSliceComponents.forEach(x => x.UpdateCart());

    } else {
      console.log(`Productslice mit ID ${product.id} nicht gefunden.`);
    }

    if (productCardComp) {
      productCardComp.UpdateCart();
    } else {
      console.log(`Productcomp mit ID ${product.id} nicht gefunden.`);
    }
  }
}






//=== Produkt filter 
// UpdateFilteredProducts(): void {     
  //   setTimeout(() => {
  //     this.productTypesArray.forEach((_, index) => {
  //       this.productTypeVisibilities[index] = this.productTypeBooleans[index] ? true : false;
  //     });
  //   }, 50); //anim
  // }

  // getDelay(index: number): string { //anim
  //   return `${index * 0.04}s`;
  // }

  //     <div class="product-card" *ngFor="let product of allProducts; let i = index"
  //     [ngClass]="{ 'fade-in': !isFading }" 
  //     [ngStyle]="{ 'animation-delay': getDelay(i) }"
  //     [hidden]="!productTypeVisibilities[productTypesArray.indexOf(product.productType)]">
  //     <app-product-card [produkt]="product" id="prod-comp"
  //     ></app-product-card>
  //   </div>
  // </div>
