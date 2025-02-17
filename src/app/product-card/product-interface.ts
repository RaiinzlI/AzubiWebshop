export enum ProductType {
  sportSneaker = "Sport Sneaker",
  runningSneaker = "Running Sneaker",
  walkingSneaker = "Walking Sneaker",
  hikingSneaker = "Hiking Sneaker",
  pullover = "Pullover",
  hoodie = "Hoodie"
}

export interface Produkt {
  id: string;
  titel: string;
  bildUrl: string;
  beschreibung: string;
  preis: number;
  productType: ProductType;
}
