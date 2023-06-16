import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { cartSlice } from "./features/cartSlice";
import { likedSlice } from "./features/likedSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    liked: likedSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
