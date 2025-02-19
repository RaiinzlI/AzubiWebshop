export enum ProductType {
  sportSneaker = "Sport Sneaker",
  runningSneaker = "Running Sneaker",
  walkingSneaker = "Walking Sneaker",
  hikingSneaker = "Hiking Sneaker",
  sweatshirt = "Sweatshirt",
  hoodie = "Hoodie",
  sunglasses = "Sunglasses",
  jewelry = "Jewelry",
  handbag = "Handbag"
}


export interface Produkt {
  id: string;
  titel: string;
  bildUrl: string;
  beschreibung: string;
  preis: number;
  productType: ProductType;
}
