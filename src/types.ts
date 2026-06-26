export type PageType = 'home' | 'about' | 'products' | 'services' | 'blog' | 'contact' | 'wishlist';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Luxury' | 'Sports' | 'Smart' | 'Classic';
  image: string;
  features: string[];
  movement: string;
  waterResistance: string;
  glassType: string;
  strapMaterial: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[];
  publishedDate: string;
  image: string;
  author: string;
  readTime: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
