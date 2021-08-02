export interface Image {
  src: string;
  alt: string;
}

export interface Dimmentions {
  width: number;
  height: number;
}

export interface Recommendation {
  src: string;
  alt: string;
}

export interface Details {
  dimmentions: Dimmentions;
  size: number;
  description: string;
  recommendations: Recommendation[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  details?: null | Details;
}

export type Products = Product[];
