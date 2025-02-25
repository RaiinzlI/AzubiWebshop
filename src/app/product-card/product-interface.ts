export enum ProductType {
  sneaker = "Sneakers",
  sweatshirt = "Sweatshirts",
  hoodie = "Hoodies",
  sunglasses = "Sunglasses",
  jewelry = "Jewelry",
  handbag = "Handbags",
  tshirt = "T-Shirts",
  perfume = "Perfume"
}


export interface Produkt {
  id: string;
  titel: string;
  bildUrl: string[];
  beschreibung: string;
  preis: number;
  productType: ProductType;

 // isFiltered: boolean;
}
