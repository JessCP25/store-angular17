import { Category } from "./category.model";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: Category;
  description: string;
  creationAt: string;
}
