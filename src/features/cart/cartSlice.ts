import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../apiModels/product";
import { RootState } from "../../app/store";
import { addToCart, incraseProduct, decraseProduct } from "./cartAPI";
export interface CartState {
  items: Array<CartProduct>;
}

const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      state.items = [...addToCart(state.items, action.payload)];
    },

    incrase(state, action: PayloadAction<Product>) {
      state.items = [...incraseProduct(state.items, action.payload)];
    },

    decrase(state, action: PayloadAction<Product>) {
      state.items = [...decraseProduct(state.items, action.payload)];
    },
  },
});

export const { add, incrase, decrase } = cartSlice.actions;
export const getAmount = (state: RootState) => {
  return state.cart.items.reduce((sum, item) => sum + item.getPrice(), 0);
};
export const getProducts = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
