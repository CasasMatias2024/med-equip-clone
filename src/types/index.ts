export type ProductCategory = 'system' | 'part';
export type ProductCondition = 'new' | 'refurbished';

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  title: string;
  manufacturer: string;
  condition: ProductCondition;
  modality?: string;
  partNumber?: string;
  mainImage: string;
  galleryImages: string[];
  description: string;
  specifications: Specification[];
  accessories?: string[];
  featured?: boolean;
}

export interface Specification {
  label: string;
  value: string;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  productInterest?: string;
}
