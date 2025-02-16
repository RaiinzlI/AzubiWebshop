import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, ProductCardComponent, CartProductSliceComponent, ProductFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'azubi-webshop';

  allProducts: Produkt[] = productMock;
  cartProducts: Produkt[] = [];

  //selectedFilter: ProductType = ProductType.sportSneaker;
  productTypes = Object.values(ProductType);

  formBuilder: FormBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    schuhArten: this.formBuilder.array([])
  });

  get schuhArtenArray(): FormArray { return this.form.controls.schuhArten as FormArray; }


  cartService: CartService = inject(CartService);

  isExpanded: boolean = false;

  ngOnInit() {
    this.cartProducts = this.cartService.cartedProducts;
    this.productTypes.forEach(prodType => {
      const ProduktArt = (this.formBuilder.group({ 
        checkbox: []
      }));

      this.schuhArtenArray.push(ProduktArt)});
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}