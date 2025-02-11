import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ProductCardComponent,
  Produkt,
} from './product-card/product-card.component';
import { productMock } from './product.mock';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'azubi-webshop';

  products: Produkt[] = productMock;
}