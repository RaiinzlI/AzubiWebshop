import { Component, inject, ViewChildren, QueryList, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { Produkt, ProductType } from './product-card/product-interface';
import { productMock } from './product.mock';
import { CartService } from './services/cart.services';

import { ProductCardComponent } from './product-card/product-card.component';
import { CartProductSliceComponent } from "./cart-product-slice/cart-product-slice.component";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CartProductSliceComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChildren(CartProductSliceComponent) productSliceComponents!: QueryList<CartProductSliceComponent>;
  @ViewChildren(ProductCardComponent) productCardComponents!: QueryList<ProductCardComponent>;
  title = 'azubi-webshop';

  allProducts: Produkt[] = productMock;
  cartProducts: Produkt[] = [];

  totalMoneyAmount: number = 0;


  cartService: CartService = inject(CartService);

  isExpanded: boolean = false;

  ngOnInit() {
    this.cartProducts = this.cartService.cartedProducts;
      this.cartService.productUpdate$.subscribe((product) => {
        if (product) {
          this.UpdateProductComponents(product);
        }
      });
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  CalculateTotalMoney(): void {
    this.totalMoneyAmount = 0;
    this.cartProducts.forEach(product => {
      this.totalMoneyAmount += this.cartService.GetProductAmount(product) * product.preis;
    });
  }

  UpdateProductComponents(product: Produkt): void {
    const productSliceComp = this.productSliceComponents.find(comp => comp.produkt.id === product.id);
    const productCardComp = this.productCardComponents.find(comp => comp.produkt.id === product.id);
    if (productSliceComp) {
      productSliceComp.UpdateCart();
    } else {
      console.log(`Produkt mit ID ${product.id} nicht gefunden.`);
    }

    if (productCardComp) {
      productCardComp.UpdateCart();
    } else {
      console.log(`Produkt mit ID ${product.id} nicht gefunden.`);
    }
  }
}