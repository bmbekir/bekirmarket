import { Product } from "./product";
export interface TagItem {
  name: string;
  count: number;
}

export interface BrandItem {
  name: string;
  count: number;
}

export default interface ProductResult {
  products: Product[];
  pageCount: number;
  totalCount: number;
  tags: TagItem[];
  brands: BrandItem[];
}
