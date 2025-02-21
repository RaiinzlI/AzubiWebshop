import { Component, inject, ViewChildren, QueryList, OnInit, numberAttribute } from '@angular/core';
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

  cartService: CartService = inject(CartService);

  isExpanded: boolean = false;

  isFading = false; // Steuert die Animation
  fadeIn = true; // Steuert das Ein- oder Ausblenden

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
    console.log('Checkbox Status:', eventData.checked);

    const index = this.productTypesArray.indexOf(eventData.productType);

    if (index !== -1) {
      this.productTypeBooleans[index] = eventData.checked;
    }
  }

  UpdateFilteredProducts(): void { //schlechte lösung //Animation eventuell nervig
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
          //console.log("updated array")
        }
      }
      this.productSliceComponents.forEach(x => x.UpdateCart());

    } else {
      console.log(`Produkt mit ID ${product.id} nicht gefunden.===================`);
    }

    if (productCardComp) {
      productCardComp.UpdateCart();
    } else {
      console.log(`Produkt mit ID ${product.id} nicht gefunden.`);
    }
  }
}