import { Produkt, ProductType } from './product-card/product-interface';

export const productMock: Produkt[] = [
  // Sneaker
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 1",
    beschreibung: 'Bequeme und stylische Sportschuhe.',
    bildUrl: "productPictures/sneaker1.jpeg",
    preis: 89.99,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 2",
    beschreibung: 'Perfekt für jedes Workout.',
    bildUrl: "productPictures/sneaker2.jpeg",
    preis: 79.99,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 3",
    beschreibung: 'Modischer Sneaker für jeden Tag.',
    bildUrl: "productPictures/sneaker3.jpeg",
    preis: 109.99,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 4",
    beschreibung: 'Funktional und komfortabel.',
    bildUrl: "productPictures/sneaker4.jpeg",
    preis: 99.99,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 5",
    beschreibung: 'Schneller Style mit viel Komfort.',
    bildUrl: "productPictures/sneaker5.jpeg",
    preis: 95.00,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 6",
    beschreibung: 'Schlichter Sport-Sneaker.',
    bildUrl: "productPictures/sneaker6.jpeg",
    preis: 89.99,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 7",
    beschreibung: 'Perfekter Sneaker für sportliche Aktivitäten.',
    bildUrl: "productPictures/sneaker7.jpeg",
    preis: 120.00,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 8",
    beschreibung: 'Sportlich und trendy zugleich.',
    bildUrl: "productPictures/sneaker8.jpeg",
    preis: 79.99,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 9",
    beschreibung: 'Der Sneaker für jedes Abenteuer.',
    bildUrl: "productPictures/sneaker9.jpeg",
    preis: 100.00,
    productType: ProductType.sneaker,
  },
  {
    id: crypto.randomUUID(),
    titel: "Sneaker 10",
    beschreibung: 'Leichter Sneaker für den Alltag.',
    bildUrl: "productPictures/sneaker10.jpeg",
    preis: 90.00,
    productType: ProductType.sneaker,
  },

  // Brillen
  {
    id: crypto.randomUUID(),
    titel: "Glasses 1",
    beschreibung: 'Stylische Sonnenbrille für den Sommer.',
    bildUrl: "productPictures/glasses1.jpeg",
    preis: 49.99,
    productType: ProductType.sunglasses,
  },
  {
    id: crypto.randomUUID(),
    titel: "Glasses 2",
    beschreibung: 'Modische Brille für alle Gelegenheiten.',
    bildUrl: "productPictures/glasses2.jpeg",
    preis: 59.99,
    productType: ProductType.sunglasses,
  },

  // Hoodies
  {
    id: crypto.randomUUID(),
    titel: "Hoodie 1",
    beschreibung: 'Bequemer Hoodie für jeden Tag.',
    bildUrl: "productPictures/hoodie1.jpeg",
    preis: 49.99,
    productType: ProductType.sweatshirt,
  },
  {
    id: crypto.randomUUID(),
    titel: "Hoodie 2",
    beschreibung: 'Lässiger Hoodie für den Alltag.',
    bildUrl: "productPictures/hoodie2.jpeg",
    preis: 54.99,
    productType: ProductType.sweatshirt,
  },
  {
    id: crypto.randomUUID(),
    titel: "Hoodie 3",
    beschreibung: 'Gemütlicher Hoodie für kalte Tage.',
    bildUrl: "productPictures/hoodie3.jpeg",
    preis: 59.99,
    productType: ProductType.sweatshirt,
  },
  {
    id: crypto.randomUUID(),
    titel: "Hoodie 4",
    beschreibung: 'Perfekt für den entspannten Look.',
    bildUrl: "productPictures/hoodie4.jpeg",
    preis: 60.00,
    productType: ProductType.sweatshirt,
  },
  {
    id: crypto.randomUUID(),
    titel: "Hoodie 5",
    beschreibung: 'Kuschlig und stylisch.',
    bildUrl: "productPictures/hoodie5.jpeg",
    preis: 65.00,
    productType: ProductType.sweatshirt,
  },
  {
    id: crypto.randomUUID(),
    titel: "Hoodie 6",
    beschreibung: 'Weicher Hoodie für die kalte Jahreszeit.',
    bildUrl: "productPictures/hoodie6.jpeg",
    preis: 55.00,
    productType: ProductType.sweatshirt,
  },

  // Schmuck
  {
    id: crypto.randomUUID(),
    titel: "Schmuck 1",
    beschreibung: 'Schmuckstück für besondere Anlässe.',
    bildUrl: "productPictures/bling1.jpeg",
    preis: 39.99,
    productType: ProductType.jewelry,
  },
  {
    id: crypto.randomUUID(),
    titel: "Schmuck 2",
    beschreibung: 'Eleganter Schmuck für jeden Tag.',
    bildUrl: "productPictures/bling2.jpeg",
    preis: 49.99,
    productType: ProductType.jewelry,
  },

  // Handtaschen
  {
    id: crypto.randomUUID(),
    titel: "Handtasche 1",
    beschreibung: 'Elegante Handtasche für den Alltag.',
    bildUrl: "productPictures/bag1.jpeg",
    preis: 79.99,
    productType: ProductType.handbag,
  },
  {
    id: crypto.randomUUID(),
    titel: "Handtasche 2",
    beschreibung: 'Praktische und stilvolle Tasche.',
    bildUrl: "productPictures/bag2.jpeg",
    preis: 89.99,
    productType: ProductType.handbag,
  },

  // Parfüm
  {
    id: crypto.randomUUID(),
    titel: "Parfüm 1",
    beschreibung: '-',
    bildUrl: "productPictures/perfume2.jpeg",
    preis: 79.99,
    productType: ProductType.handbag,
  },
  {
    id: crypto.randomUUID(),
    titel: "Parfüm 2",
    beschreibung: '-',
    bildUrl: "productPictures/perfume1.jpeg",
    preis: 89.99,
    productType: ProductType.handbag,
  },
];
