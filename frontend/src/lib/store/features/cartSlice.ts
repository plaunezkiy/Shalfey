"use client"
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { CartItem, Variant } from "@/lib/types";
import { RootState } from "../store";

export interface CartState {
  cartItems: CartItem[];
}

const sliceName = "cart";

const initialState: CartState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    increment: (state, action: PayloadAction<Variant>) => {
      const item = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (item) item.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
      localStorage.setItem(sliceName, JSON.stringify(state.cartItems));
    },
    decrement: (state, action: PayloadAction<Variant>) => {
      const item = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (item) {
        item.qty--;
        if (item.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
      localStorage.setItem(sliceName, JSON.stringify(state.cartItems));
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;
export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product.id === productId)?.qty
);

export const { setCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
