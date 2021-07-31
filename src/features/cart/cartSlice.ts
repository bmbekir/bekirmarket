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
///
const p1: Product = {
  tags: ["Trees"],
  price: 1,
  name: "Handcrafted Trees Mug",
  description:
    "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
  slug: "Handcrafted-Trees-Mug",
  added: 1485723766805,
  manufacturer: "OHara-Group",
  itemType: "mug",
};
const p2: Product = {
  tags: ["Beach", "Ocean", "Water"],
  price: 10,
  name: "Rustic Beach Mug",
  description:
    "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
  slug: "Rustic-Beach-Mug",
  added: 1481573896833,
  manufacturer: "Sipes-Inc",
  itemType: "mug",
};
const p3: Product = {
  tags: ["Desert", "People"],
  price: 100,
  name: "Practical People Shirt",
  description:
    "et repellat voluptatibus corrupti labore velit ut voluptatem sequi tenetur nulla nam incidunt et maiores impedit qui vel quos ut fugiat",
  slug: "Practical-People-Shirt",
  added: 1478785068028,
  manufacturer: "Bernier-Hane",
  itemType: "shirt",
};

initialState.items = addToCart(initialState.items, p1);
initialState.items = addToCart(initialState.items, p2);
initialState.items = addToCart(initialState.items, p3);
initialState.items = addToCart(initialState.items, p3);
///
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
