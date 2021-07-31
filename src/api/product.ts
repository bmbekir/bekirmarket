import { Product } from "../apiModels/product";
import * as productsJson from "../jsons/items.json";
const products = productsJson as Array<Product>;

// get tags from All Products
const allTags = Array.from(
  new Set(
    products.reduce((arr, item) => {
      arr.push(...item.tags);
      return arr;
    }, [] as Array<string>)
  )
);
/**
 *
 * @param filter filter is phrase to search text (only starts with)
 * @returns
 */
export default function getTags(filter: string) {
  const lowerFilter = filter.toLowerCase();
  return allTags.filter((item) => item.toLowerCase().startsWith(lowerFilter));
}
