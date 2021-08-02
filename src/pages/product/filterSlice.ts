import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductFilter, { SortType } from "../../apiModels/productFilter";
import { RootState } from "../../app/store";

export interface FilterState {
  filter: ProductFilter;
}

const initialState: FilterState = {
  filter: {
    brands: [],
    page: 1,
    pageSize: 16,
    sortType: SortType.PriceLowToHigh,
    tags: [],
    type: "mug",
  },
};
export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setSortType(state, action: PayloadAction<SortType>) {
      state.filter = { ...state.filter, sortType: action.payload };
    },
    setBrands(state, action: PayloadAction<string[]>) {
      state.filter = { ...state.filter, brands: [...action.payload], page: 1 };
    },
    setTags(state, action: PayloadAction<string[]>) {
      state.filter = { ...state.filter, tags: [...action.payload], page: 1 };
    },
    setType(state, action: PayloadAction<string>) {
      state.filter = { ...state.filter, type: action.payload, page: 1 };
    },
    setPage(state, action: PayloadAction<number>) {
      state.filter = { ...state.filter, page: action.payload };
    },
  },
});
export const { setSortType, setBrands, setTags, setType, setPage } =
  filterSlice.actions;
export const getFilter = (state: RootState) => {
  return state.productFilter.filter;
};

export default filterSlice.reducer;
