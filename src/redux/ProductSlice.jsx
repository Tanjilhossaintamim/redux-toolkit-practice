import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idel",
};

const productSlice = createSlice({
  name: "product",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idel";
      })
      .addCase(getProducts.rejected,(state,action)=>{
        state.status='failed'
      })
      
  },
});

export const { fetchProduct } = productSlice.actions;

export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = data.json();
  return result;
});
