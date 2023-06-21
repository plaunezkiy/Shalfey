// import {
//   PayloadAction,
//   createSelector,
//   createSlice,
//   createAsyncThunk,
// } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// // import loadUser from "@/lib/auth/loadUser";
// import { API_URL } from "@/lib/const";
// import loadUser from "@/lib/auth/loadUser";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  role: string;
};

// export interface userState {
//   user: User | undefined;
// }

// const initialState: userState = {
//   user: undefined,
// };

// export const fetchUser = createAsyncThunk("user/loadUser", async () => {
//   return await loadUser();
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<User>) => {
//       console.log(action.payload);

//       state.user = action.payload;
//     },
//     removeUser: (state, action: PayloadAction) => {
//       state.user = undefined;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchUser.fulfilled, (state, action) => {
//       state.user = action.payload;
//     });
//   },
// });

// const user = (state: RootState) => state.user;
// export const userSession = createSelector([user], (state) => {
//   return { isAuthenticated: state.user !== undefined, user: state.user };
// });

// // export const isAuthenticated = createSelector([user], (user) => !!user);
// // export const userSelector = createSelector([user], (user) => user);

// export const { setUser, removeUser } = userSlice.actions;
// export default userSlice.reducer;
