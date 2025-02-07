import { Produkt } from './product-card/product-card.component';

export const productMock: Produkt[] = [
  {
    id: 1,
    titel: "Parfüm",
    beschreibung: 'Parfüm',
    bildUrl:
      'https://cms.brnstc.de/product_images/680x930_retina/cpro/s3li/1122x1536/18/05/1000518595_0.jpg',
    preis: 189.99,
  },
  {
    id: 2,
    titel: "Sehr lange Sneaker",
    beschreibung: 'Ein paar Schuhe für sport, nicht von Nike :)',
    bildUrl:"productPictures/sneaker1.jpeg",
    preis: 189.99,
  },
  {
    id: 3,
    titel: "Sneaker",
    beschreibung: 'Gute Treter',
    bildUrl:"productPictures/sneaker2.jpeg",
    preis: 189.99,
  },
  {
    id: 4,
    titel: "Schuhe",
    beschreibung: "Ein paar Schuhe für sport",
    bildUrl:"productPictures/sneaker3.jpeg",
    preis: 189.99,
  },
];
