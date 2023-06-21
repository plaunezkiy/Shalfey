import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Variant } from "@/lib/types";
import { RootState } from "../store";

export interface LikedState {
  likedItems: Variant[];
}

const sliceName = "liked";

const initialState: LikedState = {
  likedItems: [],
};

export const likedSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setLiked: (state, action: PayloadAction<Variant[]>) => {
      state.likedItems = action.payload;
    },
    addToLiked: (state, action: PayloadAction<Variant>) => {
      const item = state.likedItems.find((el) => el.id === action.payload.id);
      if (item) {
        state.likedItems = state.likedItems.filter(
          (el) => el.id !== action.payload.id
        );
      } else {
        state.likedItems.push(action.payload);
      }
      localStorage.setItem(sliceName, JSON.stringify(state.likedItems));
    },
  },
});

const likedItems = (state: RootState) => state.liked.likedItems;
export const totalLikedItemSelector = createSelector(
  [likedItems],
  (variants) => variants.length
);

export const variantLikedSelector = createSelector(
  [likedItems, (cartItems, productId: number) => productId],
  (cartItems, productId) => !!cartItems.find((el) => el.id === productId)
);

export const { setLiked, addToLiked } = likedSlice.actions;
export default likedSlice.reducer;
