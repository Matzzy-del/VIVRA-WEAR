export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string[];
  sizes: string[];
  colors?: ProductColor[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric?: string;
}

export interface TechFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GeneratedImage {
  imageUrl: string;
  prompt: string;
  aspectRatio: string;
  imageSize: string;
}
