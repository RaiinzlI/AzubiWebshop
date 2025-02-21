import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductType } from '../product-card/product-interface';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  @Input() productType!: ProductType;

  @Output() checkboxChanged = new EventEmitter<{ checked: boolean, productType: ProductType }>();

  checkValue(event: Event, productType: ProductType) {
  const checkbox = event.target as HTMLInputElement;
  console.log('Product Type:', productType);  // Überprüfe, ob der productType hier verfügbar ist
  this.checkboxChanged.emit({ checked: checkbox.checked, productType: productType });
}

}
