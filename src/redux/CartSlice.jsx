import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    deleteproduct(state, action) {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { add, deleteproduct } = cartSlice.actions;
export default cartSlice.reducer;
