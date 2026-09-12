export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge?: string;
  badgeColor?: "secondary" | "tertiary";
  description: string;
  longDescription: string;
  material: string;
  origin: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: ColorSwatch[];
  variants?: ProductVariant[];
  inStock: boolean;
  features: string[];
  reviews: Review[];
  related?: string[]; // product slugs
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: ColorSwatch;
}
