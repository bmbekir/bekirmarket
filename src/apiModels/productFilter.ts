export enum SortType {
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  NewToOld = 3,
  OldToNew = 4,
}

export default interface ProductFilter {
  sortType: SortType;
  type: string;
  brands: string[];
  tags: string[];
  pageSize: number;
  page: number;
}
