import { Product } from "../apiModels/product";
import ProductFilter, { SortType } from "../apiModels/productFilter";
import ProductResult, { BrandItem, TagItem } from "../apiModels/productresult";
import productsJson from "../jsons/items.json";
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

const allBrands = Array.from(
  new Set(
    products.reduce((arr, item) => {
      arr.push(item.manufacturer);
      return arr;
    }, [] as Array<string>)
  )
);

/**
 *
 * @param filter product filter
 * @returns Product tags and brands
 */
export default function getProducts(filter: ProductFilter): ProductResult {
  let results = products.filter((item) => item.itemType == filter.type);
  const tags: TagItem[] = allTags.map((item) => ({
    count: results.filter((p) => p.tags.includes(item)).length,
    name: item,
  }));
  const brands: BrandItem[] = allBrands.map((item) => ({
    count: results.filter((p) => p.manufacturer === item).length,
    name: item,
  }));
  const totalCount = results.length;

  const hasAllBrands = filter.brands.includes("*");
  const hasAllTags = filter.brands.includes("*");

  results = results.filter(
    (item) =>
      (hasAllBrands || filter.brands.includes(item.manufacturer)) &&
      (hasAllTags ||
        filter.tags.reduce(
          (res, tag) => res || item.tags.includes(tag),
          false as boolean
        ))
  );
  results = results.slice(
    filter.pageSize * (filter.page - 1),
    filter.pageSize * filter.page
  );
  switch (filter.sortType) {
    case SortType.NewToOld:
      results = results.sort((item1, item2) => item1.added - item2.added);
      break;
    case SortType.OldToNew:
      results = results.sort((item1, item2) => item2.added - item1.added);
      break;
    case SortType.PriceHighToLow:
      results = results.sort((item1, item2) => item2.price - item1.price);
      break;
    case SortType.PriceLowToHigh:
      results = results.sort((item1, item2) => item1.price - item2.price);
      break;
  }
  return {
    brands,
    tags,
    pageCount:
      Math.floor(totalCount / filter.pageSize) +
      (totalCount % filter.pageSize == 0 ? 0 : 1),
    products: results,
  };
}
