import { CartProduct, Product } from "../../apiModels/product";

export function addToCart(
  items: Array<CartProduct>,
  product: Product
): Array<CartProduct> {
  let item = items.find((item) => item.product.slug === product.slug);
  if (item) {
    item.count++;
  } else {
    item = new CartProduct(product, 1);
    items.push(item);
  }
  return items;
}

export function incraseProduct(
  items: Array<CartProduct>,
  product: Product
): Array<CartProduct> {
  let item = items.find((item) => item.product.slug === product.slug);
  if (item) {
    item.count++;
  }
  return items;
}
export function decraseProduct(
  items: Array<CartProduct>,
  product: Product
): Array<CartProduct> {
  let index = items.findIndex((item) => item.product.slug === product.slug);
  if (index >= 0) {
    const item = items[index];
    item.count--;
    if (item.count == 0) items.splice(index, 1);
  }
  return items;
}
