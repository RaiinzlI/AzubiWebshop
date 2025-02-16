import { Component, Input, inject } from '@angular/core';
import { ProductType } from '../product-card/product-interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  @Input() productType: ProductType = ProductType.sportSneaker; // ? 

  
}
