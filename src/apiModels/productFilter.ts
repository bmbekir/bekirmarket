export enum SortType {
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  NewToOld = 3,
  OldToNew = 4,
}

export default interface ProductFilter {
  sortType: SortType;
  brands: string;
  tags: string;
}
