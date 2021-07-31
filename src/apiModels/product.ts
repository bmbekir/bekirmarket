export interface Product {
  tags: Array<string>;
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: "mug" | "shirt";
}

export class CartProduct {
  product: Product;
  count: number;
  getPrice(): number {
    return this.count * this.product.price;
  }
  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }
}
